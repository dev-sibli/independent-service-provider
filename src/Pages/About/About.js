import React from 'react';
import { Card } from 'react-bootstrap';
import sibli from '../../images/about/sibli.jpg'

const About = () => {
    return (
        <div className='container mx-auto justify-content-center align-items-center mt-3'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={sibli} />
                <Card.Body>
                    <Card.Title>Sibli Sadik Rony</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;