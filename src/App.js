import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import { connect } from 'react-redux';
import actions from './actions';

class App extends Component {
  componentDidMount() {
    if (!this.props.properties.length) {
      this.props.loadAllProperties();
    }
    if(!this.props.owners.length) {
      this.props.loadAllOwners();
    }
  }
  render() {
    return (
      <div id="root-app">
        <div id="home-template">
            <header className="masthead">
              <div className="header-content">
                <div className="header-content-inner">
                  <h1 id="homeHeading">Domio Properties Management</h1>
                  <hr/>
                  <p>Start by selecting property to view</p>
                  <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Get Start!</a>
                </div>
              </div>
            </header>
            { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    properties: state.home.properties,
    owners: state.home.owners,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    loadAllProperties() {
      dispatch(actions.loadAllProperties());
    },
    loadAllOwners() {
      dispatch(actions.loadAllOwners());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
