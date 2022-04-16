import React from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../images/banner/slider1.jpg'
import slider3 from '../../../images/banner/slider3.jpg'
import slider5 from '../../../images/banner/slider5.jpg'


const Banner = () => {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider5}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Sea Surfing</h3>
                    <p>I will make sure you will get the best surfing experience</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;