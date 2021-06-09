import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
// import background from './images/images.png';


class App extends Component {
  render() {
    return (
      // <div style={{ backgroundImage: `url(${background})` }}>
      <>
        <nav className="navbar navbar-expand-lg">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link">Home</Link></li>
              <li><Link to={'/About'} className="nav-link">About</Link></li>
              <li><Link to={'/Projects'} className="nav-link">Projects</Link></li>
              <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path ="/About" component={About} />
          <Route exact path="/Projects" />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </>
    );
  }

}

export default App;
