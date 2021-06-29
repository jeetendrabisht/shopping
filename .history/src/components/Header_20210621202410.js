import { NavLink } from "react-router-dom";
// import logo from '../static/images/logo.png';
// import cartImage from '../static/images/cart.svg';
import "../scss/header.scss";

function Header() {
    return <header className="main-header">
        <nav>
            <div className="logo">
                <NavLink to="/home">
                    <img src={'../../public/static/images/logo.png'} alt="SabkaBazaar_Logo" />
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
                <div className="cart">
                    <img src={'../../public/static/images/cart.svg'} alt="User_Cart" style={{ height: "22px", width: "22px" }} />
                    <p>0 items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;