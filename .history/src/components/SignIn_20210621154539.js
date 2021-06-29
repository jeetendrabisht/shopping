import { useState } from "react";
import "../scss/signin.scss";

function SignIn() {
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);

    return <div className="content-signin">
        <div className="left-content-signin">
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="right-content-signin">
            <form>
                <fieldset>
                    <legend className="sr-only">Login</legend>
                    <p>
                    <label className={emailVisible ? "email-visible": "email-notVisible"} htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" onFocus={() => setEmailVisible(true)} onBlur={() => setEmailVisible(false)}></input>
                    </p>
                    <p>
                    <label className={passVisible ? "pass-visible": "pass-notVisible"} htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" onFocus={() => setPassVisible(true)} onBlur={() => setPassVisible(false)}></input>
                    </p>
                    <button type="button" value="Login">Login</button>
                </fieldset>
            </form>
        </div>
    </div>
}

export default SignIn;