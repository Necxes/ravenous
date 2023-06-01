import React from "react";
import Business from "./Business";

export default function BusinessList({array}) {
    return (
        <div className="container">
            <div className="row gy-3">
                {array.map((business, index) => 
                    <Business business={business} key={index} />
                )}
            </div>
        </div>
    )
}