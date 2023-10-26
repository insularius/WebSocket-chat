import { useState } from "react";
import Messages from "../components/messages/Messages";
import SendMessage from "./sendMessage/SendMessage";
const conn = new WebSocket("ws://localhost:3000/");

let userName;

conn.onopen = () => {
  userName = prompt("Как вас зовут?");
};

conn.onclose = () => {
  alert("Подключение окончено");
};

function Chat() {
  const [messages, setMessages] = useState([]);

  conn.onmessage = (e) => {
    try {
      const data = JSON.parse(e.data);
      setMessages([...messages, data]);
      console.log("Received:", typeof e.data, e.data);
    } catch (error) {
      console.error("Failed to parse message:", e.data);
    }
  };

  const submitMessage = (message) =>
    conn.send(
      JSON.stringify({ event: "chat-message", payload: { userName, message } })
    );

  return (
    <>
      <Messages messages={messages} />
      <SendMessage submitMessage={submitMessage} />
    </>
  );
}

export default Chat;
