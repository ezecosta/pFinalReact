import React from "react"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap'

function AboutUs() {

    return (
        <>
            <div style={{textAlign:"center", margin:"50px 200px"}}>
                <div>
                    <h1 style={{fontSize:"60px"}}>About Us.</h1>
                    <h3 style={{fontSize:"36px"}}>We are a web-based company that seeks to provide its consumers the best technologies at their most affordable prices.</h3>
                    <p style={{fontSize:"20px"}}>Since 2015, our main focus has been directed towards lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <p>
                    <Link to={"/"}><Button variant="info">Back to shopping</Button></Link>
                </p>
            </div>
            
        </>
    )

}
export default AboutUs;