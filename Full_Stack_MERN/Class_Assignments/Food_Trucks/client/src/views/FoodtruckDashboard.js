import React from 'react';
import { Link } from '@reach/router';

import './FoodtruckDashboard.css';

const FoodtruckDashboard = ({ foodtrucks }) => {

    return (
        <div className="food-trucks">
            {
                foodtrucks.map((truck, idx) => {
                    return <div className="truck" key={idx}>
                        <img src={ require("../img/foodtruck.png") } alt="foodtruck.png"/>
                        <div>
                            <h3>{truck.truckName}</h3>
                            <p>Style: {truck.style}</p>
                            <p>Average Rating:</p>
                        </div>
                        <div>
                            <Link to={`/truck/edit/${truck._id}`}><button className="edit-button">edit</button></Link>
                            <Link to={`/truck/${truck._id}`}><button className="review-button">review</button></Link>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default FoodtruckDashboard;