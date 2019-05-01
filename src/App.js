import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Thumbnail from './components/thumbnail/Thumbnail';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights';

function App() {
  return (
    <div className="App">
    <Header />
    <Thumbnail/>
    <VenueInfo/>
    <Highlights/>
    </div>
  );
}

export default App;
