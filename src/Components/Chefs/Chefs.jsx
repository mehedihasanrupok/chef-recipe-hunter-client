import React, { useEffect, useState } from 'react';
import './Chefs.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Chefs = ({ chef }) => {
    const { picture, chefName, yearOfExperience, noOfRecipes, likes } = chef;
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
                <button className='view-recipe'> View Recipes </button>
            </div>

        </div>
    );
};

export default Chefs;