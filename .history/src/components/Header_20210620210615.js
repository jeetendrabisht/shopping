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
                <a href="#">Home</a>
                <a href="#">Products</a>
            </div>
            <div className="signIn_register_cart">
                <div>
                    <a href="#">SignIn</a>
                    <a href="#">Register</a>
                </div>
                <div>
                    <img src={cartImage} alt="User_Cart" style={{ height: "22px", width: "22px" }} />
                    <p>0 items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;