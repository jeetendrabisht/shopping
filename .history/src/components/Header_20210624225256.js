import React from 'react';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import Rodal from 'rodal';
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
                    } else {

                    }
                }
            }
        } else {
            sessionStorage.clear();
            this.setState({ visible: true });
        }
    }

    hide() {
        this.setState({ visible: false });
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
                <div className="cart" onClick={() => this.handleCart()}>
                    <img src={'../../static/images/cart.svg'} alt="User_Cart" style={{ height: "22px", width: "22px" }} />
                    <p>{this.props.cartData !== 0 && this.props.cartData !== [] && this.props.cartData} items</p>
                </div>
            </div>
        </nav>
        <Rodal visible={this.state.visible} onClose={this.hide.bind(this)}>
                <div className="overlay-content">Please SignIn To Purchase</div>
            </Rodal>
        {this.state.cartOpen && <Cart closeCart={() => this.closeCart()} />}
    </header>
    }
}

const mapStateToProps = (state) => {
    return {
        cartData: state.cartData
    };
};

export default connect(mapStateToProps, null)(Header);