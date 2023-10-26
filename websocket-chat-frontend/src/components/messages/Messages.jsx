const Messages = ({ messages }) => {
  return (
    <div className="messagesWindow">
      {Array.isArray(messages)
        ? messages.map((message, index) => (
            <div key={index}>
              <span>{message.payload.userName}:</span>
              <span>{message.payload.message}</span>
            </div>
          ))
        : null}
    </div>
  );
};

export default Messages;
