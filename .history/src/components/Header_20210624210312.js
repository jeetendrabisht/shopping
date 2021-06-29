import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
import "../scss/header.scss";

class Header extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false
        }
    }

    handleCart = () => {
        this.setState({cartOpen:true});
    }

    closeCart = () => {
        this.setState({cartOpen:false});
    }
    render() {
    return <header className="main-header">
        <nav>
            <div className="logo">
                <NavLink to="/home">
                    <img src={'../../static/images/logo.png'} alt="SabkaBazaar_Logo" />
                </NavLink>
            </div>
            <div className="navigation_content">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/products">Products</NavLink>
            </div>
            <div className="signIn_register_cart">
                <div className="signIn_register">
                    <NavLink to="/signin">SignIn</NavLink>
                    <NavLink to="/register">Register</NavLink>
                </div>
                <div className="cart" onClick={handleCart}>
                    <img src={'../../static/images/cart.svg'} alt="User_Cart" style={{ height: "22px", width: "22px" }} />
                    <p>0 items</p>
                </div>
            </div>
        </nav>
        {cartOpen && <Cart closeCart={closeCart} />}
    </header>
    }
}

export default (Header);