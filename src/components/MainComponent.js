import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

class Main extends Component {

    render() { 
        return (  
            <div>  
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Projects projects={this.props.projects} />} />
                    <Route exact path='/contact' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>  
        );  
    };
} 

export default withRouter(connect(mapStateToProps)(Main));