import logo from './logo.svg';
import './App.css';

// We have to import the components to call them inside this file
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';


function App() {
  const cards = data.map((card) => {
    // Instead of passing all the props separatly to the component, we can pass all the object
    // card = {card}
    // There is another secret way to pass each property individually 
    // {...card}
    return <Card 
            key = {card.id}
            card = {card}
           />
  })

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
