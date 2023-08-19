import { useState } from "react";
require("../../CSS/Authenticate/Login.css");



function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const submitHandler = (event) => {
        event.preventDefault();

        fetch("http://localhost:8000/auth/login", {
            credentials : "include" ,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: email, password: password })
        })
            .then(res => res.json())
            .then(res => {
                if (res.message === "welcome")
                    props.setIsLoggedIn(true)
                else 
                    alert(res.message);
            })
            .catch(e => console.log(e));


        setEmail("");
        setPassword("");
    };

    return (
        <div className="login">
            <div className="header">
            </div>
            <div className="login-container">
                <span>Login</span>
                <form onSubmit={submitHandler}>

                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>

                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>

                    <button type="submit">Login</button>
                </form>

                <div> dont have an account <button onClick={(prev) => { props.setIsLoginPage(!prev) }}>Register</button> </div>
            </div>
        </div>
    );
}


export default Login;