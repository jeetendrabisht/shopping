import React from 'react';
import { connect } from 'react-redux';
import Rodal from 'rodal';
import Cart from "./Cart";
import { getProductsAPI, getCategory } from '../actions';
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
        const registerStatus = Object.keys(localStorage).filter(key => key === sessionKey);
        const userType = sessionKey && JSON.parse(sessionStorage.getItem(sessionKey)).userType;
        if (userType !== "registered") {
            this.setState({ visible: true });
        } else {
            let dbData = JSON.parse(localStorage.getItem(sessionKey));
            if(!!dbData) {
                if (dbData.cart) {
                    for (let i = 0; i < dbData.cart.length; i++) {
                        if (dbData.cart[i].id !== item.id) {
                            dbData.cart.push(item);
                        }
                    }
                } else {
                    let cart = [];
                    cart.push(item);
                    dbData.cart = cart;
                }
            }
            localStorage.setItem(sessionKey, JSON.stringify(dbData));
            this.setState({ cartOpen: true });
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

    render() {
        const { items, category } = this.props;
        const { flag, filteredData, homeCategoryId, cartOpen } = this.state;
        return <div className="main-content-product">
            <div className="category">
                {category.map(categoryData => {
                    return <div className="products-category" key={categoryData.id}>
                        <button onClick={() => this.onClickCategory(categoryData.id)}>{categoryData.name}</button>
                    </div>
                })}
            </div>
            <div className="main-content-display">
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
        category: state.category
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(getProductsAPI()),
        categoryCall: () => dispatch(getCategory())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);