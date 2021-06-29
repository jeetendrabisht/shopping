function Register() {
    return <div className="content-register">
        <div>
            <h2>Signup</h2>
            <p>We do not share personal details with anyone</p>
        </div>
        <div>
            <form>
                <fieldset>
                    <legend>Register</legend>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname"></input>
                    <label for="lname">First name:</label>
                    <input type="text" id="lname" name="lname"></input>
                    <label for="email">First name:</label>
                    <input type="email" id="email" name="email"></input>
                    <label for="password">First name:</label>
                    <input type="password" id="password" name="password"></input>
                    <label for="confirmPassword">First name:</label>
                    <input type="password" id="confirmPassword" name="confirmPassword"></input>
                </fieldset>
            </form>
        </div>
    </div>
}

export default Register;