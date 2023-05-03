import React, { useEffect, useState } from 'react';

const Chefs = ({chef}) => {
    const {picture,chefName,yearOfExperience,noOfRecipes} = chef;
    return (
        <div>
            <h2>{chefName}</h2>
            <h2>{yearOfExperience}</h2>
            <h2>{noOfRecipes}</h2>
            <img src={picture} />
        </div>
    );
};

export default Chefs;