import './App.css';
import BusinessList from './components/BusinessList';
import Header from './components/Header';

const array = [1,2,3,4,5]

function App() {
  return (
    <div className="App">
        <Header />
        <BusinessList array={array} />
    </div>
  );
}

export default App;
