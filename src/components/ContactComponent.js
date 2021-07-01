import React from "react";

function Contact(props) {
    return (
        <div className="container-fluid projects">
            <div className="container mb-5">
                <div className="row">
                    <div className="col mt-5 mb-3">
                        <h2>Get In Touch</h2>
                        
                    </div>
                </div>
                <div className="row" style={{backgroundColor: '#f1f1f1'}}>
                    <div class="col m-sm-5">
                        <form method="POST" action="#" id="contactUsForm">
                            <div class="form-group row">
                                <div class="col-lg-2 col-form-label">
                                    <label for="contactFirstName" class="form-label">First Name</label>
                                </div>
                                <div class="col-lg-10">
                                    <input id="contactFirstName" name="contactName" placeholder="First Name" type="text"
                                        class="form-control form-control-lg" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-2 col-form-label">
                                    <label for="contactLastName" class="form-label">Last Name</label>
                                </div>
                                <div class="col-lg-10">
                                    <input id="contactLastName" name="contactLastName" placeholder="Last Name" type="text"
                                        class="form-control form-control-lg" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-2 col-form-label">
                                    <label for="contactEmail" class="form-label">Email</label>
                                </div>
                                <div class="col-lg-10">
                                    <input id="contactEmail" name="contactEmail" placeholder="Email@email.com" type="email"
                                        class="form-control form-control-lg" required />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-2 col-form-label">
                                    <label for="contactMessage" class="form-label">Message</label>
                                </div>
                                <div class="col-lg-10">
                                    <textarea id="contactMessage" class="form-control form-control-lg" rows="5"
                                        placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-lg-2 col-form-label">
                                </div>
                                <div class="col-lg-10">
                                    <button class="btn btn-primary btn-lg mr-1" type="submit">Send</button>
                                    <button class="btn btn-primary btn-lg" type="reset">Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;