require("../CSS/ContactHeader.css");
function ContactHeader() {
    return (
        <div className="chats-header">
            <img className="profile" src={require("../Images/profile.jpg")} />

            <img className="menu" src={require("../Icons/menu.png")} />

        </div>
    );
}

export default ContactHeader;