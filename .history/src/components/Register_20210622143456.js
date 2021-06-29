import { useState } from "react";
import "../scss/register.scss";

function Register() {
    const [fnameVisible, setFnameVisible] = useState(false);
    const [lnameVisible, setLnameVisible] = useState(false);
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);
    const [cPassVisible, setCPassVisible] = useState(false);
    const [userData, setUserData] = useState({
        fname: "",
        lname: "",
        email: "",
        pwd: "",
        cPwd: ""
    });
    const [registerUser, setRegisterUser] = useState([]);

    const handleInput = event => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log("user DATA", userData);
        const newUser = { ...userData, id: new Date().getTime().toString() };
        setRegisterUser([...registerUser, newUser]);
        console.log("Registered USERS ", registerUser);
    }

    return <div className="content-register">
        <div className="left-content-register">
            <h2>Signup</h2>
            <p>We do not share personal details with anyone.</p>
        </div>
        <div className="right-content-register">
            <form action="" onSubmit={handleSubmit}>
                <fieldset>
                    <legend className="sr-only">Register</legend>
                    {/* FIRST NAME */}
                    <p>
                        <label className={fnameVisible ? "fName-visible" : "fName-notVisible"} htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="fname" autoComplete="off" placeholder="First Name" value={userData.fname} onFocus={() => setFnameVisible(true)} onBlur={() => setFnameVisible(false)} onChange={handleInput}></input>
                    </p>
                    {/* LAST NAME */}
                    <p>
                        <label className={lnameVisible ? "lName-visible" : "lName-notVisible"} htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lname" autoComplete="off" placeholder="Last Name" value={userData.lname} onFocus={() => setLnameVisible(true)} onBlur={() => setLnameVisible(false)} onChange={handleInput}></input>
                    </p>
                    {/* EMAIL */}
                    <p>
                        <label className={emailVisible ? "email-visible" : "email-notVisible"} htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" autoComplete="off" placeholder="Email" value={userData.email} onFocus={() => setEmailVisible(true)} onBlur={() => setEmailVisible(false)} onChange={handleInput}></input>
                    </p>
                    {/* PASSWORD */}
                    <p>
                        <label className={passVisible ? "pass-visible" : "pass-notVisible"} htmlFor="password">Password</label>
                        <input type="password" id="password" name="pwd" autoComplete="off" placeholder="Password" value={userData.pwd} onFocus={() => setPassVisible(true)} onBlur={() => setPassVisible(false)} onChange={handleInput}></input>
                    </p>
                    {/* CONFIRM PASSWORD */}
                    <p>
                        <label className={cPassVisible ? "cPass-visible" : "cPass-notVisible"} htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="cPwd" autoComplete="off" placeholder="Confirm Password" value={userData.cPwd} onFocus={() => setCPassVisible(true)} onBlur={() => setCPassVisible(false)} onChange={handleInput}></input>
                    </p>

                    <button type="submit" value="SignUp">SignUp</button>
                </fieldset>
            </form>
        </div>
    </div>
}

export default Register;