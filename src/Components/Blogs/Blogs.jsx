import React from 'react';
import { Accordion, Button, Card, CardGroup } from 'react-bootstrap';
import './Blogs.css'
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (
        <div className='container'>
            <ReactToPdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='download' onClick={toPdf}>Generate Pdf</button>}
            </ReactToPdf>
            <div ref={ref}>
                <div>
                   <h3>Question 1:Tell us the differences between uncontrolled and controlled components.</h3>
                   <p className='answer'> In React, components are the building blocks of a user interface. Components can be classified into two types: controlled and uncontrolled
                        components.
                        Uncontrolled components are components that manage their state internally. They are not controlled by a parent component or any external code. They are mostly used for simple form inputs like text fields, checkboxes, radio buttons, etc.
                        The values of these components are managed by the DOM, and can be accessed through a ref.
                        Controlled components, on the other hand, are components that are managed by a parent component or external code. The state of these components is managed
                        by the parent component, and any changes to the component are propagated to the parent component. They are mostly used for complex form inputs like select boxes, date pickers, etc.
                        Controlled components have a value prop and a change handler that update the value of the component when the user interacts with it.</p>
                </div>
                <div>
                    <h3>Question 2: How to validate React props using PropTypes?</h3>
                    <p className='answer'>Answer:
                        The PropTypes utility exports a wide range of validators for configuring type definitions. Below, we’ll list the available validators for basic, renderable,
                        instance, multiple, collection, and required prop types.
                        PropTypes.any: The prop can be of any data type<br></br>
                        PropTypes.bool: The prop should be a Boolean <br></br>
                        PropTypes.number: The prop should be a number<br></br>
                        PropTypes.string: The prop should be a string<br></br>
                        PropTypes.func: The prop should be a function<br></br>
                        PropTypes.array: The prop should be an array<br></br>
                        PropTypes.object: The prop should be an object<br></br>
                        PropTypes.symbol: The prop should be a symbol</p>
                </div>
                <div>
                   <h3>Question 3: Tell us the difference between nodejs and express js.</h3>
                   <p className='answer'>Answer:
                        Node.js and Express.js are both JavaScript-based technologies commonly used in web development, but they serve different purposes. Here are the main differences between Node.js and Express.js:

                        Node.js:
                        Node.js is a JavaScript runtime built on top of the V8 JavaScript engine used in Google Chrome.<br></br>
                        Node.js allows you to execute JavaScript code outside of a web browser, making it possible to write server-side code in JavaScript.<br></br>
                        Node.js provides a rich set of features and APIs for building server-side applications, including file I/O, networking, and more.<br></br>
                        Node.js provides a platform for building scalable, high-performance server-side applications.<br></br>
                        Express.js:<br></br>
                        Express.js is a web framework built on top of Node.js.<br></br>
                        Express.js provides a set of tools and features for building web applications and APIs, such as middleware for handling requests and responses, routing, templating engines, and more.<br></br>
                        Express.js simplifies the process of building web applications by providing a structured approach to organizing code and handling common web development tasks.<br></br>
                        Express.js is designed to be lightweight and flexible, making it a popular choice for building RESTful APIs and single-page applications.</p>
                </div>
                <div>
                    <h3>Question 4: What is a custom hook, and why will you create a custom hook?</h3>
                    <p className='answer'>Answer:
                        In React, a custom hook is a JavaScript function that starts with the word "use" and allows you to reuse stateful logic across components. Custom hooks allow you to encapsulate and share common stateful logic between components, which can help you write cleaner and more reusable code.
                        You might create a custom hook for a few different reasons, including:
                        Reusability: If you find yourself duplicating a lot of code between components, you can extract that code into a custom hook and reuse it across components.<br></br>
                        Abstraction: If you have complex stateful logic that you don't want to expose to your components, you can abstract that logic into a custom hook and only expose the functionality that your components need.<br></br>
                        Testability: By abstracting complex stateful logic into a custom hook, you can write unit tests for that logic separately from your components.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;