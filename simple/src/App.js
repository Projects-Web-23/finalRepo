import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'
import Signup from '../src/componets/SignUp/SignUp';
import Navbar from './componets/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Login from '../src/componets/Login/Login';
import PrintPdf from './Pages/Resume/Built';
import Profile from './Pages/Profile/Profile';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/Resume"><Resume /></Route>
            <Route path="/Signup"><Signup /></Route>
            <Route path="/About"><About /></Route>
            <Route path="/Login"><Login /></Route>
            <Route path="/Built/:id"><PrintPdf /></Route>
            <Route path="/Profile"><Profile/></Route>

          </Switch>
        </div>


      </div>
    </Router>
  );
}

export default App;
