import React from "react";
import Business from "./Business";
import data from './BusinessData';

export default function BusinessList({array}) {
    return (
        <div className="container">
            <div className="row gy-3">
                {array.map((item, index) => 
                    <Business {...data} key={index} />
                )}
            </div>
        </div>
    )
}