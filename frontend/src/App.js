import AllRoutes from './Pages/AllRoutes';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2 style={{color:"gray"}}>Buycars.com</h2>
      <AllRoutes/>
    </div>
  );
}

export default App;
