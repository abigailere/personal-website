import React from 'react';
import './ModelsPage.css';
import {GameCards} from './GameCards.js';
import {useNavigate} from 'react-router-dom'
import Footer from './Footer.js';
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
                    <div className="model-box">
                        <h2>
                            Title {/*may take this element out since it doesn't look good at top */}
                        </h2>
                        <p>3D Models</p>
                        <Carousel responsive={responsive} infinite={true} className="model-slider">
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


export const Games = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
          {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
          },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size ={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Text Goes Here</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane enventKey="first">
                        <Row>
                            {
                                projects.map((project, index) =>{
                                    return (
                                       <GameCards
                                       key={index}
                                       {...project}
                                       />
                                    )
                                })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Text Goes Here</Tab.Pane>
                    <Tab.Pane eventKey="third">Text Goes Here</Tab.Pane>
                  </Tab.Content>
                    </Tab.Container>
                    </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={stripedFabric}></img>
        </section>
    )
}