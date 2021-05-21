import './App.css';
import Home from './components/Home';
// import background from './images/images.png';


function App(props) {
  return (
    // <div style={{ backgroundImage: `url(${background})` }}>
    <div className="container d-flex justify-content-center" >
      <div className="row">
        <div className="d-flex justify-content-center">
          <h1>My Portfolio Site</h1>
        </div>
        <Home />
      </div>
    </div>
    //  </div>
  );
}

export default App;
