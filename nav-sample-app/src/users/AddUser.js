import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()

    const [user, setUser]=useState({
        firstName:"",
        lastName:"",
        email: "",
        username: "",
        password: "",
        role: ""
    })

    const{firstName, lastName, email, username, password, role}=user

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value });
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9090/user", user)
        navigate("/userlist")
    }

  return (
    <div>
        <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img className="d-inline-block align-top"  width="150"
              height="80"
              src={require('../img/NutricianLogo.png')}
                alt="logo"/>
            </Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/guestlist">Health Conditions</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/userlist">Users</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/aboutus">About Us</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/contactus">Contact Us</Link>
                {/* <Link class="link-light" style={{textDecoration: 'none'}} to="favoriteslist"> My List</Link> */}
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register User</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your first name"
                        name="firstName"
                        value={firstName}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your last name"
                        name="lastName"
                        value={lastName}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your email address"
                        name="email"
                        value={email}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your username"
                        name="username"
                        value={username}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your password"
                        name="password"
                        value={password}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="role" className="form-label">Role</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter your role (admin or guest)"
                        name="role"
                        value={role}
                        onChange={(e)=>onInputChange(e)}/>
                    </div>

                    <br></br>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                    <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
