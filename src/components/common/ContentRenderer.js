import React, { Component } from "react";
import { connect } from "react-redux";

import BikePoints from "../bike/BikePoints";
import PublicTransportStatus from "../publicTransport/PublicTransportStatus";

import { bikeStatus } from "../../_vars/globals";

class ContentRenderer extends Component {
  render() {
    let comp;

    if (this.props.menuOption === bikeStatus) {
      comp = <BikePoints />;
    } else {
      comp = <PublicTransportStatus />;
    }

    return comp;
  }
}

function mapStateToProps(state) {
  return { menuOption: state.menu.menuOption };
}

export default connect(mapStateToProps, null)(ContentRenderer);
