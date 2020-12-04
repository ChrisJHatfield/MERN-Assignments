import React, { useState } from 'react';
import FoodTruckForm from './FoodTruckForm';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewFoodTruck = () => {

    const[foodtruck, setFoodTruck] = useState({
        name: "",
        style: "",
        description: "",
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/foodtruck', foodtruck)
            .then(res => {
                if(res.data.errors){
                    console.log(res.data.errors)
                } else {
                    console.log(res.data);
                    navigate('/');
            }
            })
            .catch(err => console.log(err));
    }

    const onChangeHandler = (e) => {
        setFoodTruck({
            ...foodtruck,
            [e.target.name]: e.target.value
        });
    }

    return(
        <div>
            <h2>New Food Truck</h2>
            <form onSubmit={onSubmitHandler}>
                <FoodTruckForm foodtruck={foodtruck} onChangeHandler={onChangeHandler} action="create" />
            </form>
        </div>
    )
}

export default NewFoodTruck;