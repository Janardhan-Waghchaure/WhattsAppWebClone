import MessageHeader from "./MessageHeader.js";
import Chats from "./Chats.js"
import MessageInput from "./MessageInput.js"

require("../CSS/MessageContainer.css");

function MessageContainer(){
    return (
        <div className="message-container" >
            <MessageHeader/>
            <Chats/>
            <MessageInput/>
        </div>
    );
}

export default MessageContainer;