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
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name" onFocus={}></input>
                    </p>
                    <p>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
                    </p>
                    <p>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"></input>
                    </p>
                    <p>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
                    </p>
                    <p>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></input>
                    </p>
                    <button type="button" value="SignUp">SignUp</button>
                </fieldset>
            </form>
        </div>
    </div>
}

export default Register;