import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './clients.scss';
import Title from '../../components/sectionTitle';
import {gql, useQuery} from '@apollo/client'

const CLIENTS_QUERY = gql`
query Clients{
  clients{
    name
    logo {
      url
    }
  }
}
`;

function Clients() {
  const [clientsList, setClients] = useState([]);
  const {loading, error, data} = useQuery(CLIENTS_QUERY);

  useEffect(()=> {
    if(!loading) {
      setClients(data.clients)
    }
    
  }, [loading, error, data])

  return (
    <section id="home_clients" className="home_section">  
      <Title text="Clients"></Title>
      <div className="clientsContent">
          <div className="clientsContainer">
            {!loading && clientsList.length !== 0
                ? clientsList.map((client, index) => (
                <LogoContainer 
                  image={client.logo.url}
                  id={client.name}
                  index={index} 
                  key={client.name}/>

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
        data-aos="fade-up"
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