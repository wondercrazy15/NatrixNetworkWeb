import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import './UserDetails.css';

class UserDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      CountryId: "",
      HireTypeId: "",
      IsVerifyEmail: false,
      IsAllowTermsAndConditions: false
    }
  }

  handleChange = event => {
    if (event.target.name == "IsVerifyEmail" || event.target.name == "IsAllowTermsAndConditions") {
      this.setState({
        [event.target.name]: event.target.checked
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = JSON.stringify(
      {
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        Password: this.state.Password,
        CountryId: parseInt(this.state.CountryId),
        HireTypeId: parseInt(this.state.HireTypeId),
        IsVerifyEmail: this.state.IsVerifyEmail,
        IsAllowTermsAndConditions: this.state.IsAllowTermsAndConditions,
      });

    axios.post("http://localhost:54936/api/Users/CreateAccount", user, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    // consts { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

    function hireFor(event) {
      if (event.target.value === "1") {
        document.getElementById("Hire").style.background = "#36a200";
        document.getElementById("Hire").style.color = "White";
        document.getElementById("Freelancer").style.background = "white";
        document.getElementById("Freelancer").style.color = "#6c757d";
      }
      else {
        document.getElementById("Freelancer").style.background = "#36a200";
        document.getElementById("Freelancer").style.color = "White";
        document.getElementById("Hire").style.background = "white";
        document.getElementById("Hire").style.color = "#6c757d";
      }
    }
    return (
      <div className="App">
        <header className="App-header">

          <form onSubmit={this.handleSubmit}>
            <div className="container container-border" align="center">
              <h3 className="mt-4">Complete your free account setup</h3>
              <hr />

              <div className="row">
                <div className="col col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <i className="input-group-text fa fa-user input-box"></i>
                    </div>
                    <input
                      className="form-control input-box"
                      name="FirstName"
                      //ref={register({ required: true })}
                      placeholder="Enter First Name"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  {/* {errors.FirstName && errors.FirstName.type === "required" && (<p className="custom-error" align="left">* First name is required</p>)} */}
                </div>

                <div className="col col-sm-6 col-md-6 col-lg-6">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <i className="input-group-text fa fa-user input-box"></i>
                    </div>
                    <input
                      className="form-control input-box"
                      name="LastName"
                      //ref={register({ required: true })}
                      placeholder="Enter Last Name"
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  {/* {errors.LastName && errors.LastName.type === "required" && (<p className="custom-error" align="left">* Last name is required</p>)} */}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <i className="input-group-text fa fa-envelope input-box"></i>
                    </div>
                    <input type="text" className="form-control input-box"
                      //ref={register({ required: true })} 
                      onChange={this.handleChange}
                      name="Email" placeholder="Enter email"></input>
                  </div>
                  {/* {errors.Email && errors.Email.type === "required" && (<p className="custom-error" align="left">* Email is required</p>)} */}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group input-group">
                    <div className="input-group-prepend">
                      <i className="input-group-text fa fa-lock input-box"></i>
                    </div>
                    <input type="password" className="form-control input-box" name="Password"
                      onChange={this.handleChange}
                      // ref={register({
                      //   required: true, minLength: 8,
                      //   // pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@!#%^&*])\S{8,30}$/ 
                      // })}
                      placeholder="Enter password"></input>
                  </div>
                  {/* {errors.Password && errors.Password.type === "required" && (<p className="custom-error" align="left">* Password is required</p>)}
                  {errors.Password && errors.Password.type === "minLength" && (<p className="custom-error" align="left">The password must be 8 characters or longer</p>)}
                  {errors.Password && errors.Password.type === "pattern" && (<p className="custom-error" align="left">Password must contain at least 1 lowercase, 1 uppercase, 1 numeric, one special character alphabetical</p>)} */}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <select className="form-control input-box" name="CountryId"
                      onChange={this.handleChange}
                      //ref={register({ required: true })} 
                      defaultValue="Select country">
                      <option value="">Select country</option>
                      <option value="1">India</option>
                    </select>
                  </div>
                  {/* {errors.CountryId && <p className="custom-error" align="left">* Country is required</p>} */}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group custom-radio-field">
                    <label className="label-style">I want to :</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col ">
                  <div className="form-group btn-group custom-radio-group">
                    <label className="checkBox custom-radio-button" id="Hire"
                      onChange={hireFor}
                    >
                      <input type="radio" name="HireTypeId"
                        onChange={this.handleChange}
                        //ref={register({ required: true })} 
                        value="1" />
                  Hire for a Project
                </label>
                    <label className="checkBox custom-radio-button" id="Freelancer"
                      onChange={hireFor}
                    >
                      Work as a Freelancer
                  <input type="radio" name="HireTypeId"
                        // onChange={this.handleChange}
                        //ref={register({ required: true })} 
                        value="2" />
                    </label>
                  </div>
                  {/* {errors.HireTypeId && <p className="custom-error" align="left">* This is required</p>} */}
                </div>
              </div>

              <div className="row">
                <div className="col" align="left">
                  <label className="checkBox">
                    Yes! Send me genuinely useful emails every now and then to help me
                    get the most out of Upwork.
                            <input type="checkbox" name="IsVerifyEmail"
                      onChange={this.handleChange}
                    // ref={register} 
                    />
                    <span className="checkmark input-box" ></span>
                  </label>

                  <label className="checkBox mt-2">
                    Yes, I understand and agree to the Upwork Terms of Service,
                    including the User Agreement and Privacy Policy.
                             <input type="checkbox" name="IsAllowTermsAndConditions"
                      onChange={this.handleChange}
                    //ref={register({ required: true })} 
                    />
                    <span className="checkmark input-box"></span>
                  </label>
                  {/* {errors.IsAllowTermsAndConditions && <p className="custom-error" align="left">* Term & Service is required</p>} */}
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <div className="form-group">
                    <button type="submit" className="btn btn-success custom-btn">Create My Account
                  </button>
                  </div>
                </div>
              </div>

            </div>
          </form>
          {/* </div> */}
        </header>
      </div>
    );
  }
}
export default UserDetails;


