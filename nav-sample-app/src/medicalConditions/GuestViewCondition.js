import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

export default function GuestViewCondition() {

    const [medicalCondition, setCondition]=useState({
        name: "",
        symptoms: "",
        suggestions: "",
        avoid: "",
        meals: "",
        veganMeals: ""
    });

    const { id } = useParams();

    useEffect(() => {
        loadCondition();
    }, []);

    const loadCondition = async () => {
        const result = await axios.get(`http://localhost:9090/medicalCondition/${id}`);
        setCondition(result.data);
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
                <Link class="link-light" style={{textDecoration: 'none'}} to="/guestviewprofile/:id">Profile</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/entrylist">Notes</Link>
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
                <h2 className="text-center m-4">Health Condition Details</h2>

                <div className="card">
                    <div className="card-header">
                        Details of medical condition
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <b>Name: </b>
                                {medicalCondition.name}
                            </li>
                            <li className="list-group-item">
                                <b>Symptoms: </b>
                                {medicalCondition.symptoms}
                            </li>
                            <li className="list-group-item">
                                <b>Suggestions: </b>
                                {medicalCondition.suggestions}
                            </li>
                            <li className="list-group-item">
                                <b>Avoid: </b>
                                {medicalCondition.avoid}
                            </li>
                            <li className="list-group-item">
                                <b>Meals: </b>
                                {medicalCondition.meals}
                            </li>
                            <li className="list-group-item">
                                <b> Vegan Meals: </b>
                                {medicalCondition.veganMeals}
                            </li>
                        </ul>
                    </div>
                </div>
                <Link className="btn btn-primary my-2" to={"/GuestList"}>
                    Back to Home
                </Link>
            </div>
        </div>
    </div>
    </div>
  );
}
