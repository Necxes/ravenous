import React from "react";
import "./Business.css";

export default function Business ({ imageSrc, name, address, city, state, zipcode, category, rating, reviewCount}) {
    return(
        <div className="col-md-4 col-6">
            <article>
                <img src={imageSrc} alt={name} />
                <h4 className="text-start my-3">{name}</h4>
                <div className="d-flex justify-content-between">
                    <div className="text-start">
                        <p>{address}<br/>{city}<br />{zipcode} {state}</p>
                    </div>
                    <div className="text-end">
                        <p>
                            <span className="category">{category}</span><br/>
                            <span>{rating}</span><br/>
                            {reviewCount}
                        </p>
                    </div>
                </div>
            </article>
        </div>
    )
}