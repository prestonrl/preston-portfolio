import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
      <Router>
        <div>
          <Nav></Nav>
          <main>
            <Switch>
              <Route exact path='/' component={About} />
              <Route exact path='/portfolio' component={Portfolio} />
              <Route exact path='/contact' component={ContactForm}/>
              <Route exact path='/resume' component={Resume} />
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Router>
  );
}

export default App;
