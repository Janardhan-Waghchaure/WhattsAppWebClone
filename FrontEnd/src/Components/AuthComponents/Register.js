import { useState } from "react";
import { Link } from "react-router-dom";
require("../../CSS/Authenticate/Register.css");

function Register(props){

    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();


        fetch("http://localhost:8000/auth/register" , {
            credentials : "include" ,
            method : "POST" , 
            headers : {
              "Content-Type" : "application/json"
            } , 
            body : JSON.stringify({name : name , email : email , password : password})
          })
          .then(res => res.json())
          .then(res => {
                alert(res.message);
          })
          .catch(e => console.log(e));

        setName("");
        setEmail("");
        setPassword("");
    };
 
    return (
        <div className="register">
            <div className="header">
            </div>
            <div className="register-container">
                <span>Register</span>
                <form onSubmit={submitHandler}>

                    <div className="row">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name"  value={name} onChange={e => setName(e.target.value)} required/>
                    </div>

                    <div className="row">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email"  value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                                                   
                    <div className="row">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>

                    <button type="submit">Register</button>
                </form>

                <div>already have an account <button onClick={()=>{props.setIsLoginPage(prev => !prev)}}>Login</button></div>
            </div>
        </div>
    );
}


export default Register;