import React, {useEffect} from 'react';
import About from './about/about';
import Clients from './clients/clients';
import Contact from './contact/contact';
import Landing from './landing/landing';

function Home() {
  useEffect(()=> {
    document.title = "VAS Pictures - Sven Van Alboom"
  })
  return (
    <div className="home">
      <Landing />
      <About />
      <Clients />
      <Contact />
    </div>
  );
}

export default Home;
