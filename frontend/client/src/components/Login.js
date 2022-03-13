import "./CSS/LoginPage.css"

function LoginPage(){
    return(
        <div className = "Login_container">
            <div className = "Login_box">
                <h1 className = "Login_header">Login</h1>
                <label>UserName:</label>
                <input className = "UserName"/>
                <br/>
                <label>Password:</label>
                <input className = "Password"/>
                <p className = "forgot_password"><a href = "#">Forgot Password</a></p>
            </div>
        </div>
    );
}

export default LoginPage