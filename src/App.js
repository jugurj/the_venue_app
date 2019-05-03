import React from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Thumbnail from './components/thumbnail/Thumbnail';
import VenueInfo from './components/venue_info/VenueInfo';
import Highlights from './components/highlights/Highlights';
import Pricing from './components/pricing/Pricing';
import Location from './components/location/Location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Thumbnail/>
    <VenueInfo/>
    <Highlights/>
    <Pricing/>
    <Location/>
    <Footer/>
    </div>
  );
}

export default App;
