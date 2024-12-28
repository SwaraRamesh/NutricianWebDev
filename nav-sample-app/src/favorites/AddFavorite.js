import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

export default function AddFavorite() {
    
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
                <Link className="navbar-brand" to="/">Nutrician</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/conditionlist"> Health Conditions</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/userlist"> Users</Link>
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
                    <h2 className="text-center m-4">Add Condition to Favorites List</h2>
                    
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Search for Medical Condition</Form.Label>
                            <Form.Control type="search" placeholder="Search" />
                        </Form.Group>
                    </Form>
                    <br></br>
                    <button type="submit" className="btn btn-outline-dark">Add</button>
                    <Link className="btn btn-outline-danger mx-2" to="/favoriteslist">Cancel</Link>
                </div>
            </div>
        </div>
    </div>
  )
}