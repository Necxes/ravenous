import React, {useState} from "react";
import "./SearchBar.css";

export default function SearchBar() {
    const [business, setBusiness] = useState('');
    const [location, setLocation] = useState('');

    return (        
        <form>
            <div className="row justify-content-center mb-5">
                <div className="col-auto d-flex">
                    <div className="option position-relative">
                        <label for="optionBestMatch">Best<br/>match</label>
                        <input id="optionBestMatch" type="radio" name="searchBy"  value="Best Match"/>
                    </div>
                    <div className="option position-relative">
                        <label for="optionHighestRated">Highest<br/>rated</label>
                        <input id="optionHighestRated" type="radio" name="searchBy"  value="Highest rated" />
                    </div>
                    <div className="option position-relative">
                        <label for="optionMostViewed">Most<br/>reviewed</label>
                        <input id="optionMostViewed" type="radio" name="searchBy"  value="Most reviewed" />
                    </div>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <input id="business" className="form-control" value={business} type="text" placeholder="Search Businesses" />
                </div>
                <div className="col">                                
                    <input id="location" className="form-control" value={location} type="text" placeholder="Where?" />
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