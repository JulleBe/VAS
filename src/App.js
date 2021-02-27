
import './App.scss';
import { loadReCaptcha } from 'react-recaptcha-google';

import Home from './home/home.js';
import Navigation from './components/navigation/navigation.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Portfolio from './portfolio/portfolio';
import Footer from './components/footer/footer';
import PrivacyStatement from './misc/privacy_statement/privacyStatement.js'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from './portfolio/gallery/gallery';


function App() {
  AOS.init();
  useEffect(()=> {
    loadReCaptcha();
  })
  
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/portfolio" exact component={Portfolio}/>
          <Route path="/portfolio/:category" exact component={Gallery} />
          <Route path="/privacy-statement" exact component={PrivacyStatement} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
