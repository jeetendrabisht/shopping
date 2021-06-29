function SignIn() {
    const [fnameVisible, setFnameVisible] = useState(false);
    const [lnameVisible, setLnameVisible] = useState(false);
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);
    const [cPassVisible, setCPassVisible] = useState(false);

    return <div className="content-register">
        <div className="left-content-register">
            <h2>Login</h2>
            <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="right-content-register">
            <form>
                <fieldset>
                    <legend className="sr-only">Register</legend>
                    <p>
                    <label className={fnameVisible ? "fName-visible": "fName-notVisible"} for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" onFocus={() => setFnameVisible(true)} onBlur={() => setFnameVisible(false)}></input>
                    </p>
                    <p>
                    <label className={lnameVisible ? "lName-visible": "lName-notVisible"} for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Last Name" onFocus={() => setLnameVisible(true)} onBlur={() => setLnameVisible(false)}></input>
                    </p>
                    <p>
                    <label className={emailVisible ? "email-visible": "email-notVisible"} for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" onFocus={() => setLnameVisible(true)} onBlur={() => setLnameVisible(false)}></input>
                    </p>
                    <p>
                    <label className={passVisible ? "pass-visible": "pass-notVisible"} for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" onFocus={() => setPassVisible(true)} onBlur={() => setPassVisible(false)}></input>
                    </p>
                    <p>
                    <label className={cPassVisible ? "cPass-visible": "cPass-notVisible"} for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onFocus={() => setCPassVisible(true)} onBlur={() => setCPassVisible(false)}></input>
                    </p>
                    <button type="button" value="SignUp">SignUp</button>
                </fieldset>
            </form>
        </div>
    </div>
}

export default SignIn;