import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Feature from './components/thumbnail/Feature';

function App() {
  return (
    <div className="App" style={{
      height: '1500px',
      background: 'pink'
    }}>
    <Header />
    <Feature/>
    </div>
  );
}

export default App;
