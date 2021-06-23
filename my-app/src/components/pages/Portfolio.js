import React from 'react';
import { Container, Row} from 'reactstrap'
import './Portfolio.css';

export default props => {
    const blue = {fontWeight: 'bold', color: "steelblue", fontStyle: "normal"};
    const normal = {fontStyle: "normal",fontSize: "medium"};

    return (
        <Container>
            <h3 style={blue}>Welcome to my portfolio...</h3>
            <h3 style={normal}>Projects completed in York University | Full Stack Developer program</h3>
            <table>
                <tr>
                    <th>Name of the Project</th>
                    <th>Project Description</th>
                    <th>Link</th>
                </tr>
                <tr>
                    <td>Design and build personal website</td>
                    <td>The personal website should have Home page, Resume Page, Portfolio Page and Contact page</td>
                    <td><a href="blank">Link</a></td>
                </tr>
                <tr>
                    <td>Design and build a personal Photo Gallery website</td>
                    <td>A personal photo gallery is a static website consist of photo gallery	of personal pictures. The website will be based	on HTML/CSS/JS and will consist of features like Homepage, About us page, Contact us page, Admin login interface</td>
                    <td><a href="blank">Link</a></td>
                </tr>
            </table>
            <Row className="my-5">
              <p></p>
            </Row>
        </Container>
    );
  };