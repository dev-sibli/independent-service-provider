import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {

    const handleCheckout = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const number = event.target.number.value;
        const address = event.target.address.value;

        if ((name && email)) {
            toast('thank you for the booking');
        }
        else {
            toast('please enter your Name & Email');
        }

    }

    return (
        <div className='container w-50'>
            <Form onSubmit={handleCheckout}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name *</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Number" name='number' />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" name='address' placeholder="Enter Address" />
                </Form.Group>
                <Button className='w-100' variant="dark" type="submit">
                    Checkout
                </Button>
                <ToastContainer />
            </Form>
        </div>
    );
};

export default Checkout;