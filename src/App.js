
import './App.scss';
import Home from './home/home.js';
import Navigation from './components/navigation/navigation.js';
import { Switch, Route, useLocation} from 'react-router-dom';
import Portfolio from './portfolio/portfolio';
import Footer from './components/footer/footer';
import PrivacyStatement from './misc/privacy_statement/privacyStatement.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioGallery from './portfolio/gallery/gallery';
import {AnimatePresence} from 'framer-motion'
import Lightbox from './portfolio/lightbox/lightbox';



function App() {

  AOS.init();

  const location = useLocation();

  return (
  
        <div className="App">
          <Navigation />
          <AnimatePresence 
            exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/portfolio" exact component={Portfolio}/>
              <Route path="/portfolio/:type" exact component={PortfolioGallery} />
              <Route path="/portfolio/:type/:projectId?" exact component={Lightbox} />
              <Route path="/privacy-statement" exact component={PrivacyStatement} />
              <Route path="/" exact component={Home} />
            </Switch>
          </AnimatePresence>
          <Footer />
        </div>
        
  );
}

export default App;
