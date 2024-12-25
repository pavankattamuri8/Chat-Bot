import React, { useState } from 'react';
import { Send } from 'lucide-react'; 
// Run: npm install lucide-react

const ChatInput = ({ onSend, disabled }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        position: 'sticky',
        bottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        borderTop: '1px solid #D8DEE9', // Light Gray border
        backgroundColor: 'red',
        borderRadius: '0.5rem',
        boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.1)',
        zIndex: '10',
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        disabled={disabled}
        style={{
          flex: 1,
          padding: '0.7rem 1rem',
          border: '1px solid red', // Light Gray border
          borderRadius: '0.5rem',
          outline: 'none',
          transition: 'border-color 0.2s',
          backgroundColor: disabled ? '#E5E9F0' : '#FFFFFF', // Soft Gray when disabled
        }}
      />
      <button
        type="submit"
        disabled={!message.trim() || disabled}
        style={{
          padding: '0.5rem',
          marginLeft: '0.5rem',
          borderRadius: '0.5rem',
          backgroundColor: disabled ? '#D8DEE9' : '#A3BE8C', // Soft Green when enabled
          color: '#FFFFFF',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.2s',
          border: 'none',
        }}
      >
        <Send size={20} />
      </button>
    </form>
  );
};

export default ChatInput;
