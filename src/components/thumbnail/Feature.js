import React from 'react';
import Carrousel from './Carrousel';

import feature_logo from '../../resources/images/feature_logo.png';

const Feature = () => {
    return (
        <div>
            <Carrousel/>
            <div className="artist_feature_logo">
                <img src={feature_logo} alt="Rammstein band featuring logo"/>
            </div>
        </div>
    );
};

export default Feature;