import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useGetConversationsQuery,
  useGetMessagesQuery,
  useSendMessageMutation,
} from "../../../../features/message/messageApi";
import ConversationsList from "../../../components/ConversationsList";
import MessageForm from "../../../components/MessageForm";
import MessageList from "../../../components/MessageList";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const {
    user: { _id },
  } = useSelector((state) => state.auth);
  const { data: conversations } = useGetConversationsQuery(_id);
  const { data: messages, refetch: refetchMessages } =
    useGetMessagesQuery(selectedConversation);
  const sendNewMessage = useSendMessageMutation();

  const handleSendMessage = async (messageContent) => {
    const newMessage = {
      conversation: selectedConversation,
      sender: _id,
      recipient: selectedConversation, // You need to set this correctly based on the conversation
      message: messageContent,
    };

    await sendNewMessage.mutateAsync(newMessage);
    refetchMessages(); // Refresh messages after sending
  };

  return (
    <div className="grid grid-cols-3 gap-4 p-8">
      <div className="col-span-1">
        <ConversationsList
          conversations={conversations}
          onSelectConversation={setSelectedConversation}
        />
      </div>
      <div className="col-span-2">
        {selectedConversation ? (
          <MessageList messages={messages} />
        ) : (
          <p>Select a conversation to view messages.</p>
        )}
        {selectedConversation && (
          <MessageForm onSendMessage={handleSendMessage} />
        )}
      </div>
    </div>
  );
};

export default Messages;
