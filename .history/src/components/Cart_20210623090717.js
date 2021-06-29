import React from 'react';

class Cart extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartItemQuantity: 0
        }
    }

    render() {
        return <div>
            <div>
                <h3>My Cart &#8317;{this.state.cartItemQuantity}item&#8318;</h3>
            </div>
        </div>
    }
}

export default Cart;