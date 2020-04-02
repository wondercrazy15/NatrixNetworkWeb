import React from 'react';
import { useForm } from 'react-hook-form';

import "bootstrap/dist/css/bootstrap.min.css";
import './UserDetails.css';

function UserDetails() {

  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });

  const onSubmit = data => {
    console.log(data);
  }

  function hireFor(event) {
    console.log(event.target.value);
    if (event.target.value === "Hire for a Project") {
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
        {/* <div className="route-demo"> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container container-border" align="center">
            <h3 className="mt-4">Complete your free account setup</h3>
            <hr />

            {/* First name and last name */}
            <div className="row">
              {/* First Name */}
              <div className="col col-sm-6 col-md-6 col-lg-6">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <i className="input-group-text fa fa-user input-box"></i>
                  </div>
                  <input
                    className="form-control input-box"
                    name="firstName"
                    ref={register({ required: true })}
                    placeholder="Enter first name"
                  ></input>
                </div>
                {errors.firstName && errors.firstName.type === "required" && (<p className="custom-error" align="left">* First name is required</p>)}
              </div>

              {/* Last name */}
              <div className="col col-sm-6 col-md-6 col-lg-6">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <i className="input-group-text fa fa-user input-box"></i>
                  </div>
                  <input
                    className="form-control input-box"
                    name="lastName"
                    ref={register({ required: true })}
                    placeholder="Enter last name"
                  ></input>
                </div>
                {errors.lastName && errors.lastName.type === "required" && (<p className="custom-error" align="left">* Last name is required</p>)}
              </div>
            </div>

            {/* Email */}
            <div className="row">
              <div className="col">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <i className="input-group-text fa fa-envelope input-box"></i>
                  </div>
                  <input type="text" className="form-control input-box" ref={register({ required: true })} name="email" placeholder="Enter email"></input>
                </div>
                {errors.email && errors.email.type === "required" && (<p className="custom-error" align="left">* Email is required</p>)}
              </div>
            </div>

            {/* Password */}
            <div className="row">
              <div className="col">
                <div className="form-group input-group">
                  <div className="input-group-prepend">
                    <i className="input-group-text fa fa-lock input-box"></i>
                  </div>
                  <input type="password" className="form-control input-box" name="password"
                    ref={register({ required: true, minLength: 8, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[$@!#%^&*])\S{8,30}$/ })}
                    placeholder="Enter password"></input>
                </div>
                {errors.password && errors.password.type === "required" && (<p className="custom-error" align="left">* Password is required</p>)}
                {errors.password && errors.password.type === "minLength" && (<p className="custom-error" align="left">The password must be 8 characters or longer</p>)}
                {errors.password && errors.password.type === "pattern" && (<p className="custom-error" align="left">Password must contain at least 1 lowercase, 1 uppercase, 1 numeric, one special character alphabetical</p>)}
              </div>
            </div>

            {/* Country */}
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <select className="form-control input-box" name="country" ref={register({ required: true })} defaultValue="Select country">
                    <option value="">Select country</option>
                    <option value="India">India</option>
                    <option value="UK">UK</option>
                    <option value="USA">USA</option>
                  </select>
                </div>
                {errors.country && <p className="custom-error" align="left">* Country is required</p>}
              </div>
            </div>

            {/* Hire Button */}
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
                  <label className="checkBox custom-radio-button" id="Hire" onChange={hireFor}>
                    <input type="radio" name="rbType" ref={register({ required: true })} value="Hire for a Project" />
                  Hire for a Project
                </label>
                  <label className="checkBox custom-radio-button" id="Freelancer" onChange={hireFor}>
                    Work as a Freelancer
                  <input type="radio" name="rbType" ref={register({ required: true })} value="Work as a Freelancer" />
                  </label>
                </div>
                {errors.rbType && <p className="custom-error" align="left">* This is required</p>}
              </div>
            </div>

            {/* CheckBox */}
            <div className="row">
              <div className="col" align="left">
                <label className="checkBox">
                  Yes! Send me genuinely useful emails every now and then to help me
                  get the most out of Upwork.
                            <input type="checkbox" name="checkEmail" ref={register} />
                  <span className="checkmark input-box" ></span>
                </label>

                <label className="checkBox mt-2">
                  Yes, I understand and agree to the Upwork Terms of Service,
                  including the User Agreement and Privacy Policy.
                             <input type="checkbox" name="checkBoxTC" ref={register({ required: true })} />
                  <span className="checkmark input-box"></span>
                </label>
                {errors.checkBoxTC && <p className="custom-error" align="left">* Term & Service is required</p>}
              </div>
            </div>

            {/* Create Button */}
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

export default UserDetails;
