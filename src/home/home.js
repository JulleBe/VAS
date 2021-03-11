import React, {useEffect} from 'react';
import About from './about/about';
import Clients from './clients/clients';
import Contact from './contact/contact';
import Landing from './landing/landing';
import { motion} from 'framer-motion';
import ScrollToTop from '../components/scrollToTop';
 function Home(props) {
  useEffect(()=> {
    document.title = "VAS Pictures - Sven Van Alboom"
  })
  return (
    <motion.div 
    className="home">
      <ScrollToTop />
      <Landing />
      <About />
      <Clients />
      <Contact />
    </motion.div>
  );
}

export default Home;


