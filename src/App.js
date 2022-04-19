import './App.css';
import Footer from './components/footer/Footer';
import LeftColumn from './components/leftColumn/LeftColumn';
import RightColumn from './components/rightColumn/RightColumn';

function App() {
  return (
    <div className="App" >
      <div className="flex-container">
        <LeftColumn />
        <RightColumn />
      </div>
      <Footer />
    </div>
  );
}

export default App;
