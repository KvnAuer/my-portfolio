import './About.css'
import Headshot from '../images/headshot.gif'
import LinkedIn from '../images/linkedInWhite.png'
import GitHub from '../images/gitHubIcon.png'

const About = () => {
    return (
        <>
            <div style={{ backgroundColor: "dodgerblue" }} className="aboutPage">
                <div className="container">
                    <div className="row">
                        <div className="image-container mt-2" >
                            <img id="headshot" src={Headshot} alt="Headshot" />
                        </div>
                        <h2 className="col-12 text-center">Kevin Auer</h2>
                        <div className="media-container mb-2">
                            <a href="https://www.linkedin.com/in/kevin-auer-870573165/"><img src={LinkedIn} alt="LinkedIn" className="media-picture mr-1"></img></a>
                            <a href="https://github.com/KvnAuer"><img src={GitHub} alt="LinkedIn" className="media-picture ml-1"></img></a>
                        </div>
                        <hr />
                        <h4 className="col-12 text-center">Software Developer</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

// $(document).ready(function() {
//     $("body").css("background-color", "white");
// })




export default About;