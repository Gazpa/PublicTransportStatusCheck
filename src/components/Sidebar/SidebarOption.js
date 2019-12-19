import React, { Component } from "react";

export class SidebarOption extends Component {
  render() {
    const { name, setActiveStatus, status, active } = this.props;
    let nightIcon;
    let disrruptionsIcon;

    if (status && status.serviceTypes) {
      for (let i = 0; i < status.serviceTypes.length; i++) {
        if (status.serviceTypes[i].name === "Night") {
          nightIcon = <i className="fa fa-moon-o sidebar-nav-icon"></i>;
          break;
        }
      }

      for (let i = 0; i < status.lineStatuses.length; i++) {
        if (parseInt(status.lineStatuses[i].statusSeverity, 10) !== 10) {
          disrruptionsIcon = (
            <i className="fa fa-info-circle sidebar-nav-icon"></i>
          );
          break;
        }
      }
    }

    return (
      <li onClick={() => setActiveStatus(status)}>
        <a href={`/#${name}`} className={active ? "active" : ""}>
          <i className="fa fa-home sidebar-nav-icon"></i>
          {`${name} `}
          {nightIcon}
          {disrruptionsIcon}
        </a>
      </li>
    );
  }
}
