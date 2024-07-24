import React from 'react';
import './Models.css';
import {useNavigate} from 'react-router-dom'
import Footer from './Footer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {ModelsCard} from "./ModelCards.js";
import 'animate.css';
import projImg1 from "../images/Terrain_Generator.png";
import stripedFabric from "../images/red-striped-fabric-texture-600x600.jpg";
import TrackVisibility from 'react-on-screen';

//houses 3d models page

/*const Models = () => {
    return(
        <div className="model">
            <h2>Title</h2>
    </div> 
    );
};
*/
const Models = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="model" id = "models">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-box">
                        <h2>
                            Title {/*may take this element out since it doesn't look good at top */}
                        </h2>
                        <p>3D Models</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={projImg1} alt="Image" />
                                <h5>Wed Devlopment</h5>
                                <p>This skill is developed naturally in the context of modeling</p>
                            </div>
                            <div className="item">
                                <img src={projImg1} alt="Image" />
                                <h5>Brand Indentity</h5>
                            </div>
                            <div className="item">
                                <img src={projImg1} alt="Image" />
                                <h5>Logo DEsign</h5>
                            </div>
                            <div className="item">
                                <img src={projImg1} alt="Image" />
                                <h5>Model</h5>
                            </div>
                            <div className="item">
                                <img src={projImg1} alt="Image" />
                                <h5>Game</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={stripedFabric}/>
        </section>
      )
}


export default Models
//for 3d models, carosel type