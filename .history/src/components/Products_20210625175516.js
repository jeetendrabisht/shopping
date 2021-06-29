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
            screenWidth: null,
            categorySelected: false

        }
        this.onClickCategory = this.onClickCategory.bind(this);
        this.handleBuyNow = this.handleBuyNow.bind(this);
        this.closeCart = this.closeCart.bind(this);
        this.onDropDownClick = this.onDropDownClick.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return { homeCategoryId: props.match.params.id, screenWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0) };
    }

    componentDidMount() {
        this.props.fetchData();
        this.props.categoryCall();
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
        const { screenWidth } = this.state;
        return screenWidth <= 600 ? <div className="products-data" key={item.id}>
            <h4>{item.name}</h4>
            <div className="item-content">
                <center><img src={"../../" + item.imageURL} alt="product_image" /></center>
                <div className="item-desc">
                    <p>{item.description}</p>
                    <div className="price-buy-button">
                        <button type="button" onClick={() => this.handleBuyNow(item)}>Buy Now &#64; MRP Rs. {item.price}</button>
                    </div>
                </div>
            </div>
            <hr className="hr-data" />
        </div> : <div className="products-data" key={item.id}>
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

    onDropDownClick(event) {
        let { value } = event.target;
        if (value === "All") {
            this.setState({ flag: false });
        } else {
            const { items } = this.props;
            let filterData = items.filter(item => item.category === value);
            this.setState({ filteredData: filterData, flag: true });
        }
    }

    render() {
        const { items, category } = this.props;
        const { flag, filteredData, homeCategoryId, cartOpen, screenWidth, categorySelected } = this.state;
        return <div className={screenWidth <= 600 ? "main-content-product-mobile" : "main-content-product"}>
            {screenWidth <= 600 ?
                <select className="dropdown-content" onChange={(event) => this.onDropDownClick(event)}>
                    <option key="All" value="All">All</option>
                    {category.map(categoryData => {
                        return <option key={categoryData.id} value={categoryData.id}>{categoryData.name}</option>
                    })}
                </select>
                : <div className="category">
                    {category.map(categoryData => {
                        return <div className={(categorySelected ? "selected-category" : "") + " products-category"} onClick={() => this.onClickCategory(categoryData.id)} key={categoryData.id}>
                            <button>{categoryData.name}</button>
                        </div>
                    })}
                    {homeCategoryId ? null : <div className="products-category" onClick={() => this.showAll()}>
                        <button>All</button>
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