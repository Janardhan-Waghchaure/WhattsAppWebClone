import ContactHeader from "./ContactHeader.js";
import SearchContacts from "./SearchContacts.js"
import Contacts from "./Contacts.js";

require("../CSS/App.css");
require("../CSS/ContactList.css");

function ContactList(props){
    return (
        <div className="contact-list">
            <ContactHeader setIsLoggedIn = {props.setIsLoggedIn}/>
            <SearchContacts/>
            <Contacts/>
        </div>
    );
}

export default ContactList;