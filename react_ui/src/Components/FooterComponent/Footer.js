import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="">
        <footer
          id="sticky-footer"
          className="py-4 bg-dark text-white-50 footer"
        >
          <div className="container text-center text-padding">
            <small>
              Created by{" "}
              <Link
                to={process.env.PUBLIC_URL + "/Profile/index.html"}
                target="_blank"
              >
                Aneesh Kandagatla
              </Link>
            </small>
          </div>
        </footer>
      </div>
    );
  }
}
