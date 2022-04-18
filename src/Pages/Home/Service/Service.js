import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = (props) => {
    const { id, name, picture, price, about } = props.service;

    const navigate = useNavigate();

    const navigateCheckout = id => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className='col-lg-4'>
            <Card className='my-2'>
                <Card.Img className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>Booking Fee: </strong>${price}
                    </Card.Text>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Button onClick={() => { navigateCheckout(id) }} className='w-100 ' variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;