import React from 'react';
import { Link } from 'react-scroll';
import './clients.scss';
import Title from '../../components/sectionTitle';

function Clients() {
    return (
      <section id="home_clients" className="home_section">  
        <Title text="Clients"></Title>
        <div className="clientsContent">
            <div className="clientsContainer">

            </div>
            <div className="clientsCTA">
                <p>Want to join this awesome list? </p>
                <Link to="home_contact" smooth="true"><p>Contact me!</p></Link>
            </div>
        </div>
       
      </section>
    );
  }
  
  export default Clients;
  