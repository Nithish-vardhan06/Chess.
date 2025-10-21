import React from 'react';
import { Chessboard } from 'react-chessboard';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '90vw', maxWidth: '500px' }}>
        <Chessboard />
      </div>
    </div>
  );
}

export default App;