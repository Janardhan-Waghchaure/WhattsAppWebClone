require("../CSS/ContactHeader.css");
function ContactHeader(props) {

    const onClickHandler = () => {

        fetch("http://localhost:8000/auth/logout", {
            credentials : "include" ,
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then(res => {
                if (res.message === "logged out")
                    props.setIsLoggedIn(false)
                else 
                    alert(res.message);
            })
            .catch(e => console.log(e));

    };

    return (
        <div className="chats-header">
            <img className="profile" src={require("../Images/profile.jpg")} />

            <button onClick={onClickHandler}> Logout </button>

        </div>
    );
}

export default ContactHeader;