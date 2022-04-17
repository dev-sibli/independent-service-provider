import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {

    return (
        <div className='container w-50 mx-auto mt-3'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100 mb-3' variant="primary" type="submit">
                    Login
                </Button>
                <p>New to Traveler? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button> </p>
            </Form>
        </div>
    );
};

export default Login;