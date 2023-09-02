import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import './App.css'
import Signup from './componets/SignUp';
import Navbar from './componets/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Resume from './Pages/Resume/Resume';
import Login from './componets/Login';
import PrintPdf from './Pages/Resume/Built';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/Resume"><Resume /></Route>             
              <Route path="/Signup"><Signup /></Route>  
              <Route path="/About"><About /></Route>         
              <Route   path="/Login"><Login /></Route>       
              <Route path="/Built"><PrintPdf /></Route>
              
            </Switch>
                </div>
           
 
      </div>
    </Router>
  );
}

export default App;
