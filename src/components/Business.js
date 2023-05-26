import React from "react";
import style from "./Business.css";

export default function Business ({ image, name, address, city, state, zipcode, category, rating, review_count}) {
    return(
        <article className="">
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <div>
                <div>
                    <p>{address}<br/>{city}<br />{zipcode} {state}</p>
                </div>
                <div>
                    <p>
                        <span>{category}</span><br/>
                        <span>{rating}</span><br/>
                        {review_count}
                    </p>
                </div>
            </div>
        </article>
    )
}