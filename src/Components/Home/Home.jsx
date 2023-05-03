import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import './Home.css'

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    })
    return (
        <div>
           <Banner></Banner> 
           <div className='title-bar'>
            <h1>Our Chefs Are</h1>
           </div>
           <div className='chef-card'>
            {
                chefs.map(chef =><Chefs
                 key={chef._id}
                 chef={chef}
                >

                </Chefs>)
            }
           </div>
        </div>
    );
};

export default Home;