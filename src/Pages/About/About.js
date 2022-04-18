import React from 'react';
import sibli from '../../images/about/sibli.jpg'

const About = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div className='d-lg-flex align-items-center py-3 my-3 border border-4 rounded rounded-3'>
                <><img className='img-fluid rounded-circle mx-auto d-block' src={sibli} alt="" />
                </>
                <div className='p-3 text-center'>
                    <h2>Sibli Sadik Rony</h2>
                    <p>I love learning new technology. i want to be Developer who write code to solve the complex problem easily. I need to read documentation of programming language. i can read blogs about codes and listen podcast about it. All of this is important because code isn't something you learn then you are done. It's always moving and changing and you are always making mistakes.</p>
                </div>
            </div>
        </div>
    );
};

export default About;