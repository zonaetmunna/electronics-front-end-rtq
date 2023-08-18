// components/MessageList.js
import React from "react";

const MessageList = ({ messages }) => {
  return (
    <div className="bg-white p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Messages</h2>
      <ul>
        {messages.map((message) => (
          <li key={message._id} className="mb-2">
            <div className="bg-gray-100 p-2 rounded-md">
              <strong>{message.senderName}: </strong>
              {message.content} {/* Use message.content */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MessageList;
