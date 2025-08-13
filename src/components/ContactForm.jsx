import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact-form">
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message" rows="5" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
