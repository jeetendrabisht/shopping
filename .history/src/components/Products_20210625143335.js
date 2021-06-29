import React from 'react';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import Cart from "./Cart";
import { getProductsAPI, getCategory, getCartItem } from '../actions';
import "../scss/products.scss";
import 'rodal/lib/rodal.css';

class Products extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            flag: false,
            homeCategoryId: null,
            visible: false,
            cartOpen: false,
            screenWidth: null

        }
        this.onClickCategory = this.onClickCategory.bind(this);
        this.handleBuyNow = this.handleBuyNow.bind(this);
        this.closeCart = this.closeCart.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return { homeCategoryId: props.match.params.id };
    }

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
        this.setState({ screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) });
    }

    onClickCategory(categoryId) {
        const { items } = this.props;
        let filterData = items.filter(item => item.category === categoryId);
        this.setState({ filteredData: filterData, flag: true });
    }

    hide() {
        this.setState({ visible: false });
    }

    handleBuyNow(item) {
        const sessionKey = Object.keys(sessionStorage)[0];
        let registerStatus;
        if (sessionKey) {
            registerStatus = Object.keys(localStorage).filter(key => key === sessionKey);
        }
        if (!!registerStatus && registerStatus.length) {
            const userType = sessionKey && JSON.parse(sessionStorage.getItem(sessionKey)).userType;
            if (userType !== "registered") {
                this.setState({ visible: true });
            } else {
                let dbData = JSON.parse(localStorage.getItem(sessionKey));
                if (!!dbData) {
                    if (dbData.cart) {
                        let idEqualDbData = dbData.cart.filter(data => data.id === item.id)
                        let idNotEqualDbData = dbData.cart.filter(data => data.id !== item.id)
                        if (idEqualDbData.length) {
                            idEqualDbData[0].quantity = idEqualDbData[0].quantity + 1;
                            idNotEqualDbData.push(idEqualDbData[0]);
                            dbData.cart = idNotEqualDbData;
                        } else {
                            let cartItem = { ...item };
                            cartItem.quantity = 1;
                            dbData.cart.push(cartItem);
                        }
                    } else {
                        let cart = [];
                        let cartItem = { ...item };
                        cartItem.quantity = 1;
                        cart.push(cartItem);
                        dbData.cart = cart;
                    }
                    let cartTotal = dbData.cart.reduce((acc, data) => {
                        return acc + data.quantity;
                    }, 0);
                    this.props.cartItem(cartTotal);
                }
                localStorage.setItem(sessionKey, JSON.stringify(dbData));
                this.setState({ cartOpen: true });
            }
        } else {
            sessionStorage.clear();
            this.setState({ visible: true });
        }
    }

    closeCart() {
        this.setState({ cartOpen: false });
    }

    filtering(item) {
        return <div className="products-data" key={item.id}>
            <h4>{item.name}</h4>
            <center><img src={"../../" + item.imageURL} alt="product_image" /></center>
            <p>{item.description}</p>
            <div className="price-buy-button">
                <span>MRP Rs.{item.price}</span>
                <button type="button" onClick={() => this.handleBuyNow(item)}>Buy Now</button>
            </div>
            <hr className="hr-data" />
        </div>
    }

    showAll() {
        this.setState({ flag: false });
    }

    render() {
        const { items, category } = this.props;
        const { flag, filteredData, homeCategoryId, cartOpen, screenWidth } = this.state;
        return <div className="main-content-product">
            {screenWidth <= 600 ? <div>
                <select>
                    {category.map(categoryData => {
                        return <option key={categoryData.id} value={categoryData.name} onClick={() => this.onClickCategory(categoryData.id)}>{categoryData.name}</option>
                    })}
                </select>
            </div> : <div className="category">
                {category.map(categoryData => {
                    return <div className="products-category" key={categoryData.id}>
                        <button onClick={() => this.onClickCategory(categoryData.id)}>{categoryData.name}</button>
                    </div>
                })}
                {homeCategoryId ? null : <div className="products-category">
                    <button onClick={() => this.showAll()}>All</button>
                </div>}
            </div>}
            <div className={screenWidth <= 600 ? "main-content-display-mobile" : "main-content-display"}>
                {(flag ? filteredData.map(item => this.filtering(item)) : homeCategoryId ? (items.filter(item => item.category === homeCategoryId)).map(item => this.filtering(item)) : items.map(item => this.filtering(item)))}
            </div>
            <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                <div className="overlay-content">Please SignIn To Purchase</div>
            </Rodal>
            {cartOpen && <Cart closeCart={this.closeCart} />}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        category: state.category,
        cartData: state.cartData
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(getProductsAPI()),
        categoryCall: () => dispatch(getCategory()),
        cartItem: (data) => dispatch(getCartItem(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);