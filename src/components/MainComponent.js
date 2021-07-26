import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Projects from './ProjectsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from  'react-redux-form';
import { fetchProjects } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        projects: state.projects
    }
}

const mapDispatchToProps = {
    fetchProjects: () => (fetchProjects()),
    resetMessageForm: () => (actions.reset('messageForm'))
};

class Main extends Component {

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() { 
        return (  
            <div>  
                <Header />
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/projects' render={() => <Projects projects={this.props.projects.projects}
                        projectsLoading={this.props.projects.isLoading}
                        projectsErrMess={this.props.projects.errMess}
                    />} />
                    <Route exact path='/contact' render={() => <Contact resetMessageForm={this.props.resetMessageForm} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );  
    };
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));