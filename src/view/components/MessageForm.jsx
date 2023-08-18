// components/MessageForm.js
import React, { useState } from "react";

const MessageForm = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Type your message..."
      ></textarea>
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default MessageForm;
