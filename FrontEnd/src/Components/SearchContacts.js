require("../CSS/SearchContacts.css");

function SearchContacts() {
    return (
        <div className="search-contacts">
            <div className="input-container">
                <img className="search-icon" src={require("../Icons/search.png")} alt="" />
                <input className="contact-input" type="search" placeholder="Search or start new chat"/>
            </div>
        </div>
    );
}

export default SearchContacts;