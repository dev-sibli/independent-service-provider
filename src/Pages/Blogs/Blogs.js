import React from 'react';

const Blogs = () => {
    return (
        <div className='container border border-3 p-3'>
            <h4>Difference between authorization and authentication</h4>
            <p><strong>Authentication:</strong></p>
            <ul>
                <li>Authentication verifies user.</li>
                <li>Authentication checks the user identity through password, OTP, Biometric Information and other information provided by user.</li>
                <li>Authentication is the important step of access management process.</li>
                <li>User Can change the authentication.</li>
            </ul>
            <p><strong>Authorization:</strong></p>
            <ul>
                <li>Authorization determines what resources a user can access.</li>
                <li>Authorization are implemented and maintained by the organization.</li>
                <li>After authentication user can get authorization.</li>
                <li>User Can't change the authorization.</li>
            </ul>
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. Organizations and developer use it for authentication, hosting and other purposes. With Firebase, you can focus your time and attention on developing the best app(s) possible for your business. Since the operations and internal functions are so solid, and taken care of by the Firebase interface, you can spend more time developing the high quality app that users are going to want to use.</p>
            <p>There are plenty excellent open-source alternative to Firebase like MongoDB, Parse, Heroku, Realm etc. </p>
            <h4>What other services does firebase provide other than authentication</h4>
            <p>Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it.<strong>There are many services which Firebase provides, Most useful of them are:</strong></p>
            <ul>
                <li>Cloud Firestore</li>
                <li>Cloud Functions</li>
                <li>Hosting</li>
                <li>Cloud Storage</li>
                <li>Google Analytics</li>
                <li>Predictions</li>
                <li>Cloud Messaging</li>
                <li>Dynamic Links</li>
                <li>Remote Config</li>
            </ul>
        </div>
    );
};

export default Blogs;