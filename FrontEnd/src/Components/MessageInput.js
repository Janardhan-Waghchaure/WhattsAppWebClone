
require("../CSS/MessageInput.css");

function MessageInput(){
    return (
        <div className = "message-input">
            <img src={require("../Icons/smiley.png")} className="smiley"/>
            <img src={require("../Icons/plus.png")} className="plus"/>
            <input type="text" placeholder = "Type a message" />
            
            <img src={require("../Icons/mic.jpg")} className="mic"/>
        </div>
    );
}

export default MessageInput;