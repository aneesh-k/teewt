import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Nav extends Component {
  onLogout(e) {
    e.preventDefault();
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark padd">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={process.env.PUBLIC_URL + "/Profile/index.html"}
                    target="_blank"
                  >
                    Profile
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    onClick={this.onLogout.bind(this)}
                    type="button"
                    className="btn btn-outline-success"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="padd">
          <h1>
            {" "}
            <br />
          </h1>
        </div>
      </div>
    );
  }
}
