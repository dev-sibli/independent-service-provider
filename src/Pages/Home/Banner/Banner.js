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
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;