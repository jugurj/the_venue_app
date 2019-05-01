import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Thumbnail from './components/thumbnail/Thumbnail';
import VenueInfo from './components/venue_info/VenueInfo';

function App() {
  return (
    <div className="App" style={{
      height: '2500px',
      background: 'pink'
    }}>
    <Header />
    <Thumbnail/>
    <VenueInfo/>
    </div>
  );
}

export default App;
