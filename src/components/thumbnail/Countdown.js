import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {
        eventDate: 'Jul, 1, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntilEvent(this.state.eventDate), 1000);
    }

    getTimeUntilEvent = (eventDate) => {
        const dateUntilEvent = Date.parse(eventDate) - Date.parse(new Date());

        if (dateUntilEvent > 0) {
            const days = Math.floor(dateUntilEvent / (1000 * 60 * 60 * 24));
            const hours = Math.floor((dateUntilEvent / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((dateUntilEvent / 1000 / 60) % 60);
            const seconds = Math.floor((dateUntilEvent / 1000) % 60);

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        } else {
            // Event has passed...
        }
    }

    render() {
        let { days, hours, minutes, seconds } = this.state;

        return (
            <Slide left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {days}
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {hours}
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default Countdown;