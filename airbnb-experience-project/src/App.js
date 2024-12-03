import logo from './logo.svg';
import './App.css';
//
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';


function App() {
  const cards = data.map((card) => {
    return <Card 
            img = {card.coverImg}
            rating = {card.stats.rating}
            reviewCount = {card.stats.reviewCount}
            location = {card.location}
            title = {card.title}
            price = {card.price}
           />
  })

  return (
    <div className="container">
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  );
}

export default App;
