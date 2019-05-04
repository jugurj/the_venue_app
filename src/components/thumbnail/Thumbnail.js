import React from 'react';
import Carrousel from './Carrousel';
import Countdown from './Countdown';

import feature_logo from '../../resources/images/feature_logo.svg';

const Thumbnail = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Carrousel/>
            <div className="artist_feature_logo">
                <img src={feature_logo} alt="Rammstein band featuring logo"/>
            </div>
            <Countdown/>
        </div>
    );
};

export default Thumbnail;