import './Contact.css'


const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 col-md-12 mt-5">
                    <div className="card-body"></div>
                    <form>
                        <div className="form-group">
                            <h2 style={{ color: "black" }} className="text-center">Please Connect with Me</h2>
                        </div>
                        <div className="form-group col-4">
                            <label>Email Address</label>
                            <input id="border" className="form-control border" type="email" placeholder="Enter email"></input>
                        </div>
                        <div className="form-group">
                            <label></label>
                            <textarea className="form-control mb-2" rows="10"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;