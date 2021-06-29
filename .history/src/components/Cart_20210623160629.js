import React from 'react';

class Cart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
        }
        this.closeCart = this.closeCart.bind(this);
    }

    closeCart() {
        this.props.closeCart();
    }

    render() {
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

            }
        } else {
            this.setState({ visible: true });
        }
        return <div>
            <div>
                <div><h3>My Cart &#40;{this.state.cartQuantity} item&#41;</h3></div>
                <div onClick={this.closeCart}>&#10540;</div>
            </div>
            <div>
                <div>
                    <img></img> {/* Product Image */}
                    <h5></h5>   {/* Product Description */}
                    <span>&#8722;</span>
                    <span></span>  {/* product quantity */}
                    <span>&#43;</span>
                    <span>&#215;</span>
                    <span></span>   {/* product price */}
                    <span></span>   {/* Product price multiply Quantity */}
                </div>
                <div>
                    <img src={"../../static/images/lowest-price.png"} alt="lowest_price_image" />
                </div>
            </div>
            <div>
                <p>Promo code can be applied on payment page</p>
                <button type="button">
                    <span>Proceed to Checkout</span>
                    <span>Rs.{this.state.cartTotal} &#62;</span>
                </button>
            </div>
        </div>
    }
}

export default Cart;