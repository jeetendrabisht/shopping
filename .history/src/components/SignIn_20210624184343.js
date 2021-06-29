import { useContext, useState } from "react";
import { Redirect } from 'react-router-dom';
import { StringContext } from "../App";
import "../scss/signin.scss";

function SignIn() {
    const myString = useContext(StringContext);
    const [emailVisible, setEmailVisible] = useState(false);
    const [passVisible, setPassVisible] = useState(false);

    const [userData, setUserData] = useState({
        email: "",
        pwd: ""
    });
    const [signInName, setSignInName] = useState();
    const [wrongCred, setWrongCred] = useState();
    const [notReg, setNotReg] = useState();

    const handleInput = event => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        if (userData.email !== '' && userData.pwd !== '') {
            const dbData = JSON.parse(localStorage.getItem(userData.email));
            if (dbData) {
                const pwd = dbData.pwd.split(" ")[0];
                if (dbData && dbData.email === userData.email && pwd === userData.pwd) {
                    if (sessionStorage.length >= 1) {
                        sessionStorage.clear();
                    }
                    setWrongCred(false);
                    setNotReg(false);
                    const signInUser = { ...userData, id: new Date().getTime().toString(), userType: "registered" };
                    signInUser.pwd = signInUser.pwd + myString;
                    sessionStorage.setItem(userData.email, JSON.stringify(signInUser));
                    setSignInName(dbData.fname);
                } else {
                    setWrongCred(true);
                }
            } else {
                setNotReg(true);
            }
        }
        setUserData({ email: "", pwd: "" });
    }

    return <>
        <div className="signin-info">
            {notReg ? <p>Please Register First</p> : wrongCred ? <p>Wrong Credentials. Try Again</p> : signInName && signInName !== "" && <Redirect to='/products' />}
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
                            <input type="email" value={userData.email} id="email" name="email" autoComplete="off" placeholder="Email" onFocus={() => setEmailVisible(true)} onBlur={() => setEmailVisible(false)} onChange={handleInput}></input>
                        </p>
                        <p>
                            <label className={passVisible ? "pass-visible" : "pass-notVisible"} htmlFor="password">Password</label>
                            <input type="password" id="password" name="pwd" value={userData.pwd} autoComplete="off" placeholder="Password" onFocus={() => setPassVisible(true)} onBlur={() => setPassVisible(false)} onChange={handleInput}></input>
                        </p>
                        <button type="submit" value="Login">Login</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </>
}

export default SignIn;