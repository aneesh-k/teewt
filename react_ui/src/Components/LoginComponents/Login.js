import React, { Component } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
      disable: true,
      buttonText: "Enter valid Email Id and password",
      validLogin: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      //window.location.replace("/")
      this.props.history.push("/");
    }
  }

  validateEmail(data) {
    let x = data;
    let atposition = x.indexOf("@");
    let dotposition = x.lastIndexOf(".");
    if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= x.length
    ) {
      //alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
      return false;
    } else return true;
  }

  addData(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (
      this.validateEmail(this.state.emailId) &&
      this.state.password.length > 6
    ) {
      this.setState({ disable: false, buttonText: "Login" });
    } else {
      this.setState(prev => {
        return { disable: true, buttonText: prev.buttonText };
      });
    }
  }

  async onLogin(e) {
    const postReq = JSON.stringify({
      emailId: this.state.emailId,
      password: this.state.password
    });

    e.preventDefault();
    const postFetch = await fetch("http://localhost:5000/api/login", {
      method: "Post",
      headers: {
        "content-type": "application/json"
      },
      body: postReq
    });

    try {
      const data = await postFetch.json();
      console.log(data);
      if (!data.token) {
        this.setState({ validLogin: data.message });
      } else {
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.replace("/");
      }
    } catch (error) {
      console.log("error: ");
      console.log(error);
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form>
                      <div className="form-label-group">
                        <input
                          onChange={this.addData.bind(this)}
                          type="email"
                          name="emailId"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"
                          required
                        />
                        <label htmlFor="inputEmail">Email address</label>
                      </div>

                      <div className="form-label-group">
                        <input
                          name="password"
                          onChange={this.addData.bind(this)}
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password"
                          required
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <button
                        onClick={this.onLogin.bind(this)}
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <div className="text-center">{this.state.validLogin}</div>
                    </form>
                    Not a Member? <Link to="/register">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="container-fluid ">
<div className="row justify-content-md-center">
    <div className="col-md-auto centrevalue border-left border-right">
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text width">Email ID</span>
            </div>
            <input type="text" className="form-control" name="emailId"
                onChange={this.addData.bind(this)} />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text width">Password</span>
            </div>
            <input type="password" className="form-control" name="password"
                onChange={this.addData.bind(this)} />
        </div>
        <input disabled={this.state.disable}
                onClick={this.onLogin.bind(this)}
                type="button"
                className="btn btn-lg btn-block btn-outline-success" value={this.state.buttonText} />
        {this.state.validLogin}
    </div>
</div>
</div> */
}
