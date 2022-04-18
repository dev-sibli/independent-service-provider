import React from 'react';

const Footer = () => {
    const currentYear = () => {
        return new Date().getFullYear();
    }
    return (
        <div className='text-center mt-3'>
            <p>Copyright &copy; {currentYear()}</p>
        </div>
    );
};

export default Footer;