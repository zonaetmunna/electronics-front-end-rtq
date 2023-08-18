// components/ConversationsList.js
import React from "react";

const ConversationsList = ({ conversations, onSelectConversation }) => {
  return (
    <div className="bg-white p-4 shadow">
      <h2 className="text-lg font-semibold mb-2">Conversations</h2>
      <ul>
        {conversations?.map((conversation) => (
          <li
            key={conversation._id}
            className="cursor-pointer p-2 hover:bg-gray-100"
            onClick={() => onSelectConversation(conversation._id)}
          >
            {conversation.username} {/* Display the name or username */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationsList;
