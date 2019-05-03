import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="event_location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37198.473854714495!2d13.393973375242506!3d52.50374471880059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f4c8819b367%3A0xedafc45032d4521b!2z0J_QsNGA0Log0JPRkdGA0LvQuNGG0LXRgA!5e0!3m2!1sru!2see!4v1556886864436!5m2!1sru!2see"
                width="100%"
                height="500px"
                frameBorder="0"
                allowFullScreen
                ></iframe>
            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;