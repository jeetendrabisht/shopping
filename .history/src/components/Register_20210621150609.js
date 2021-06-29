import { useState } from "react";
import "../scss/register.scss";

function handleSubmit() {
    return true;
}

function Register() {
    const [fnameVisible, setFnameVisible] = useState(false);
    const [lnameVisible, setLnameVisible] = useState(false);
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);
    const [cPassVisible, setCPassVisible] = useState(false);

    return <div className="content-register">
        <div className="left-content-register">
            <h2>Signup</h2>
            <p>We do not share personal details with anyone.</p>
        </div>
        <div className="right-content-register">
            <form>
                <fieldset>
                    <legend className="sr-only">Register</legend>
                    <p>
                    <label className={fnameVisible && "fname"} for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" onFocus={() => setFnameVisible(true)}></input>
                    </p>
                    <p>
                    {lnameVisible && <label for="lname">Last Name</label>}
                    <input type="text" id="lname" name="lname" placeholder="Last Name" onFocus={() => setLnameVisible(true)}></input>
                    </p>
                    <p>
                    {emailVisible && <label for="email">Email</label>}
                    <input type="email" id="email" name="email" placeholder="Email" onFocus={() => setEmailVisible(true)}></input>
                    </p>
                    <p>
                    {passVisible && <label for="password">Password</label>}
                    <input type="password" id="password" name="password" placeholder="Password" onFocus={() => setPassVisible(true)}></input>
                    </p>
                    <p>
                    {cPassVisible && <label for="confirmPassword">Confirm Password</label>}
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onFocus={() => setCPassVisible(true)}></input>
                    </p>
                    <button type="button" value="SignUp">SignUp</button>
                </fieldset>
            </form>
        </div>
    </div>
}

export default Register;