import ContactList from "./Components/ContactList";
import MessageContainer from "./Components/MessageContainer";
import { BrowserRouter, Routes, Route, useNavigate, Router } from "react-router-dom"
import AuthContainer from "./Components/AuthComponents/AuthContainer.js"
import { useEffect, useState } from "react";
require("./CSS/App.css");

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    // code here is to keep user logged in , i.e keep showing the home screen if user refreash otherwise
    // above use state on each refreash will be set false and use will be automatically logged out on refreash
    fetch("http://localhost:8000/auth/status", {
      credentials : "include" ,
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({})
  })
      .then(res => res.json())
      .then(res => {
          if (res.status !== isLoggedIn)
              setIsLoggedIn(! isLoggedIn);
      })
      .catch(e => console.log(e));

  });



  const Container = () => {
    return <>
      <div className="container">
        <ContactList setIsLoggedIn = {setIsLoggedIn}/>
        <MessageContainer />
      </div>

    </>;
  }


    if (isLoggedIn)
      return Container();
    else 
      return <AuthContainer setIsLoggedIn = {setIsLoggedIn}/>;

}

export default App;