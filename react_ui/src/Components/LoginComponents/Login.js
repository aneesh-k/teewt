import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            emailId: "",
            password: "",
            disable:true,
            buttonText: "Enter valid Email Id and password",
            validLogin: ""
        }
        
    }
    

    validateEmail(data) {
        let x = data
        let atposition = x.indexOf("@");
        let dotposition = x.lastIndexOf(".");
        if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
            //alert("Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition);
            return false;
        } else return true
    }

    addData(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        if (this.validateEmail(this.state.emailId) && this.state.password.length > 6) {
            this.setState({disable: false, buttonText: "Login"})
        } else {
            this.setState((prev) => {
              return {disable: true, buttonText:prev.buttonText}                
            })
        }
    }
    

    async onLogin(e){
        const postReq = JSON.stringify({
            emailId: this.state.emailId,
            password: this.state.password
        })
        
        e.preventDefault();
        const postFetch = await fetch("http://localhost:5000/api/login",{
            method: "Post",
            headers: {
                "content-type":"application/json"
            },
            body: postReq
        })

        try {
            const data = await postFetch.json();
            console.log(data)
            if(!data.token){
                this.setState({validLogin: data.message})
            }else{
                const token = data.token
                localStorage.setItem("token", token)   
                window.location.replace("/")          
            }
            
        } catch (error) {
            console.log("error: ")
            console.log(error)
        }



    }

    render() {
        return (
            <div className="container-fluid ">
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
            </div>
        );
    }
}