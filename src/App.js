import './App.css';
import Business from './components/Business';
import data from './components/BusinessData';

function App() {
  return (
    <div className="App">
        <Business {...data} />
    </div>
  );
}

export default App;
