import logo from '../static/images/logo.png';
import cartImage from '../static/images/cart.svg';
import "../scss/header.scss";

function Header() {
    return <header className="main-header">
        <nav>
            <div className="logo">
                <img src={logo} alt="SabkaBazaar_Logo" />
            </div>
            <div>
                <a href="#">Home</a>
                <a href="#">Products</a>
            </div>
            <div>
                <a>SignIn</a>
                <a>Register</a>
                <div>
                    <img src={cartImage} alt="User_Cart" style={{height: "22px", width: "22px"}}/>
                    <p>0 items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;