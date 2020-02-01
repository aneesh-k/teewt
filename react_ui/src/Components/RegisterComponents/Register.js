import React, { Component } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      emailId: "",
      password: "",
      disable: true,
      validEmail: "",
      resp: ""
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

  addData(events) {
    this.setState({
      [events.target.name]: events.target.value
    });

    if (
      this.state.firstname.length > 6 &&
      this.state.lastname.length > 6 &&
      this.state.emailId.length > 6 &&
      this.state.password.length > 6
    ) {
      this.setState({
        disable: false
      });
    } else {
      this.setState({
        disable: true
      });
    }
  }

  async onRegister(event) {
    //event.preventDefault();
    if (!this.validateEmail(this.state.emailId)) {
      this.setState({ validEmail: "Invalid email id" });
      return;
    } else {
      this.setState({ validEmail: "" });
    }
    const regData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      emailId: this.state.emailId,
      password: this.state.password
    };
    console.log(regData);

    const postData = JSON.stringify(regData);
    console.log(postData);

    try {
      const resp = await fetch("http://localhost:5000/api/user/register", {
        method: "Post",
        headers: {
          "content-type": "application/json"
        },
        body: postData
      });
      const respData = await resp.json();
      // this.setState({
      //     resp: respData.message
      // })
      if (respData.message) {
        this.setState({
          resp: respData.message
        });
      } else {
        this.props.history.push("/");
      }
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  render() {
    return (
      <div className="bgcolor container-fluid">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form className="form-signin">
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text width">First Name</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="firstname"
                      onChange={this.addData.bind(this)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text width">Last Name</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="lastname"
                      onChange={this.addData.bind(this)}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text width">Email ID </span>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      name="emailId"
                      onChange={this.addData.bind(this)}
                    />
                  </div>
                  {this.state.validEmail}
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text width">Password </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.addData.bind(this)}
                    />
                  </div>
                  <input
                    disabled={this.state.disable}
                    onClick={this.onRegister.bind(this)}
                    type="button"
                    className="btn btn-lg btn-block btn-outline-success"
                    value="Register"
                  />
                  Already a Member? <Link to="/login">Sign In</Link>
                  <br />
                  {this.state.resp}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//{
/* <div className="container-fluid ">
                <div className="row justify-content-md-center">
                    <div className="col-md-auto centrevalue border-left border-right">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text width">First Name</span>
                            </div>
                            <input type="text" className="form-control" name="firstname"
                                onChange={this.addData.bind(this)} />
                        </div>
                       
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text width">Last Name</span>
                                </div>
                                <input type="text" className="form-control" name="lastname"
                                    onChange={this.addData.bind(this)} />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text width">Email ID </span>
                                </div>
                                <input name="email" type="email" className="form-control" name="emailId"
                                    onChange={this.addData.bind(this)} />
                            </div>
                            {this.state.validEmail}
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text width">Password </span>
                                </div>
                                <input type="text" className="form-control" name="password"
                                    onChange={this.addData.bind(this)} />
                            </div>
                            <input disabled={this.state.disable}
                                onClick={this.onRegister.bind(this)}
                                type="button"
                                className="btn btn-lg btn-block btn-outline-success" value="Register" />

                        
                        {this.state.resp}
                    </div>
                </div>
            </div> */
//}
