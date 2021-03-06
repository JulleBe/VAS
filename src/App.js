
import './App.scss';
import Home from './home/home.js';
import Navigation from './components/navigation/navigation.js';
import { Switch, Route, useLocation, Redirect} from 'react-router-dom';
import Portfolio from './portfolio/portfolio';
import Footer from './components/footer/footer';
import PrivacyStatement from './misc/privacy_statement/privacyStatement.js'
import AOS from 'aos';
import 'aos/dist/aos.css';
import PortfolioGallery from './portfolio/gallery/gallery';
import {AnimatePresence} from 'framer-motion'
import Lightbox from './portfolio/lightbox/lightbox';
import SERVER_URL from './helpers/_global';


const pageTransition = {
  
}

const pageVariants = {
  in: {
    opacity: 1
  }, 
  out: {
    opacity: 0
  }
}

function App() {
  
  AOS.init();

  const location = useLocation();
  pingApi(SERVER_URL)

  return (
  
        <div className="App">
          <Navigation />
          <AnimatePresence 
            exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/portfolio" exact component={Portfolio} />
              <Route path="/portfolio/:type" exact component={PortfolioGallery} />
              <Route path="/portfolio/:type/:projectId?" exact component={Lightbox} />
              <Route path="/privacy-statement" exact component={PrivacyStatement} />
              <Route path="/" exact component={() => <Home
                            transition={pageTransition}
                            variants={pageVariants}/>} 
    
              />
              <Route>
                <Redirect path="*" to="/"></Redirect>
              </Route>
            </Switch>
          </AnimatePresence>
          <Footer />
        </div>
        
  );
}

export default App;


function pingApi(url) {
  fetch(url).then(
    (succes) => {

  }, (error) => {

  })
}