import React from 'react'
import { Container, Row} from 'reactstrap'
import './Resume.css';

const About = () => {
    const bold = {fontWeight: 'bold', fontSize: "medium", color: "grey", fontStyle: "normal"};
    const grey = {color: "grey"};
    const normal = {fontStyle: "normal",fontSize: "medium"};

    return (
        <Container>
        <Row className="my-5">
                <h1 className="font-weight-light">About Me</h1>
                <section>
                <h3 className="font-weight-light">My Skills:</h3>
                <ul>
                        <li>Skills: Technical Program Management, Agile project management, Business Analysis, Application development </li>
                        <li>Methodologies: Agile(Kanban, Scrum, XP), Waterfall</li>
                        <li>Platforms: MVS OS390, Z/OS, Windows, Google Cloud(GCP)</li>
                        <li>Languages: HTML5, CSS3, Ajax, Javascript, Jquery, Bootstrap, Node.JS, MySQL, MangoDB, React, Docker, .NET, XML, C, C++COBOL, JCL, CICS, REXX, PLI, EGL, VAG, SAS.,</li>
                        <li>Databases: SQL Server, DB2, IMS DB</li>
                        <li>Tools: Microsoft SharePoint, Visio, Microsoft Projects, Rational Teams, Confluence, JIRA, Pivotal tracker, HP ALM, Webex, Serena, Gitlab, Github, SVN, IBM Data Studio, Customer Profile Maintenance, Tealeaf, Spoon, CAWLA, Control M, OPC, QMF, SPUFI, ABARS, ABR, DB2 Admin tool, DCLGEN, RPM, Clear Quest, SCLM, XFR, RTC, RBD, File-Aid, Abend-aid, Endevor, Expediter.</li>
                        <li>Quality Processes: QMS, OPAL, Six Sigma</li>
                </ul>
                </section>
                <section>
                    <p style={grey}>_____________________________</p>
                    <h3  className="font-weight-light">Experience:</h3>
                    <text>Technical Program Manager | 12/2018 to Present</text>
                    <p style={bold}>Manulife</p>
                    <ul>
                        <li>I Lead a team of 3 cross functional squads right from Inception through formation and transition phases</li>
                        <li>I am Agile coach for the teams. Trained the teams on agile methodology and monitored the development of agile teams to ensure effective outcomes are achieved, supported the during when changes were introduced</li>
                        <li>Facilitated and defined Team working agreement and Definition of Done in collaboration with the teams</li>
                        <li>Facilitated scrum ceremonies, Sprint planning, Daily Stand-ups, Backlog refinement, Retrospective, Scrum of Scrums etc</li>
                        <li>Defined and tracked quantifiable metrics to evaluate the performance of the scrum team for each iteration (sprint) and Program Increment</li>
                        <li>Collaborated with product managers, software engineers, and operations engineers to uncover pain points and opportunities to deliver new business value through software</li>
                        <li>I Managed risks and resolve issues that affect release scope, schedule and quality</li>
                        <li>I ensured proper release documentation is filed by associated groups in accordance with established guidelines</li>
                        <li>I managed activities between Release Management and the following functions: Change Management, Problem/Incident Management, and Projects' Development Leads, QA/Testing</li>
                    </ul>
                </section>
                <section>
                    <text>Scrum Master | Business Analyst | 02/2013 to 11/2018 </text>
                    <p style={bold}>Manulife</p>
                    <ul>
                        <li>I was a Agile team lead and Scrum Master on various large and complex initiatives</li>
                        <li>I was an Agile coach, coached the team on Agile practices and transformed the team into a highly efficient and productive team which delivered high customer values</li>
                        <li>I Developed Agile processes within the team and proved it worked through accelerated delivery</li>
                        <li>Facilitated scrum ceremonies, Sprint planning, Daily Stand-ups, Backlog refinement, Retrospective, Scrum of Scrums etc</li>
                        <li>As a business analyst, conducted workflow analysis, defined user requirements, identified issues and recommend solutions Have lead components of small to medium changes initiatives Provided coaching and training to more junior staff Investigate business and systems issues and identify areas of opportunity Recommend and implement solutions Co-ordinate implementation activities with the business Ensure adherence to quality standards Collaborate with geographically and culturally diverse cross-functional teams Thorough knowledge of the business unit and its functions Strong problem solving and analytical skills Strong written and oral communication skills Effective interviewing, influencing, facilitation and presentation skills Influencing and negotiating with others to meet project deadlines Balancing business and technical issues to develop effective solutions Understanding the implications of underlying business issues</li>
                    </ul>
                </section>
                <section>
                    <text>Software Developer | 01/2005 to 02/2013 </text>
                    <p style={bold}>IBM</p>
                    <ul>
                        <li>Supported Business users and Business Analysts on day to day user queries and clarification</li>
                        <li>Supported the Product owner to define business requirements and developed solutions</li>
                        <li>Created high level design documents</li>
                        <li>Conduct code walkthroughs and reviews</li>
                        <li>Responsible for all day to day Application support related activities, like handling queries from business side, checking the system availability regularly, raising defects for any problems, implementation of fixes for the defects, monitoring the batch runs on Test and Production</li>
                    </ul>
                </section>
                <section>
                    <p style={grey}>_____________________________</p>
                    <h3>Education:</h3>
                    <text style={bold}> York University | Full stack Web Development | Information Technology | 01/2021 to Present</text>
                    <ul>
                        <li>Course objective: program provides knowledge and skills needed to build dynamic end-to-end digital products, and learning to leverage middleware to achieve Digital product development goals</li>
                        <li>Skills: HTML5,CSS, Responsive UIs,Bootstrap,JavaScript (ES6+),JSX,React,DOM API,Fetch API,Automated testing,Build tooling,Node.js,Asynchronous Programming,HTTP,RESTful APIs,ExpressJS,Authentication and Security,Filesystem Operations,Automated testing,MySql,WorkBench,MongoDB,Draw.io,Google ,Cloud Platform (GCP),Amazon Web Services (AWS),Docker,Node.js,MySQL,React,Git,Gitlab,React,Ajax
                        Node/Express,Restful Routes,MySQL,Google Cloud,Trello,Modeling tools</li>
                    </ul>
                    <text style={bold}> Madras University | Bachelor's of Engineering | Computer Science | 05/2000 to 05/2003</text>
                    <p style={normal}>Course objective: The degree in Computer Science has main objective training students in a number of scientific and technical knowledge to make the acquisition, representation, processing and transmission of information automatically by computer</p>
                    <p style={grey}>_____________________________</p>
                    <h3>Accomplishments:</h3>
                    <ul>
                            <li>Won Star of Excellence awards in Manulife for multiple years</li>
                            <li>Won the Service Excellence award in IBM for the year 2012</li>
                            <li>Received IBM BRAVO award in the year 2007 towards my contribution in leading activities in five releases in the Europe ledger deployment and support team</li>
                            <li>Won the Service Excellence award in IBM for the year 2012</li>
                    </ul>
                    <p style={grey}>_____________________________</p>
                    <h3>Trainings:</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td style={bold}>Name</td>
                                <td style={bold}>Where</td>
                            </tr>
                            <tr>
                                <td>Agile Program management</td>
                                <td>Pluralsight</td>
                            </tr>
                            <tr>
                                <td>Portfolio program and Project Mgmt</td>
                                <td>Pluralsight</td>
                            </tr>
                            <tr>
                                <td>Scrum Master training</td>
                                <td>Agile pain relief</td>
                            </tr>
                            <tr>
                                <td>Advanced Business Analysis</td>
                                <td>Global knowledge</td>
                            </tr>
                            <tr>
                                <td>DevOps</td>
                                <td>Pluralsight</td>
                            </tr>
                            <tr>
                                <td>Agile</td>
                                <td>IBM</td>
                            </tr>
                            <tr>
                                <td>Data Security and Privacy</td>
                                <td>IBM</td>
                            </tr>
                            <tr>
                                <td>Data Modeling</td>
                                <td>IBM</td>
                            </tr>
                            <tr>
                                <td>Defect prevention</td>
                                <td>IBM</td>
                            </tr>
                            <tr>
                                <td>IBM Mainframe</td>
                                <td>DSRC</td>
                            </tr>
                        </tbody>
                    </table>
                    <p style={grey}>_____________________________</p>
                    <h3>Certifications:</h3>
                    <ul>
                            <li>PMI certified Agile Practitioner (Certificant ID: 2593311)</li>
                            <li>Certified Scrum Master (Certificant ID: 000705734)</li>
                            <li>IBM Certified Database Associate (DB2 Universal database V8.1 family)</li>
                    </ul>
                </section>
                <span><a href="/Contact"> </a></span>
        </Row>
        <Row className="my-5">
        <p></p>
        </Row>
    </Container>
    )
}

export default About