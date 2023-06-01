import './App.css';
import { useState } from 'react';
import BusinessList from './components/BusinessList';
import SearchBar from "./components/SearchBar";
import Yelp from './utils/yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = (business, location, searchBy) => {
    console.log(`Searching Yelp with ${business}, ${location}, ${searchBy}`);
    Yelp.search(business, location, searchBy).then((businesses) => {
      setBusinesses(businesses);
    });
  };

  return (    
    <div className="App">
      <header className="mb-5">
            <div className="container-fluid py-3 nav">
                <h1>ravenous</h1>
            </div>
            <div className="container-fluid searchContainer">
                <div className="container">
                    <SearchBar searchYelp={searchYelp} />
                </div>
            </div>
        </header>
        <BusinessList array={businesses} />
    </div>
  );
}

export default App;
