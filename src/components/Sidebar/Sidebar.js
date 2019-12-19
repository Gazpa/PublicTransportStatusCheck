import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchPublicTransportStatuses,
  setActivePublicTransportStatus,
  clearActivePublicTransportStatus
} from "../../actions/PublicTransportActions";

import { setMenuOption } from "../../actions/MenuActions";

import { SidebarOption } from "./SidebarOption";
import { bikeStatus, publicTransportStatus } from "../../_vars/globals";

class Sidebar extends Component {
  timeoutFetch;

  setTimeoutFetch() {
    this.props.fetchPublicTransportStatuses("");
    this.timeoutFetch = setTimeout(() => this.setTimeoutFetch(), 5000);
  }

  componentDidMount() {
    this.setTimeoutFetch();
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutFetch);
  }

  setActiveStatus = status => {
    if (status.name === bikeStatus) {
      this.props.clearActivePublicTransportStatus();
      this.props.setMenuOption(bikeStatus);
    } else {
      this.props.setMenuOption(publicTransportStatus);
      this.props.setActivePublicTransportStatus(status);
    }
  };

  render() {
    const { tflStatuses } = this.props;

    return (
      <div id="sidebar">
        <div className="sidebar-scroll">
          <div className="sidebar-content">
            <div className="sidebar-title">
              <strong>TFL</strong> Admin
            </div>
            <ul className="sidebar-nav">
              <li className="sidebar-header">Select an option</li>
              {tflStatuses
                ? tflStatuses.map(status => {
                    let active =
                      this.props.activeStatus &&
                      status.id === this.props.activeStatus.id;

                    return (
                      <SidebarOption
                        key={status.id}
                        id={status.id}
                        name={status.name}
                        status={status}
                        active={active}
                        setActiveStatus={this.setActiveStatus}
                      />
                    );
                  })
                : ""}
              <SidebarOption
                id={bikeStatus}
                name={"Cycle Hire"}
                status={{ name: bikeStatus }}
                active={this.props.menuOption === bikeStatus}
                setActiveStatus={this.setActiveStatus}
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tflStatuses: state.publicTransport.tflStatuses,
    activeStatus: state.publicTransport.activeStatus,
    menuOption: state.menu.menuOption
  };
}

export default connect(mapStateToProps, {
  fetchPublicTransportStatuses,
  setActivePublicTransportStatus,
  clearActivePublicTransportStatus,
  setMenuOption
})(Sidebar);
