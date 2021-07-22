import React, { Component } from "react";
import {  Button, Label, Col, Row } from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            touched: {
                firstName: false,
                lastName: false,
                email: false,
                message: false
            }
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));        
    }

    render() {

        return (
            <div className="container-fluid projects">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col mt-5 mb-3">
                            <h2>Get In Touch</h2>
                        </div>
                    </div>
                    <div className="row" style={{backgroundColor: '#f1f1f1'}}>
                        <div className="col m-4">
                            <LocalForm onSubmit={values => this.handleSubmit(values)} id="contactForm">
                                <Row className="form-group">
                                    <Label htmlFor="firstName" className="form-label" lg={2}>First Name</Label>
                                    <Col>
                                        <Control.text model=".firstName" id="firstName" 
                                        className="form-control form-control-lg" 
                                        name="firstName" 
                                        placeholder="First Name"
                                        required 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="lastName" className="form-label" lg={2}>Last Name</Label>
                                    <Col>
                                        <Control.text model=".lastName" id="lastName"
                                            className="form-control form-control-lg" 
                                            name="lastName"
                                            placeholder="Last Name"
                                            required 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="email" className="form-label" lg={2}>Email</Label>
                                    <Col>
                                        <Control.text model=".email"  id="email" name="email"
                                            className="form-control form-control-lg" 
                                            placeholder="Email"
                                            required 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="message" className="form-label" lg={2}>Message</Label>
                                    <Col>
                                        <Control.textarea model=".message" id="message" name="message" 
                                            className="form-control form-control-lg"
                                            rows="5"
                                            placeholder="Your Message"
                                            required 
                                        />
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Col className="col-lg-2 d-none d-lg-block">
                                    </Col>
                                    <Col className="col col-lg-10">
                                        <Button className="btn btn-full btn-lg mr-2" type="submit">Send</Button>
                                    </Col>
                                </Row>
                            </LocalForm>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;