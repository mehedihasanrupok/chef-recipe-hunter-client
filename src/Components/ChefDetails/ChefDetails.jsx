import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Recipe from '../Recipe/Recipe';
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import './ChefDetails.css';

const ChefDetails = () => {
    const chefDetails = useLoaderData();
    const { picture, chefName, yearOfExperience, noOfRecipes, recipes, likes } = chefDetails;

    return (
        <Container>
            <Card>
                <Row className='each_chef'>
                    <Col md={4} lg={6}>
                        <Card.Img  src={picture} />
                    </Col>
                    <Col md={8} lg={6}>
                        <Card.Body className='my-body'>
                            <Card.Title className='details-chef'>Name: <h4 className='text-para'>{chefName}</h4></Card.Title>
                            <Card.Text>
                                <span className='details-chef'>Description:</span> <h4 className='text-para'>Experienced, passionate, and creative chef who worked at your restaurant for many years, with exceptional cooking skills, leadership qualities, and a signature style of cooking.</h4>
                                <br />
                                <span className='details-chef'>Year of Experience:</span> <h4 className='text-para'>{yearOfExperience}</h4>
                                <br />
                                <span className='details-chef'>No of recipes:</span> <h4 className='text-para'>{noOfRecipes}</h4>
                                <br />
                                <span className='details-chef'>
                                    <BsFillHandThumbsUpFill></BsFillHandThumbsUpFill> <span className='text-para'>{likes}</span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            
            <section>
                <h3 className='text-center fw-semibold my-4'>Recipes</h3>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        recipes.map(recipe => <Recipe key={recipe.idMeal} recipe={recipe} />)
                    }
                </Row>
            </section>
        </Container>
    );
};

export default ChefDetails;