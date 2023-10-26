import { useState } from "react";

const SendMessage = ({ submitMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    submitMessage(message);
    setMessage("");
  };

  return (
    <div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
};

export default SendMessage;
