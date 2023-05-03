import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import './Home.css'
import img1 from '../../assets/pic/121.png'
import img2 from '../../assets/pic/1211.png'

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
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
                    chefs.map(chef => <Chefs
                        key={chef._id}
                        chef={chef}
                    >

                    </Chefs>)
                }
            </div>
            <div className='title-bar'>
                <h1>Foodies Around Year</h1>
            </div>
            <div className='extra-section'>
                <div>
                    <img className='img-1' src={img1} alt="" />
                </div>
                <div>
                    <p className='bar-title'>Introducing our latest culinary creation - a dish that's sure to tantalize your taste buds and leave you feeling fully satisfied. Our [insert food item] is the perfect combination of bold flavors and hearty ingredients, creating a meal that's both indulgent and comforting.
Starting with the freshest ingredients, our skilled chefs carefully prepare each component of this dish with precision and care. The result? A perfectly cooked [insert food item], topped with a flavorful sauce that's bursting with herbs and spices.</p>
                </div>
                <div>
                    <p className='bar-title'>But that's not all - we've added our own twist to this classic dish by incorporating [insert unique ingredient or cooking technique], which takes the flavor profile to the next level. The end result is a dish that's rich, complex, and deeply satisfying.
And don't forget about our sides - each one has been carefully selected to complement the main event. From perfectly roasted vegetables to creamy mashed potatoes, our sides are the perfect addition to any meal.</p>
                </div>
                <div>
                    <img className='img-2' src={img2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;