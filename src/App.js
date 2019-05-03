import React from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

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
    <Element name="featured">
      <Thumbnail/>
    </Element>
    <Element name="venue_info">
      <VenueInfo/>
    </Element>
    <Element name="highlights">
      <Highlights/>
    </Element>
    <Element name="pricing">
      <Pricing/>
    </Element>
    <Element name="location">
      <Location/>
    </Element>
    <Footer/>
    </div>
  );
}

export default App;
