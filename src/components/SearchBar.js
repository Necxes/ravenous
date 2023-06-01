import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar({ searchYelp }) {
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');
    const [searchBy, setSearchBy] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        return searchYelp(business, location, searchBy);
    }

    return (        
        <form onSubmit={handleSubmit}>
            <div className="row justify-content-center mb-5">
                <div className="col-auto d-flex">
                    <div className="option position-relative">
                        <label htmlFor="optionBestMatch">Best<br/>match</label>
                        <input 
                            id="optionBestMatch" 
                            type="radio" 
                            name="searchBy"  
                            value="best_match"
                            onChange={event => setSearchBy(event.target.value)}
                            />
                    </div>
                    <div className="option position-relative">
                        <label htmlFor="optionHighestRated">Highest<br/>rated</label>
                        <input 
                            id="optionHighestRated" 
                            type="radio" 
                            name="searchBy"  
                            value="highest_rated"
                            onChange={event => setSearchBy(event.target.value)} />
                    </div>
                    <div className="option position-relative">
                        <label htmlFor="optionMostViewed">Most<br/>reviewed</label>
                        <input 
                            id="optionMostViewed" 
                            type="radio" 
                            name="searchBy"  
                            value="most_reviewed"
                            onChange={event => setSearchBy(event.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <input 
                        id="business" 
                        className="form-control" 
                        value={business} 
                        onChange={event => setBusiness(event.target.value)}
                        type="text" 
                        placeholder="Search Businesses" />
                </div>
                <div className="col">                                
                    <input 
                        id="location" 
                        className="form-control"
                        value={location} 
                        onChange={event => setLocation(event.target.value)}
                        type="text" 
                        placeholder="Where?" />
                </div>     
            </div>      
            <div className="row justify-content-center">
                <div className="col-auto">
                    <button className="btn">Let's go</button>
                </div>
            </div> 
        </form>
    )
}