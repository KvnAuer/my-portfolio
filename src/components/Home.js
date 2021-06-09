import './Home.css'


function Home() {

    return (
        <div className="container">
            <div className="row" style={{ marginTop: "150px" }}>
                <div className="col-md-6 home">
                    <h1 className="text-left">Hello, World</h1>
                </div>
                <div className="col-md-6">
                    <h3 className="text-right home">My name is Kevin and my passion is innovation and creating solutions to difficult problems.</h3>
                </div>
            </div>
        </div>
    )
}


export default Home;