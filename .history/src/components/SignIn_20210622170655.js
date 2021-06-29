import { useState } from "react";
import "../scss/signin.scss";

function SignIn() {
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);

    const [userData, setUserData] = useState({
        email: "",
        pwd: ""
    });
    const [registerUser, setRegisterUser] = useState([]);

    const handleInput = event => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = event => {
        debugger
        event.preventDefault();
        const dbData = JSON.parse(localStorage.getItem(userData.email));
        setUserData({ email: "", pwd: "" });
    }

    return <>
        <div className="signin-info">
            <p>{registerUser[0] && registerUser[0].fname !== "" && registerUser[0].fname + " login successful"}</p>
        </div>
        <div className="content-signin">
            <div className="left-content-signin">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="right-content-signin">
                <form action="" onSubmit={handleSubmit}>
                    <fieldset>
                        <legend className="sr-only">Login</legend>
                        <p>
                            <label className={emailVisible ? "email-visible" : "email-notVisible"} htmlFor="email">Email</label>
                            <input type="email" value={userData.email}  id="email" name="email" autoComplete="off" placeholder="Email" onFocus={() => setEmailVisible(true)} onBlur={() => setEmailVisible(false)} onChange={handleInput}></input>
                        </p>
                        <p>
                            <label className={passVisible ? "pass-visible" : "pass-notVisible"} htmlFor="password">Password</label>
                            <input type="password" id="password" name="pwd" value={userData.pwd}  autoComplete="off" placeholder="Password" onFocus={() => setPassVisible(true)} onBlur={() => setPassVisible(false)} onChange={handleInput}></input>
                        </p>
                        <button type="submit" value="Login">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </>
}

export default SignIn;