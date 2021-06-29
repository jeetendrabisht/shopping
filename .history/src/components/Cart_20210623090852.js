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
                <h3>My Cart &#40;{this.state.cartItemQuantity} item&#41;</h3>
            </div>
        </div>
    }
}

export default Cart;