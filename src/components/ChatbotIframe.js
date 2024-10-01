import React, { useState } from 'react';

const ChatbotIframe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleChatbot = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <div
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '50px',
          height: '50px',
          backgroundColor: '#007bff',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        <img
          src="/icons/chatbot.png" // Use the imported image
          alt="Chat"
          style={{ width: '30px', height: '30px', objectFit: 'contain' }}
        />
      </div>

      {/* Chatbot iframe */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '350px',
            height: '500px',
            zIndex: 1000,
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            transition: 'opacity 0.3s ease',
            backgroundColor: '#fff', // Optional: background color for the iframe container
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Close Button */}
          <button
            onClick={toggleChatbot}
            style={{
              alignSelf: 'flex-end',
              margin: '10px',
              padding: '5px 10px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#ff4d4d',
              color: '#fff',
              cursor: 'pointer',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}
          >
            X
          </button>

          {/* Iframe */}
          <iframe
            src="https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=c1ad8cdc-bf1e-4701-8873-749ae190b421"
            style={{ width: '100%', height: '100%', border: 'none' }}
            title="Chatbot"
          />
        </div>
      )}
    </div>
  );
};

export default ChatbotIframe;
