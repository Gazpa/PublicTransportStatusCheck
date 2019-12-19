import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchBikePoints,
  clearBikePoints,
  setBikePointsFromCache
} from "../../actions/BikePointsActions";

class BikePoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchText: ""
    };
  }

  componentWillUnmount() {
    this.props.clearBikePoints();
  }

  submitBikeLoc = e => {
    e.preventDefault();

    let searchText = this.state.searchText;

    this.setState({ search: true }, () => {
      if (this.props.cachedBikeApiCalls) {
        let cachedData = this.props.cachedBikeApiCalls.find(element => {
          return element.searchText === searchText.toLowerCase();
        });

        if (cachedData) {
          this.props.setBikePointsFromCache(cachedData);
        } else {
          this.props.fetchBikePoints(searchText);
        }
      } else {
        this.props.fetchBikePoints(searchText);
      }
    });
  };

  renderBikePointsLines = () => {
    let { bikePoints } = this.props;

    return (
      <div className="block">
        <div className="block-title">
          <h2>
            <strong>Bike Points</strong>
          </h2>
        </div>
        <div className="table-responsive">
          <table id="general-table" className="table table-vcenter">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Coords</th>
              </tr>
            </thead>
            <tbody>
              {bikePoints.map(point => {
                let id = point.id.slice(point.id.indexOf("_") + 1);
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{point.commonName}</td>
                    <td>{`(${point.lat}, ${point.lon})`}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  render() {
    let { bikePoints } = this.props;

    return (
      <div id="page-content">
        <div className="content-header">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-section">
                <h1>
                  <strong>Bike Points</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block-title">
            <h2>
              <strong>Search</strong> for a location
            </h2>
          </div>

          <form
            action="page_forms_general.html"
            method="post"
            onSubmit={() => {
              return false;
            }}
          >
            <div className="form-group">
              <input
                type="text"
                id="searchBikePoints"
                name="searchBikePoints"
                className="form-control"
                onChange={({ target }) => {
                  this.setState({ searchText: target.value, search: false });
                }}
              />
            </div>
            <div className="form-group form-actions">
              <button
                type="submit"
                className="btn btn-sm btn-primary"
                onClick={this.submitBikeLoc}
              >
                <i className="fa fa-arrow-right"></i> Search
              </button>
            </div>
          </form>
        </div>
        {bikePoints && bikePoints.length > 0
          ? this.renderBikePointsLines()
          : this.state.search
          ? `No bike points found for ${this.state.searchText}`
          : ""}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    bikePoints: state.bikes.bikePoints,
    cachedBikeApiCalls: state.bikes.cachedBikeApiCalls
  };
}

export default connect(mapStateToProps, {
  fetchBikePoints,
  clearBikePoints,
  setBikePointsFromCache
})(BikePoints);
