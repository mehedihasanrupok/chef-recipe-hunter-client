import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-container-one'>
                <div className='first'>
                    <h2>Food Hunt</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, culpa illo.
                        Ipsum magni atque commodi placeat reprehenderit. Accusamus, est delectus.</p>
                    {/* <img src="../../../public/Icons/Group 9969.png" alt="" /> */}
                </div>
                <div className='second'>
                    <h3 className='my-h3'>Company</h3>
                    <a href="">About Us</a><br></br>
                    <a href="">Work</a><br></br>
                    <a href="">Latest Items</a><br></br>/
                    <a href="">Careers</a><br></br>
                </div>
                <div>
                    <h3 className='my-h3'>Restaurants</h3>
                    <a href="">Food Items</a><br></br>
                    <a href="">Platters</a><br></br>
                    <a href="">Pricing</a><br></br>
                    <a href="">Ingredients</a><br></br>
                </div>
                <div>
                    <h3 className='my-h3'>Support</h3>
                    <a href="">Help Desk</a><br></br>
                    <a href="">Sales</a><br></br>
                    <a href="">Become A Partner</a><br></br>
                    <a href="">Order Food</a><br></br>
                </div>
                <div>
                    <h3 className='my-h3'>Contact</h3>
                    <p>0171582583</p>
                    <p>0171582583</p>
                </div>
            </div>
            <hr />
            <div className='last'>
                <div>
                    <h4>@2023 Food Hunter. All Rights Reserved</h4>
                </div>
                <div>
                    <h4>Powered by Food Hunter</h4>
                </div>
            </div>
        </div>
    );
};

export default Footer;