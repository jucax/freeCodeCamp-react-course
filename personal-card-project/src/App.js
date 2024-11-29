import logo from './logo.svg';
import './App.css';

import Info from "./components/Info";
import About from './components/About';
import Interest from './components/Interest';

function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Interest />
    </div>
  );
}

export default App;
