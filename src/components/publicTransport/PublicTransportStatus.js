import React, { Component } from "react";
import { connect } from "react-redux";

import { clearActivePublicTransportStatus } from "../../actions/PublicTransportActions";

class PublicTransportStatus extends Component {
  componentWillUnmount() {
    this.props.clearActivePublicTransportStatus();
  }

  renderLineStatuses = () => {
    let list = this.props.activeStatus
      ? this.props.activeStatus.lineStatuses
      : "";

    list.filter(item => {
      return item.statusSeverity < 10;
    });

    return (
      <div className="table-responsive">
        <table id="general-table" className="table table-vcenter">
          <thead>
            <tr>
              <th>Reason{list.length > 1 ? "s" : ""}</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{item.reason}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  render() {
    if (!this.props.activeStatus)
      return <div id="page-content">Please, select a menu option</div>;

    let { name } = this.props;
    let list = this.props.activeStatus
      ? this.props.activeStatus.lineStatuses
      : "";
    let loadStatuses = false;

    for (let status of list) {
      if (parseInt(status.statusSeverity, 10) !== 10) {
        loadStatuses = true;
        break;
      }
    }

    return (
      <div id="page-content">
        <div className="content-header">
          <div className="row">
            <div className="col-sm-6">
              <div className="header-section">
                <h1>
                  <strong>{name} Status</strong>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="block">
          <div className="block-title">
            <h2>
              <strong>
                {loadStatuses
                  ? "Service currently suffering disruptions"
                  : "No service disruptions"}
              </strong>
            </h2>
          </div>

          {loadStatuses ? this.renderLineStatuses() : ""}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { activeStatus: state.publicTransport.activeStatus };
}

export default connect(mapStateToProps, {
  clearActivePublicTransportStatus
})(PublicTransportStatus);
