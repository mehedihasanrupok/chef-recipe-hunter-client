import React from 'react';
import img from '../../assets/pic/P3OLGJ1 copy 1.png'
import './Banner.css'


const Banner = () => {
    return (

        <div className='banner-container'>
            <div className='information'>
                <h2 className='motivation'>Best Food For <span className='special-word'>Your Taste</span></h2>
                <p className='details'>Explore thousands of delicious food with all the information you need. Its your Health.
                    Come find it. Grab all delicious food from start to finish.</p>
                <button className='start-button'>Get Started</button>
            </div>
            <div className='img'>
                <img src={img} alt="" srcset="" />
            </div>
        </div>

    );
};

export default Banner;