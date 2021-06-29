import React from 'react';
import "../scss/cart.scss";

class Cart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
            cartData: [],
        }
        this.closeCart = this.closeCart.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const sessionKey = Object.keys(sessionStorage)[0];
        let registerStatus;
        let cartQuantity;
        let cartTotal;
        let cart;
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
                        cart = dbData.cart;
                        cartQuantity = cart.reduce((acc, data) => {
                            return acc + data.quantity;
                        }, 0);
                        cartTotal = cart.reduce((acc, data) => {
                            return acc + (data.quantity * data.price);
                        }, 0);
                    } else {
                        cart = [];
                    }
                }
            }
        } else {
            this.setState({ visible: true });
        }
        return { cartData: cart, cartQuantity: cartQuantity, cartTotal: cartTotal };
    }

    closeCart() {
        this.props.closeCart();
    }

    increment(data) {
        let cartQuantity;
        let cartTotal;
        let cart;
        const sessionKey = Object.keys(sessionStorage)[0];
        let dbData = JSON.parse(localStorage.getItem(sessionKey));
        let thisItem = dbData.cart.filter(item => {
            return item.id === data.id
        });
        let notThisItem = dbData.cart.filter(item => {
            return item.id !== data.id
        });
        thisItem[0].quantity = thisItem[0].quantity + 1;
        notThisItem.push(thisItem[0]);
        dbData.cart = notThisItem;
        localStorage.setItem(sessionKey, JSON.stringify(dbData));
        cart = dbData.cart;
        cartQuantity = cart.reduce((acc, data) => {
            return acc + data.quantity;
        }, 0);
        cartTotal = cart.reduce((acc, data) => {
            return acc + (data.quantity * data.price);
        }, 0);
        this.setState({
            cartData: cart,
            cartQuantity: cartQuantity,
            cartTotal: cartTotal
        })
    }

    decrement(data) {
        let cartQuantity;
        let cartTotal;
        let cart;
        const sessionKey = Object.keys(sessionStorage)[0];
        let dbData = JSON.parse(localStorage.getItem(sessionKey));
        let thisItem = dbData.cart.filter(item => {
            return item.id === data.id
        });
        let notThisItem = dbData.cart.filter(item => {
            return item.id !== data.id
        });
        thisItem[0].quantity = thisItem[0].quantity - 1;
        if (thisItem[0].quantity <= 0) {
            dbData.cart = notThisItem;
            localStorage.setItem(sessionKey, JSON.stringify(dbData));
        } else {
            notThisItem.push(thisItem[0]);
            dbData.cart = notThisItem;
            localStorage.setItem(sessionKey, JSON.stringify(dbData));
        }
        cart = dbData.cart;
        cartQuantity = cart.reduce((acc, data) => {
            return acc + data.quantity;
        }, 0);
        cartTotal = cart.reduce((acc, data) => {
            return acc + (data.quantity * data.price);
        }, 0);
        this.setState({
            cartData: cart,
            cartQuantity: cartQuantity,
            cartTotal: cartTotal
        })
        if (cartTotal === 0) {
            this.props.closeCart();
        }
    }

    render() {
        const { cartData, cartQuantity, cartTotal } = this.state;
        console.log("cartData ", cartData);
        console.log("cartQuantity ", cartQuantity);
        console.log("cartTotal ", cartTotal);
        return <div className="content-cart">
            <div className="layer-1">
                <div className="cart-header"><h3>My Cart &#40;{cartQuantity} item&#41;</h3></div>
                <div className="cart-header-close" onClick={this.closeCart}>&#10540;</div>
            </div>
            <div className="layer-2">
                <div className="cartItem">
                    {cartData && cartData.length && cartData.map(data => {
                        return <div key={data.id}>
                            <div className="initial-cart-content">
                                <img src={"../../" + data.imageURL} alt={data.name + " image"} /> {/* Product Image */}
                            </div>
                            <div className="mid-cart-content">
                                <div className="cart-name">
                                    <h5>{data.name}</h5>   {/* Product name */}
                                </div>
                                <div className="cart-quantity">
                                    <span className="minus" onClick={() => this.decrement(data)}>&#8722;</span>
                                    <span className="quantity">{data.quantity}</span>  {/* product quantity */}
                                    <span className="plus" onClick={() => this.increment(data)}>&#43;</span>
                                    <span className="multiply">&#215;</span>
                                    <span className="price">Rs.{data.price}</span>   {/* product price */}
                                </div>
                            </div>
                            <div className="last-cart-content">
                                <span>Rs.{data.quantity * data.price}</span>   {/* Product price multiply Quantity */}
                            </div>
                        </div>
                    })}
                </div>
                <div className="below-cartItems-tag">
                    <img src={"../../static/images/lowest-price.png"} alt="lowest_price_image" />
                </div>
            </div>
            <div className="layer-3">
                <p>Promo code can be applied on payment page</p>
                <button type="button" className="cart-button">
                    <span>Proceed to Checkout</span>
                    <span>Rs.{cartTotal}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#62;</span>
                </button>
            </div>
        </div>
    }
}

export default Cart;