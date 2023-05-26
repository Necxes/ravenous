import React from "react";
import Business from "./Business";
import data from './BusinessData';

export default function BusinessList() {
    return (
        <div className="container">
            <div className="row gy-3">
                <Business {...data} />
                <Business {...data} />
                <Business {...data} />
                <Business {...data} />
                <Business {...data} />
                <Business {...data} />
            </div>
        </div>
    )
}