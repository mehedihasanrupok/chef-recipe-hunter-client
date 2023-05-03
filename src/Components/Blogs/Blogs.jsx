import React from 'react';
import { Accordion, Button, Card, CardGroup } from 'react-bootstrap';
import './Blogs.css'
import CardHeader from 'react-bootstrap/esm/CardHeader';

const Blogs = () => {
    return (
        
        <CardGroup className='card'>
            <Card>
                <CardHeader className='head'>Question 1</CardHeader>
                <Card.Body>
                    <Card.Title>Tell us the differences between uncontrolled and controlled components.</Card.Title>
                    <Card.Text className='answer'>Answer:
                        In React, components are the building blocks of a user interface. Components can be classified into two types: controlled and uncontrolled
                        components.

                        Uncontrolled components are components that manage their state internally. They are not controlled by a parent component or any external code. They are mostly used for simple form inputs like text fields, checkboxes, radio buttons, etc.
                        The values of these components are managed by the DOM, and can be accessed through a ref.

                        Controlled components, on the other hand, are components that are managed by a parent component or external code. The state of these components is managed
                        by the parent component, and any changes to the component are propagated to the parent component. They are mostly used for complex form inputs like select boxes, date pickers, etc.
                        Controlled components have a value prop and a change handler that update the value of the component when the user interacts with it.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Question 2</Card.Header>
                <Card.Body>
                    <Card.Title >How to validate React props using PropTypes?</Card.Title>
                    <Card.Text className='answer'>Answer:
                        The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable,
                        instance, multiple, collection, and required prop types.
                        PropTypes.any: The prop can be of any data type
                        PropTypes.bool: The prop should be a Boolean
                        PropTypes.number: The prop should be a number
                        PropTypes.string: The prop should be a string
                        PropTypes.func: The prop should be a function
                        PropTypes.array: The prop should be an array
                        PropTypes.object: The prop should be an object
                        PropTypes.symbol: The prop should be a symbol
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Question 3</Card.Header>
                <Card.Body>
                    <Card.Title>Tell us the difference between nodejs and express js.</Card.Title>
                    <Card.Text className='answer'>Answer:
                        Node.js and Express.js are both JavaScript-based technologies commonly used in web development, but they serve different purposes. Here are the main differences between Node.js and Express.js:

                        Node.js:

                        Node.js is a JavaScript runtime built on top of the V8 JavaScript engine used in Google Chrome.
                        Node.js allows you to execute JavaScript code outside of a web browser, making it possible to write server-side code in JavaScript.
                        Node.js provides a rich set of features and APIs for building server-side applications, including file I/O, networking, and more.
                        Node.js provides a platform for building scalable, high-performance server-side applications.
                        Express.js:

                        Express.js is a web framework built on top of Node.js.
                        Express.js provides a set of tools and features for building web applications and APIs, such as middleware for handling requests and responses, routing, templating engines, and more.
                        Express.js simplifies the process of building web applications by providing a structured approach to organizing code and handling common web development tasks.
                        Express.js is designed to be lightweight and flexible, making it a popular choice for building RESTful APIs and single-page applications.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Header>Question 4</Card.Header>
                <Card.Body>
                    <Card.Title>What is a custom hook, and why will you create a custom hook?</Card.Title>
                    <Card.Text className='answer'>Answer:
                        In React, a custom hook is a JavaScript function that starts with the word "use" and allows you to reuse stateful logic across components. Custom hooks allow you to encapsulate and share common stateful logic between components, which can help you write cleaner and more reusable code.

                        You might create a custom hook for a few different reasons, including:

                        Reusability: If you find yourself duplicating a lot of code between components, you can extract that code into a custom hook and reuse it across components.

                        Abstraction: If you have complex stateful logic that you don't want to expose to your components, you can abstract that logic into a custom hook and only expose the functionality that your components need.

                        Testability: By abstracting complex stateful logic into a custom hook, you can write unit tests for that logic separately from your components.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </CardGroup>
    );
};

export default Blogs;