import { Link } from "react-router-dom";
import logo from '../static/images/logo.png';
import cartImage from '../static/images/cart.svg';
import "../scss/header.scss";

function Header() {
    return <header className="main-header">
        <nav>
            <div className="logo">
                <img src={logo} alt="SabkaBazaar_Logo" />
            </div>
            <div className="navigation_content">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className="signIn_register_cart">
                <div className="signIn_register">
                    <Link to="/signin">SignIn</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className="cart">
                    <img src={cartImage} alt="User_Cart" style={{ height: "22px", width: "22px" }} />
                    <p>0 items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;