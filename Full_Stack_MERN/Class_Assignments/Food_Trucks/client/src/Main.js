import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import FoodtruckDashboard from './views/FoodtruckDashboard';
import FoodtruckTabs from './components/FoodtruckTabs';

function Main() {

    const [foodtrucks, setFoodtrucks] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get('http://localhost:8000/api/foodtruck')
            .then(res => {
                console.log(res.data)
                setFoodtrucks(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, []);
    
    const [allTabs, setAllTabs] = useState([
    {
        tab: <Link to="/">Dashboard</Link>,
        content: <FoodtruckDashboard foodtrucks={foodtrucks}/>
    },
    {
        tab: <Link to="/truck/new">New Truck</Link>,
        content: "new truck"
    },
    {
        tab: <Link to={`/truck/${selectedTab}`}>About</Link>,
        content: "about"
    },
    {
        tab: <Link to={`/truck/contact/${selectedTab}`}>Contact Us</Link>,
        content: "contact us"
    }
]);

    return (
        <div className="Main">
            <h1>Food Trucks</h1>
            {loaded && <FoodtruckTabs allTabs={allTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>}
        </div>
    );
}

export default Main;