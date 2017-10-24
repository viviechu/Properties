import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import actions from '../actions';
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    const { properties } = this.props;
    const ownersMap = this.props.owners.reduce((map, owner) => {
      map[owner.id] = owner;
      return map;
    }, {})
    return (
      <div id="home-template">
        <section className="p-0" id="portfolio">
          <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
              {properties.map((property, index) => {
                console.log('yaaaaa', property)
                const owner = ownersMap[property.ownerId] || {}
                return (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <a className="portfolio-box" href={`/property/${property.id}`}>
                      <img className="img-fluid" src={`${property.displayPictureUrl}.jpg`} alt=""/>
                      <div className="portfolio-box-caption">
                        <div className="portfolio-box-caption-content">
                          <div className="project-category text-faded">
                            {`${property.address}, ${property.city} ${property.state}`}
                          </div>
                          <div className="project-name">
                            {`Bathroom: ${property.bathrooms}  Bedroom: ${property.bedrooms}`}
                          </div>
                          <div className="project-name">
                            {`Occupancy Rate: ${property.occupancyRate}  Total Revenue: ${property.totalRevenue}`}
                          </div>
                          <div className="project-name">
                            {`${owner.firstName} ${owner.lastName}`}
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}

            </div>
          </div>
        </section>
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

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
