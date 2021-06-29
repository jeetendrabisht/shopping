import "../scss/register.scss";

function handleSubmit() {
    return true;
}

function Register() {
    return <div className="content-register">
        <div>
            <h2>Signup</h2>
            <p>We do not share personal details with anyone.</p>
        </div>
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Register</legend>
                    <label for="fname">First Name</label>
                    <input type="text" id="fname" name="fname" placeholder="First Name"></input>
                    <label for="lname">Last Name</label>
                    <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email"></input>
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password"></input>
                    <label for="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"></input>
                </fieldset>
            </form>
        </div>
    </div>
}

export default Register;