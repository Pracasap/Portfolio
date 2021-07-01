import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { PROJECTS } from '../shared/projects';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: PROJECTS
        };
    }

    render() { 
        return (  
            <div>  
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Projects projects={this.state.projects} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>  
        );  
    };
} 

export default Main;