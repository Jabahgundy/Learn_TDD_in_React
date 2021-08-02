import { useState } from 'react';
import MessageList from './components/MessageList';
import NewMessageForm from "./components/NewMessageForm";


function App() {
  const [messages, setMessages] = useState([])
  const handleSend = newMessage => {
    setMessages([newMessage, ...messages]);
  };

  return (
    <div className="App">
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
