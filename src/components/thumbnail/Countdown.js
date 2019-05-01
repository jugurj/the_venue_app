import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

class Countdown extends Component {

    state = {
        componentInViewport: true
    }

    componentDidMount() {
    // Vanilla JavaScript to set listener to scrolling event
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
    // Remember to remove event listeners if you don't need them
        window.removeEventListener('scroll');
    }

    handleScroll = () => {
    // Check if scroll position in thumbnail viewport
        if (window.scrollY < window.innerHeight - 50) {
            this.setState({
                componentInViewport: true
            })
        } else {
            this.setState({
                componentInViewport: false
            })
        }
    }

    render() {
        return (
            <Slide left delay={500} when={this.state.componentInViewport} collapse appear>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">

                        <div className="countdown_item">
                            <div className="countdown_time">
                                23
                            </div>
                            <div className="countdown_tag">
                                Days
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                5
                            </div>
                            <div className="countdown_tag">
                                Hs
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                30
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                00
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