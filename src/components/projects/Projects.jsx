import './projects.css'
import { Container} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import trivia  from '../../images/trivia.png'
import games  from '../../images/games.png'
import blog  from '../../images/blog.png'

const Projects = () => {
  return (
      <section className='my-projects' >
          <Container>
              <h2 id='projects'> Projects</h2>
              <p className='pro-intro'>Here you will find a collection of projects I have worked on, showcasing my skills and experience in web development. Each project represents a unique challenge and opportunity for me to apply my knowledge and creativity to develop innovative solutions. I have worked with various technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I hope these projects demonstrate my passion for coding and my ability to learn quickly and adapt to new technologies. Please take a look and feel free to reach out to me if you have any questions or would like to collaborate on a project!</p>
                      <div className='card-wrapper'>
                      <div className='card-container'>
                      <Card className='pro-card'>
                          <Card.Img variant="top" src={trivia} />
                            <Card.Body>
                                <Card.Title>Let's Play: Trivia</Card.Title>
                                <Card.Text>
                                Let's Play: Trivia is a fast-paced and challenging game designed to test your general knowledge skills. For my first milestone project, I used HTML, CSS, and vanilla JavaScript to create this engaging game. Test your knowledge and see if you have what it takes to top the leaderboard!
                              </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="http://trivia-game2.vercel.app" target="_blank" rel="noopener noreferrer">
                                Live
                                </a>
                              </Button>
                              
                              <Button variant="primary">
                                <a className='hyperlink' href="https://github.com/shetara2022/Trivia_Game2" target="_blank" rel="noopener noreferrer">
                                Repo
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>

                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src={games} />
                            <Card.Body>
                                <Card.Title>Home of the Games</Card.Title>
                                <Card.Text>
                                "Home of the Games" was designed using the MERN stack. With our easy-to-use interface, you can create new games entries, edit or delete your existing games. Development on this site continues as we work to include user authentication and authorization! Join us today and experience the thrill of sharing your favorite games with the world!  
                                </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="https://home-of-the-games.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    Live
                                </a>
                              </Button>
                              
                              <Button variant="primary">
                                <a className='hyperlink' href="https://github.com/AriesRedWar/NC-State-Group-Project-M2" target="_blank" rel="noopener noreferrer">
                                Repo
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>
                  
                        <div className='card-container'>
                            <Card className='pro-card'>
                            <Card.Img variant="top" src={blog} />
                            <Card.Body>
                                <Card.Title>Travel & Share Blog</Card.Title>
                                <Card.Text>
                                Welcome to Travel & Share Blog, the perfect platform for travel enthusiasts to share their experiences with the world. Using the MERN stack, we've created an easy-to-use website that allows authorized users to create new blogs, edit and delete their existing blogs. Sign up with Travel & Share today and start sharing your travel experiences with us!
                                </Card.Text>
                                <Button variant="primary">
                                <a className='hyperlink' href="https://milestone-3-ayanbajo.vercel.app/" target="_blank" rel="noopener noreferrer">
                                Live
                                </a>
                              </Button>
                              
                              <Button variant="primary">
                                <a className='hyperlink' href="https://github.com/shetara2022/Professional-Portfolio" target="_blank" rel="noopener noreferrer">
                                Repo
                                </a>
                                </Button>
                            </Card.Body>
                            </Card>
                        </div>
                        </div>
            </Container>
        </section>
  )
}

export default Projects