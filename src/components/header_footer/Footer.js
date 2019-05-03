import React from 'react';

import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_frijole footer_logo_name">
                    The Venue
                </div>
                <div className="footer_copyright">
                    &copy; The Venue Inc. 2018 All Rights Reserved
                </div>
            </Fade>
        </footer>
    );
};

export default Footer;