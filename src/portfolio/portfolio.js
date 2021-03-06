
import React, { useEffect } from 'react';
import PortfolioPortal from './portal/portal';
import { motion} from 'framer-motion';


function Portfolio(props) {
 
      useEffect(()=> {
        document.title = "VAS Pictures - Portfolio"
      })

      return (
        <motion.div 
        className="Portfolio">
          <PortfolioPortal />
        </motion.div>
      
    );
  
  }
  
  export default Portfolio;
  