import React, { useState } from 'react';
import { Button, Card, CardGroup, Col } from 'react-bootstrap';
// import { Rating } from '@smastrom/react-rating';
// import '@smastrom/react-rating/style.css';
import toast, { Toaster } from 'react-hot-toast';
import { MdFavoriteBorder } from 'react-icons/md';
import './Recipe.css';

const Recipe = ({ recipe }) => {
    const [fold, setFold] = useState(true);
    const [isDisabled, setIsDisabled] = useState(false);

    const { strMeal, strMealThumb, strIngredients, cookingMethod, ratings } = recipe;

    const handleClick = () => {
        setIsDisabled(true);
        toast.success('Marked as your favorite recipe');
    };

    return (
        <Col>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title><span className='recipe-title'>{strMeal}</span></Card.Title>
                        <Card.Text className='justify'>
                            <span className='fw-semibold'>Ingredients: </span><span className='ingredient'>{strIngredients.join(', ').substring(0, 60)}.....</span>
                            <br />
                            <span className='fw-semibold'>Cooking method: </span> 
                            {
                                fold ? (
                                    <>
                                        <span className='ingredient'>{cookingMethod.substring(0, 120)}..... </span>
                                        <span className='cursor-pointer text-primary' onClick={() => setFold(!fold)}>
                                            Read More
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span className='ingredient'>{cookingMethod} </span>
                                        <span className='cursor-pointer text-primary' onClick={() => setFold(!fold)}>
                                            Read Less
                                        </span>
                                    </>
                                )
                            }
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted d-flex">
                        <div className='flex-grow-1 d-flex align-items-center'>
                            {/* <Rating style={{ maxWidth: 100 }} value={ratings || 0} readOnly /> */}
                            <span className='ms-2'> {ratings}</span>
                        </div>
                        <div>
                            <Button variant="light" onClick={handleClick} disabled={isDisabled}>
                                <MdFavoriteBorder style={{ fontSize: '24px' }} />
                            </Button>
                            {/* <Toaster /> */}
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </Col>
    );
};

export default Recipe;