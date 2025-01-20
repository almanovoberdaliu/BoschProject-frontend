import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = () =>
{
  const [searchTerm, setSearchTerm] = useState('');

  // Funksioni për trajtimin e ndryshimeve në fushën e kërkimit
  const handleSearchChange = (e) =>
  {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="chat-page">
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="no-chats-message">
        There is nothing here yet. Start a new conversation via 'New Chat'.
      </div>


      <div className="chat-list">

      </div>

      <button className="new-chat-btn">New Chat</button>
    </div>
  );
};

export default ChatPage;
