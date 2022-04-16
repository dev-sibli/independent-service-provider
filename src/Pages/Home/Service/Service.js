import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, picture, price, about } = props.service;
    return (
        <div className='col-4'>
            <Card>
                <Card.Img className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;