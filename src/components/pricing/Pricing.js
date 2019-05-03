import React, { Component } from 'react';
import MainButton from '../utils/MainButton';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

    state = {
        infoBox: [
            {
                price: 100,
                position: 'Basic',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec tempor diam, et dapibus mi. Sed ac ex vitae neque egestas tincidunt vitae eget leo. Duis et lobortis leo.',
                delay: 500
            },
            {
                price: 150,
                position: 'Premium',
                desc: 'Nam risus mauris, pellentesque ullamcorper porttitor a, hendrerit sed nisi. Morbi iaculis convallis porta. Nam sed facilisis enim. Praesent lorem urna, finibus ut consectetur at, laoreet eu risus.',
                delay: 0
            },
            {
                price: 250,
                position: 'VIP',
                desc: 'Morbi cursus euismod euismod. Nullam vulputate pellentesque ligula, at volutpat dui sodales ut. In posuere urna id est blandit, sit amet porttitor erat accumsan consectetur at.',
                delay: 500
            }
        ]
    }

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">

                        {this.state.infoBox.map((box) => (
                            <Zoom delay={box.delay} key={box.position}>
                                <div className="pricing_item">
                                    <div className="pricing_inner_wrapper">
                                        <div className="pricing_title">
                                            <span>${box.price}</span>
                                            <span>{box.position}</span>
                                        </div>
                                        <div className="pricing_description">
                                            {box.desc}
                                        </div>
                                        <div className="pricing_buttons">
                                            <MainButton
                                                text="Purchase"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Zoom>
                        ))}

                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;