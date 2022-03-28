import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Explore from './components/Explore';
import AboutUs from './components/AboutUs';
import Cities from './components/Cities';
import Call from './components/Call';

function App() {
  return (
    <div className="App">
      <div className='main'>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/explore' component={Explore} />
            <Route path='/about' component={AboutUs} />
            <Route path='/cities' component={Cities} />
            <Route path='/call' component={Call} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
