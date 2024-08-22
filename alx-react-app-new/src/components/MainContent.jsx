import React from 'react';

const MainContent = () => {
  const mainContentStyle = {
    backgroundColor: '#f0f8ff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
  };

//function MainContent () {
    return (
      <main style={mainContentStyle}>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
    );
  };
  
  export default MainContent;