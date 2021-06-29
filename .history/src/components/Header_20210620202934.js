import logo from '../../static/images/logo.png';

function Header() {
    return <header className="main-header">
        <nav>
            <div>
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
                    <img src={"../../static/images/cart.svg"} alt="User_Cart" />
                    <p>0 items</p>
                </div>
            </div>
        </nav>
    </header>
}

export default Header;