import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function AddCondition() {
    
    let navigate=useNavigate()

    const [medicalCondition, setConditions]=useState({
        name:"",
        symptoms:"",
        suggestions: "",
        avoid: "",
        meals: "",
        veganMeals: ""
    });

    const{name, symptoms, suggestions, avoid, meals, veganMeals}=medicalCondition

    const onInputChange=(e)=>{
        setConditions({...medicalCondition, [e.target.name]: e.target.value });
    };

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9090/medicalCondition", medicalCondition)
        navigate("/")
    };

  return (
    <div>
         <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
            <Link className="navbar-brand" to="//">
            <img className="d-inline-block align-top"  width="150"
              height="80"
              src={require('../img/NutricianLogo.png')}
                alt="logo"/>
            </Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/conditionlist"> Health Conditions</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/userlist"> Users</Link>
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
                    <h2 className="text-center m-4">Add Medical Condition</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the name of the health condition"
                        name="name"
                        value={name}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="symptoms" className="form-label">Symptoms</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the symptoms of the health condition"
                        name="symptoms"
                        value={symptoms}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="suggestions" className="form-label">Suggestions</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the suggestions of the health condition"
                        name="suggestions"
                        value={suggestions}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="avoid" className="form-label">Avoid</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the things to avoid for the health condition"
                        name="avoid"
                        value={avoid}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="meals" className="form-label">Meals</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the suggested meals of the health condition"
                        name="meals"
                        value={meals}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="veganMeals" className="form-label">Vegan Meals</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Enter the suggested vegan meals of the health condition"
                        name="veganMeals"
                        value={veganMeals}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                    <Link className="btn btn-outline-danger mx-2" to="/conditionlist">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}