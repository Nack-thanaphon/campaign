import React from 'react';

const Contact = ({ name, email, phone }: any) => {
    return (
        <div>
            <h2>Contact Information</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    );
};

export default Contact;