import ContactList from "./Components/ContactList";
import ChatsContainer from "./Components/ChatsContainer";

require("./CSS/App.css");


function App() {
  return (
    <>
      <div className = "container">
        <ContactList />
        <ChatsContainer />
      </div>
    </>
  );
}

export default App;