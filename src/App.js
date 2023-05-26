import './App.css';
import BusinessList from './components/BusinessList';

const array = [1,2,3,4,5]

function App() {
  return (
    <div className="App">
        <BusinessList array={array} />
    </div>
  );
}

export default App;
