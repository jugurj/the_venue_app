import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';

function App() {
  return (
    <div className="App" style={{
      height: '1500px',
      background: 'pink'
    }}>
    <Header />
    </div>
  );
}

export default App;
