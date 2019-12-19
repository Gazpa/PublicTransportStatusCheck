import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="clearfix">
        <div className="pull-right">
          Crafted with <i className="fa fa-heart text-danger"></i> by{" "}
          <a
            href="http://pixelcave.com/upanel"
            target="_blank"
            rel="noopener noreferrer"
          >
            pixelcave
          </a>
        </div>
        <div className="pull-left">
          <span id="year-copy"></span> &copy;{" "}
          <a
            href="http://pixelcave.com/upanel"
            target="_blank"
            rel="noopener noreferrer"
          >
            uPanel 1.5
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
