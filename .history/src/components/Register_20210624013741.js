import { useState } from "react";
import { Redirect } from 'react-router-dom';
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
    const [signInFlag, setSignInFlag] = useState(false);
    const [alreadyUserFlag, setAlreadyUserFlag] = useState(false);
    const [pwdMismatch, setPwdMismatch] = useState(false);

    const handleInput = event => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const generateString = length => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = ' ';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (userData.fname !== '' && userData.lname !== '' && userData.email !== '' && userData.pwd !== '' && userData.cPwd !== '') {
            const newUser = { ...userData, id: new Date().getTime().toString() };
            if (newUser.email in localStorage) {
                setAlreadyUserFlag(true);
            } else {
                if (newUser.pwd === newUser.cPwd) {
                    setPwdMismatch(false);
                    setAlreadyUserFlag(false);
                    const stringData = generateString(5);
                    newUser.pwd = newUser.pwd + stringData;
                    newUser.cPwd = newUser.cPwd + stringData;
                    localStorage.setItem(newUser.email, JSON.stringify(newUser));
                    setRegisterUser([newUser]);
                } else {
                    setPwdMismatch(true);
                }
            }
        }
        setUserData({ fname: "", lname: "", email: "", pwd: "", cPwd: "" });
    }

    const handleRegisterToSignIn = () => {
        setSignInFlag(true);
    }

    return <>
        <div className="registered-info">
            {alreadyUserFlag ? <span><p>Already Registered</p><button className="registerToSignIn" type="button" onClick={handleRegisterToSignIn}>SignIn</button></span> : pwdMismatch ? <p>Password Mismatch. Try Again</p> :
                registerUser[0] && registerUser[0].fname !== "" && <span><p>{registerUser[0].fname + " Registered"}</p><button className="registerToSignIn" type="button" onClick={handleRegisterToSignIn}>SignIn</button></span>}
            {signInFlag && <Redirect to='/signin' />}
        </div>
        <div className="content-register">
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
    </>
}

export default Register;