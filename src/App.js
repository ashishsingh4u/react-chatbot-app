import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./providers/ActionProvider";
import MessageParser from "./providers/MessageParser";
import config from "./providers/config";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          headerText="Application Support Bot"
          placeholderText="Write your query here!"
        />
      </header>
    </div>
  );
}

export default App;
