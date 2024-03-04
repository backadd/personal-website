import react from 'react';
import  './Contact.css';
import data from "../data/contactData.json"

const Contact = () => {
  return (
    <div className="contact">
      <p>You can <a href={`mailto:${data.email}`}>email me</a> about anything that is on your mind.</p>
    </div>
  );
};


export default Contact;
