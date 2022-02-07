import './App.css';
/* import { Router, Route} from 'react-router-dom'; */
import { CountriesList } from './Components/CountriesList';
import { CountryDeatails } from './Components/CountryDetails';
import { NavBar } from './Components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
   
      <div class="container" style={{display:'flex', flexDirection:"column"}}>
          <div class="row" >
              <CountriesList />
              <CountryDeatails />
        </div>
      </div>
    </div>
  );
}

export default App;
