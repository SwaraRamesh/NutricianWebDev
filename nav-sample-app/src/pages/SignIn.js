import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
//import Popup from 'react-popup';

function SignIn() {
  
    let navigate=useNavigate()

    //const { id } = useParams();

    const [user, setUser]=useState({
        id: "",
        firstName:"",
        lastName:"",
        email: "",
        username: "",
        password: "",
        role: ""
    })


    const{id,firstName, lastName, email, username, password, role}=user

    const onInputChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value });
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        
        const result = await axios.get(`http://localhost:9090/user/${username}`, username);
        //if (result.data !== null) {
            setUser(result.data);
            console.log("from sign in"+result.data.id+ " " + username);
            localStorage.setItem("loginuserid", JSON.stringify(result.data.id));
            
            console.log(result.data.role);
            //await axios.get(`http://localhost:9090/userid/${id}`, user)
           // if (user) {
                if (result.data.role === "admin") {
                    navigate("/conditionlist")
                }
                else {
                    navigate("/guestlist")
                }
                
        //}
        //else {
            //console.log("User does not exist");
        //}

       // }
       // else {
            //console.log("username incorrect")
        //}
    }

    SignIn.defaultProps = {
        username: user.username,
        id: user
        
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
                <Link class="link-light" style={{textDecoration: 'none'}} to="/aboutus">About Us</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/contactus">Contact Us</Link>
                </div></nav>
                <br></br>
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Sign In</h2>

                    <form onSubmit={(e)=>onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your username"
                            name="username"
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                            type={"text"}
                            className="form-control"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e)=>onInputChange(e)}
                            />
                        </div>
                    <br></br>
                    <button type="submit" className="btn btn-outline-dark" >Submit</button>
                    <Link className="btn btn-outline-primary mx-2" to="/Home">Register</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn