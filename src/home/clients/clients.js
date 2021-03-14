import React, { useEffect, useState } from 'react';
import {Link} from 'react-scroll';
import Slider from 'react-slick'
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
  let listOne = [];
  let listTwo = [];

  useEffect(()=> {
    if(!loading) {
      setClients(data.clients)
    }
    
  }, [loading, error, data])
  
  function populateCarousels(clients) {
    clients.map((client, index) => {
      if(index % 2) {
        return listOne.push(client)
      }else{ 
        return listTwo.push(client)
      }
    })
  }
  populateCarousels(clientsList)
  return (
    
    <section id="home_clients" className="home_section">  
      <Title text="Clients" showOutline={true}></Title>
      <div className="clientsContent">
          <div className="clientsContainer">
            {!loading && clientsList.length !== 0
           
                ?  window.innerWidth <= 850
                  ? <MobileCarousel listOne={listOne} listTwo={listTwo}/> 
                  : <WebCarousel listOne={listOne} listTwo={listTwo}/> 
                
               
            : <EmptyClients/>}
          </div>
          <div className="clientsCTA">
              <p>Want to join this awesome list? </p>
              <Link to="contact" smooth="true" className="home_pageLink" ><p>Contact me!</p></Link>
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

  

  function MobileCarousel(props) {
    const mobileSlickSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      vertical:true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    
    }
      return (
        <><div className="clients_rowOne clients_carouselRow">
        <Slider {...mobileSlickSettings}>
          {props.listOne.map((client, index) => {
            return (<LogoContainer 
              key={index + client.name}
              index={index}
              image={client.logo.url}
              alt={client.name}/>)
          })}
          </Slider>
        </div>
        
        <div className="clients_rowTwo clients_carouselRow">
        <Slider {...mobileSlickSettings}>
        {props.listTwo.map((client, index) => {
          return (<LogoContainer 
            key={index + client.name}
            index={index}
            image={client.logo.url}
            alt={client.name}/>
        )})}
          </Slider>
      </div> </>
      )
  }

  function WebCarousel(props) {
    const webSlickSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 7,
      slidesToScroll: 1,
      vertical:false,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    }
    return (
      <><div className="clients_rowOne clients_carouselRow">
      <Slider {...webSlickSettings}>
        {props.listOne.map((client, index) => {
          return (<LogoContainer 
            key={index + client.name}
            index={index}
            image={client.logo.url}
            alt={client.name}/>)
        })}
        </Slider>
      </div>
      
      <div className="clients_rowTwo clients_carouselRow">
      <Slider {...webSlickSettings}>
      {props.listTwo.map((client, index) => {
        return (<LogoContainer 
          key={index + client.name}
          index={index}
          image={client.logo.url}
          alt={client.name}/>
      )})}
        </Slider>
    </div> </>
    )
  }