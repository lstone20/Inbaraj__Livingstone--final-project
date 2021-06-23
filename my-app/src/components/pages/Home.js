import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import home from '../pages/home.png';
import './Home.css';

const Home = () => {
    return(
        <Container>
            <Row className="my-5">
                <Col lg="5" className="home-para">
                    <h2 className="font-weight-light">Welcome!</h2>
                    <h1 className="font-weight-light">I'm a Full Stack Web Developer.</h1>
                    <p>I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences, I have real time experience building fast, responsive and dynamic website. Learn more in my <a href="/portfolio">Portfolio</a></p>
                    <span><a href="/resume"> </a></span>
                </Col>
                <Col lg="7">
                    <img className="img-fluid rounded mb-4 mb-lg-0" src={home} alt="Home page banner that reads the qualities of web developer" />
                </Col>
            </Row>
        </Container>
    )
}

export default Home