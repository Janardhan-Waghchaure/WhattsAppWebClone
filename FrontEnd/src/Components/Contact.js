require("../CSS/Contact.css");

function Contact(props) {
    return (
        <>
            <li className="contact">
                <img className="profile-img" src={props.img} alt="profile-image" />
                <div className="contact-info">
                    <h3> {props.name} </h3>
                    <p>{props.lastMessage}</p>
                </div>
                <span className="last-seen" >{props.lastSeen}</span>
                
            </li>
            <hr />
        </>
    );
}

export default Contact;