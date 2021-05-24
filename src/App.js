import './App.css';
import Home from './components/Home';
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
              <li><Link to={'/Contact'} className="nav-link">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </>
    );
  }

}

export default App;
