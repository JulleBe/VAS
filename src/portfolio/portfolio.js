
import React, { useEffect } from 'react';
import PortfolioPortal from './portal/portal';


function Portfolio() {
      useEffect(()=> {
        document.title = "VAS Pictures - Portfolio"
      })
      return (
        <div className="Portfolio">
          <PortfolioPortal />
        </div>
      
    );
  
  }
  
  export default Portfolio;
  