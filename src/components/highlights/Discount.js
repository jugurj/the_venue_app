import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

class Discount extends Component {

    state = {
        discountCounter: 0,
        discountCounterLimit: 30
    }

    discountCounter = () => {
        if(this.state.discountCounter < this.state.discountCounterLimit) {
            this.setState({
                discountCounter: this.state.discountCounter + 1
            });
        }
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.discountCounter()
        }, 30)
    }


    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade
                        onReveal={() => this.discountCounter()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountCounter}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            <div>
                                Button
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;