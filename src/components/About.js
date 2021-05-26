import $ from 'jquery';

const About = () => {
    return (
        <>
            <div className="aboutPage">
                <div className="container" style={{ backgroundColor: "white" }}>
                    <div className="row">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">
                                Hi, my name is Kevin and I am a software engineer with a background in biotechnology.
                                 After obtaining my masters degree in biotechnology and working in research, I decided to pursue an exciting
                                  and challenging career in software where I can continue working on solving problems but at a much faster pace.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

$(document).ready(function() {
    $("body").css("background-color", "white");
})




export default About;