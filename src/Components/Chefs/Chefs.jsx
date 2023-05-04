import React, { useEffect, useState } from 'react';
import './Chefs.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const {_id, picture, chefName, yearOfExperience, noOfRecipes, likes } = chef;
    return (
        <div className='chef-details'>
            <div>
                <LazyLoadImage
                alt={picture.alt}
                effect="blur"
                src={picture} />
            </div>
            <div className='details'>
                <h3>Name: {chefName}</h3>
                <h3>Year of Experience: {yearOfExperience}</h3>
                <h3>Total Recipes: {noOfRecipes}</h3>
                <h3>Likes: {likes}</h3>
                <Link to={`/chefs/${_id}`}><button className='view-recipe'> View Recipes </button></Link>            
            </div>

        </div>
    );
};

export default Chefs;