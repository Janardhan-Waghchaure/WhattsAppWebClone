
require("../CSS/MessageHeader.css");

function MessageHeader(){
    return (
        <div className = "message-header">
            <img src={require("../Icons/user.png")} className = "user" />
            <div className="info">
                <div className="person-name"> <strong> Janardhan </strong> </div>
                <div className="last-seen"> last seen today at 1:20  </div>
            </div>

            
            <img src={require("../Icons/search.png")}  className ="search" />
            <img src={require("../Icons/menu.png")}  className ="menu" />

        </div>
    );
}

export default MessageHeader;