import React from "react";
import "./Business.css";

export default function Business ({business}) {
    return (
        <div className="col-md-4 col-6">
            <article>
                <img src={business.imageSrc} alt={business.name} />
                <h4 className="text-start my-3">{business.name}</h4>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p>{business.address}<br/>{business.city}<br />{business.zipcode} {business.state}</p>
                    </div>
                    <div className="text-end">
                        <p>
                            <span className="category">{business.category}</span><br/>
                            <span>{business.rating}</span><br/>
                            {business.reviewCount}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}