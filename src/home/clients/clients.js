import React from 'react';
import { Link } from 'react-scroll';
import './clients.scss';
import Title from '../../components/sectionTitle';

import testLogo from '../../assets/logo.svg'
import testClients from './testClients';

function Clients() {

    let clientsList = testClients;
    return (
      <section id="home_clients" className="home_section">  
        <Title text="Clients"></Title>
        <div className="clientsContent">
            <div className="clientsContainer">
              {clientsList.length > 1
                  ? clientsList.map((client, index) => (
                  <LogoContainer 
                    image={client.url + testLogo}
                    id={client.name}
                    index={index}/>
                  )
              ): <EmptyClients/>}
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
  
  function LogoContainer (props){
    return (
      <figure 
        className="clients_logoWrapper"
        data-aos="fade-down"
        data-aos-delay={props.index * 50}
        data-aos-once={true}
        data-aos-anchor-placement="top top"
      >
        <img 
        src={props.image}
        alt={`${props.id} logo`}/>
      </figure>
    )
  }

  function EmptyClients(){
    return (
      <div className="clients_emptyClientsMessage">
        <p>
          Nothing to see here...
        </p>
      </div>
    )
  }