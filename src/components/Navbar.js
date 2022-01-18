import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              Metropol Sitesi
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
