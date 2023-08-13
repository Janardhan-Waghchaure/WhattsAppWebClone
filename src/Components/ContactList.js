import ContactHeader from "./ContactHeader.js";
import SearchContacts from "./SearchContacts.js"
import Contacts from "./Contacts.js";

require("../CSS/App.css");


function ContactList(){
    return (
        <div className="contact-list">
            <ContactHeader/>
            <SearchContacts/>
            <Contacts/>
        </div>
    );
}

export default ContactList;