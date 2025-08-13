import React, { useState } from 'react';

const ContactInfo = () => {
  const [email, setEmail] = useState('example@gmail.com');
  const [phone, setPhone] = useState('+355...');
  const [address, setAddress] = useState('Road ...');

  return (
    <div className="contact-info">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="phone"> Phone: </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address"> Address: </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ContactInfo;
