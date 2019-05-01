import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Thumbnail from './components/thumbnail/Thumbnail';

function App() {
  return (
    <div className="App" style={{
      height: '2500px',
      background: 'pink'
    }}>
    <Header />
    <Thumbnail/>
    </div>
  );
}

export default App;
