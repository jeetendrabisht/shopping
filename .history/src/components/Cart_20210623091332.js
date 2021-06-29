import React from 'react';

class Cart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartQuantity: 0,
            cartTotal: 0,
        }
    }

    render() {
        return <div>
            <div>
                <h3>My Cart &#40;{this.state.cartQuantity} item&#41;</h3>
            </div>
            <div>

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