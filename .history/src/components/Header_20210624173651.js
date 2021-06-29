import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../scss/header.scss";

function Header() {

    let [cartOpen, setCartOpen] = useState(false);
    let [cartTotal, setCartTotal] = useState(false);

    const handleCart = () => {
        setCartOpen(true);
    }

    // const sessionKey = Object.keys(sessionStorage)[0];
    //     let registerStatus;
    //     if (sessionKey) {
    //         registerStatus = Object.keys(localStorage).filter(key => key === sessionKey);
    //     }
    //     if (!!registerStatus && registerStatus.length) {
    //         const userType = sessionKey && JSON.parse(sessionStorage.getItem(sessionKey)).userType;
    //         if (userType !== "registered") {
    //            //TODO
    //         } else {
    //             let dbData = JSON.parse(localStorage.getItem(sessionKey));
    //             if (!!dbData) {
    //                 if (dbData.cart) {
    //                     setCartTotal(dbData.cart.reduce((acc, data) => {
    //                         return acc + (data.quantity * data.price);
    //                     }, 0));
    //                 } else {
    //                 }

    //             }

    //         }
    //     } else {
    //         sessionStorage.clear();
    //     }
    
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
                    <p>{ cartTotal } items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;