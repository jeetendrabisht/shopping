import React from 'react';

class Cart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
            cartData: [],
        }
        this.closeCart = this.closeCart.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const sessionKey = Object.keys(sessionStorage)[0];
        let registerStatus;
        let dbData;
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
                        dbData = [];
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

    render() {
        const { cartData, cartQuantity, cartTotal } = this.state;
        console.log("cartData ", cartData);
        console.log("cartQuantity ", cartQuantity);
        console.log("cartTotal ", cartTotal);
        return <div>
            <div>
                <div><h3>My Cart &#40;{cartQuantity} item&#41;</h3></div>
                <div onClick={this.closeCart}>&#10540;</div>
            </div>
            <div>
                {cartData && cartData.length && cartData.map(data => {
                    return <div>
                        <img src={"../../" + data.imageURL} alt={data.name + " image"} /> {/* Product Image */}
                        <h5>{data.name}</h5>   {/* Product name */}
                        <span>&#8722;</span>
                        <span>{data.quantity}</span>  {/* product quantity */}
                        <span>&#43;</span>
                        <span>&#215;</span>
                        <span>{data.price}</span>   {/* product price */}
                        <span>{data.quantity * data.price}</span>   {/* Product price multiply Quantity */}
                    </div>
                })}
                <div>
                    <img src={"../../static/images/lowest-price.png"} alt="lowest_price_image" />
                </div>
            </div>
            <div>
                <p>Promo code can be applied on payment page</p>
                <button type="button">
                    <span>Proceed to Checkout</span>
                    <span>Rs.{cartTotal} &#62;</span>
                </button>
            </div>
        </div>
    }
}

export default Cart;