import React, { Component } from "react";
import {  Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';

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
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is: " + JSON.stringify(this.state));
        alert("Current state is: " + JSON.stringify(this.state));
        event.preventDefault();
    }

    validate(firstName, lastName, email, message) {
        const errors = {
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        };

        if (this.state.touched.firstName) {
            if (firstName.length < 2) {
                errors.firstName = 'First name must be at least 2 characters.';
            } else if (firstName.length > 15) {
                errors.firstName = 'First name must be 15 or less characters.';
            }
        }

        if (this.state.touched.lastName) {
            if (lastName.length < 1) {
                errors.lastName = 'Last name must be at least 2 characters.';
            } else if (lastName.length > 15) {
                errors.lastName = 'Last name must be 15 or less characters.';
            }
        }

        const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        if (this.state.touched.email && !reg.test(email)) {
            errors.email = 'Email should be valid.';
        }

        if (this.state.touched.message) {
            if (message.length < 2) {
                errors.message = 'Message is required.';
            }
        }
        
        return errors;
    }

    handleBlur = (field) => () => {
        this.setState({
            touched: {...this.state.touched, [field]: true}
        });
    }

    render() {

        const errors = this.validate(this.state.firstName, this.state.lastName, this.state.email, this.state.message);
    
        return (
            <div className="container-fluid projects">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col mt-5 mb-3">
                            <h2>Get In Touch</h2>
                        </div>
                    </div>
                    <div className="row" style={{backgroundColor: '#f1f1f1'}}>
                        <div className="col m-sm-5">
                            <Form onSubmit={this.handleSubmit} id="contactForm">
                                <FormGroup row>
                                    <Label htmlFor="lastName" className="form-label" lg={2}>First Name</Label>
                                    <Col>
                                        <Input type="text" id="firstName" 
                                        className="form-control form-control-lg" 
                                        name="firstName" 
                                        placeholder="First Name"
                                        value={this.state.firstName}
                                        invalid={errors.firstName}
                                        onBlur={this.handleBlur("firstName")}
                                        onChange={this.handleInputChange}
                                        required />
                                        <FormFeedback>{errors.firstName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="lastName" className="form-label" lg={2}>Last Name</Label>
                                    <Col>
                                    <Input type="text" id="lastName"
                                        className="form-control form-control-lg" 
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={this.state.lastName}
                                        invalid={errors.lastName}
                                        onBlur={this.handleBlur("lastName")}
                                        onChange={this.handleInputChange}
                                        required />
                                        <FormFeedback>{errors.lastName}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="email" className="form-label" lg={2}>Email</Label>
                                    <Col>
                                    <Input type="email" id="email" name="email"
                                        className="form-control form-control-lg" 
                                        placeholder="Email"
                                        value={this.state.email}
                                        invalid={errors.email}
                                        onBlur={this.handleBlur("email")}
                                        onChange={this.handleInputChange}
                                        required />
                                    <FormFeedback>{errors.email}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label htmlFor="message" className="form-label" lg={2}>Message</Label>
                                    <Col>
                                        <Input type="textarea" id="message" name="message" className="form-control form-control-lg" rows="5"
                                            placeholder="Your Message"
                                            value={this.state.message}
                                            invalid={errors.message}
                                            onBlur={this.handleBlur("message")}
                                            onChange={this.handleInputChange}
                                            required />
                                        <FormFeedback>{errors.message}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col className="col-lg-2 col-form-label">
                                    </Col>
                                    <Col className="col-lg-10">
                                        <Button className="btn btn-full btn-lg mr-2" type="submit">Send</Button>
                                    </Col>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;