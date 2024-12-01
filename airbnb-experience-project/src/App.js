import logo from './logo.svg';
import './App.css';
//
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Card from './components/Card';


function App() {
  return (
    <div className="container">
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
