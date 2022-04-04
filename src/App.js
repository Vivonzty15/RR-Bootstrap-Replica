import './App.css';
import TopBar from './components/topBar';
import TopSection from './components/TopSection';
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <TopBar/>
      <TopSection/>
      <Listings/>
    </div>
  );
}

export default App;
