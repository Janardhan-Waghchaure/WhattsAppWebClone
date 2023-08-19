import { useState } from "react";
import Login from "./Login.js"
import Register from "./Register.js";


function AuthContainer(props){
    
    const [isLoginPage , setIsLoginPage] = useState(true);

    if (isLoginPage)
        return <Login setIsLoginPage = {setIsLoginPage} setIsLoggedIn = {props.setIsLoggedIn} />
    else 
        return <Register setIsLoginPage = {setIsLoginPage}/>

}

export default AuthContainer;