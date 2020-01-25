import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="sticky-footer" className="py-4 bg-dark text-white-50 footer">
          <div className="container text-center text-padding">
            <small>
              Created by <Link to="/myprofile">Aneesh Kandagatla</Link>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}
