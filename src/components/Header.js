import React from "react";
import SearchBar from "./SearchBar";
import "./Header.css";

export default function Header() {
    return (
        <header className="mb-5">
            <div className="container-fluid py-3 nav">
                <h1>ravenous</h1>
            </div>
            <div className="container-fluid searchContainer">
                <div className="container">
                    <SearchBar />
                </div>
            </div>
        </header>
    )
}