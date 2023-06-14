import { React, useState} from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Zoom, Fade } from 'react-reveal'
import avatar from '../img/avatar_circle.png'
import hollyWoodImg from "../img/hollywood.png"
import morrisImg from "../img/morris.png"

function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
        onMouseEnter: () => setHovering(true),
        onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
}

function HomePage() {
    const [hollywoodHovering, hollywoodProps] = useHover()
    const [morrisHovering, morrisProps] = useHover()

    return(
        <>
            {/** Home Page Title */}
            <div className='homeHeader'>
                <h1>Amber Reynolds</h1>
                <h2>
                    Designer &emsp; Web Developer &emsp; Innovator
                </h2>
                <img className='avatarPicture' src={avatar} alt="Avatar of Amber Reynolds holding a coffee"/>
                <body className='darkBody'>
                    I build beautiful, accessible products designed to deliver only the highest quality user experience.
                </body>
            </div>

            {/** Intro Paragraph */}
            <Zoom>
                <div>
                    <Card id="introCard">
                        <Card.Body>
                            <Card.Title className="cardTitle">
                                Hi, my name is Amber
                            </Card.Title>
                            <Card.Text className="cardText">
                                I'm a Full-Stack web developer with a passion for design and beautiful user experiences.
                                I particularly enjoy JavaScript, React, and NodeJS, and I have a special place in my heart for SQL databases.
                                <br/><br/>
                                One day, I want to create products that touch the lives of many, and maybe even make a difference in the world, 
                                but for now I am still growing and learning as I build my career.  
                                That next great opportunity is waiting for me, and I'm excited to find it!
                            </Card.Text>
                            <br/>
                            <Link to="/about" className='basicButton'>Check out my full background</Link>
                        </Card.Body>
                    </Card>
                </div>
            </Zoom>

            {/** List of Languages, Tools, Skills */}
            <div id="skillCardsWrap">
                <Fade bottom>      
                    <div className="vbox">
                        <Card className='homeCards'>
                            <Card.Title className='homeCardTitle'>
                                Languages
                            </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>NodeJS</li>
                                    <li>ExpressJS</li>
                                    <li>CSS</li>
                                    <li>SCSS (Sass)</li>
                                    <li>HTML5</li>
                                    <li>SQL</li>
                                    <li>ExtJS</li>
                                    <li>Java</li>
                                    <li>Python</li>
                                </ul>
                            </Card.Text>
                        </Card>
                        <Card className='homeCards'>
                            <Card.Title className='homeCardTitle'>
                                Tools
                            </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Confluence</li>
                                    <li>Git, Github, Gitlab</li>
                                    <li>Gulp</li>
                                    <li>Jenkins</li>
                                    <li>Jira</li>
                                    <li>MariaDB</li>
                                    <li>MySQL</li>
                                    <li>npm</li>
                                    <li>Slack</li>
                                    <li>Webpack</li>
                                    <li>Wordpress</li>
                                </ul>
                            </Card.Text>
                        </Card>
                        <Card className='homeCards'>
                            <Card.Title className='homeCardTitle'>
                                Skills
                            </Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Accessibility Standards</li>
                                    <li>Agile Scrum</li>
                                    <li>Database Management</li>
                                    <li>Front-End Development</li>
                                    <li>Responsive Design</li>
                                    <li>RESTful API</li>
                                    <li>Search Engine Optimization (SEO)</li>
                                    <li>Testing and Debugging</li>
                                    <li>User Experience (UX) </li>
                                    <li>Wireframing</li>
                                </ul>
                            </Card.Text>
                        </Card>
                    </div>
                </Fade>
            </div>

            <div id="projectsWrap">
                <Fade bottom>
                    {/** Public projects I've worked */}
                    <div id="projectsDiv">
                        <h3>Public Projects I've Worked</h3>
                        <h4>These are new sites with features still being added.</h4>
                        
                        <div id="projectsCardsDiv">
                            <Card className='projectCards' {...hollywoodProps}>
                                <Card.Img  src={hollyWoodImg} alt="Holly Wood Doors Logo" />
                                {hollywoodHovering ? (
                                    <Card.ImgOverlay className="projectContent">
                                            <Card.Text>
                                                Garage Door Installers
                                                <hr/>
                                                Built in React and NodeJS
                                            </Card.Text>
                                            
                                            <Link className="smallButton" to="https://www.hollywooddoors.net/" target="_blank" rel="noopener noreferrer">See the Site</Link>
                                    </Card.ImgOverlay >
                                ):
                                    <></>
                                }
                                
                                
                            </Card>
                            <Card className='projectCards' {...morrisProps}>
                                <Card.Img src={morrisImg} alt="Holly Wood Doors Logo" />
                                {morrisHovering ? (
                                    <Card.ImgOverlay className="projectContent">
                                        <Card.Text>
                                            Real Estate Team
                                            <hr/>
                                            Built in Wordpress
                                        </Card.Text>
                                        <Link className="smallButton" to="https://www.teammorrishomes.com/" target="_blank" rel="noopener noreferrer">See the Site</Link>
                                    </Card.ImgOverlay>
                                ) :
                                    <></>
                                }
                            </Card>
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    )
}

export default HomePage