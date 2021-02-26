import React from 'react';

import './contact.scss';
import Title from '../../components/sectionTitle';

import ContactForm from './Form';


function Contact (){
  
  
  return(
    
    <section id="home_contact" className="home_section">  
      <Title text="Contact"></Title>
      <div className="contactContent">
          <p className="contact_text">
          Let’s work together! Fill in the form underneath and tell me all about your project, event or dream!  
          </p>

          <div className="contact_formContainer">
              <ContactForm />
          </div>
      </div>
    </section>
  );
}
  
  export default Contact;
  