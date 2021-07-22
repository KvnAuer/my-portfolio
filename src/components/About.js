import './About.css'
import Headshot from '../images/headshot.gif'
import LinkedIn from '../images/linkedInWhite.png'
import GitHub from '../images/gitHubIcon.png'

const About = () => {
    return (
        <>
            <div style={{ backgroundColor: "dodgerblue" }} className="about">
                <div className="container">
                    <div className="row">
                        <div className="image-container mt-2" >
                            <img id="headshot" src={Headshot} alt="Headshot" />
                        </div>
                        <h2 className="col-12 text-center">Kevin Auer</h2>
                        <div className="media-container mb-2">
                            <a href="https://www.linkedin.com/in/kevin-auer-870573165/"><img src={LinkedIn} alt="LinkedIn" className="media-picture mx-1"></img></a>
                            <a href="https://github.com/KvnAuer"><img src={GitHub} alt="LinkedIn" className="media-picture mx-1"></img></a>
                        </div>
                        <hr style={{ color: "black" }} />
                        <h4 className="col-12 text-center">Software Developer</h4>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "White" }}>
                <div className="container">
                    <div className="row">
                        <h3 className="about text-center mt-4">About Me</h3>
                        <hr />
                        <div className="col-md-5 col-sm-12 ml-5">
                            <p className="about">
                                I am a software developer with a background in biotechnology and healthcare.
                                I currently work for Elevos, a software company that builds electronic health records for EMS agencies.
                                Working at Elevos has given me the opportunity to use my vast amount of knowledge of electronic health care records to play a significant role in designing our new product.
                                As a member of a two person development team, I have increased my knowledge tremendously while also accepting more responsibility than a typical entry level developer.
                            </p>
                            <p></p>
                            <p className="about">I love to solve problems. My scientific background translates over to software development nicely and I have a vast amount of training to solve problems quickly and efficiently.
                            </p>
                        </div>
                        <div className="col-md-5 col-sm-12 ml-5">
                            <h4 className="about">Highlights</h4>
                            <ul className="about">
                                <li>Software developer who leverages healthcare and scientific background to solve problems more efficiently.</li>
                                <li>Helped design the UX and UI of current project.</li>
                                <li>Current Auburn University computer science student.</li>
                                <li>Already accepted into Auburn University computer science master program with a start date of Spring 2022.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-5" style={{ backgroundColor: "Aqua" }}>
                <div className="container">
                    <div className="row">
                        <h3 style={{ backgroundColor: "Aqua" }} className="about text-center mt-4">Interests</h3>
                        <hr />
                        <div className="col-md-5 col-sm-12 ml-5">
                            <p style={{ backgroundColor: "Aqua" }} className="about">My personal interests include:</p>
                            <ul style={{ backgroundColor: "Aqua" }} className="about">
                                <li>Learning new technologies, which includes taking classes on Udemy or EDX</li>
                                <li>Playing with my microcontroller or raspberry pi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}







export default About;