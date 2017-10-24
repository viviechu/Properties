import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { connect } from 'react-redux';

class Property extends React.Component {
  getPropertyId(path) {
    return path.split('/')[2];
  }
  render() {
    const id = this.getPropertyId(this.props.urlPath);
    const propertiesMap = this.props.properties.reduce((map, property) => {
      map[property.id] = property;
      return map;
    }, {})
    const property = propertiesMap[id] || {};
    console.log('iiii', property)
    return (
      <div id="property-template">
        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <Thumbnail src={`${property.displayPictureUrl}.jpg`} alt="242x200">
                    <h3>{`${property.address}, ${property.city} ${property.state}`}</h3>
                </Thumbnail>
                <hr className="light"/>
                <p className="text-faded">{`Bathroom: ${property.bathrooms}  Bedroom: ${property.bedrooms}`}</p>
                <p className="text-faded">  {`Occupancy Rate: ${property.occupancyRate}  Total Revenue: ${property.totalRevenue}`}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

function mapStateToProps(state, ownProps) {
  return {
    properties: state.home.properties,
    urlPath: ownProps.location.pathname,
  };
}
function mapDispatchToProps(dispatch) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Property);
