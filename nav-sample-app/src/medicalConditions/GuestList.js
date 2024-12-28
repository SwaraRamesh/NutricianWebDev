//import React from 'react'
import React, { useEffect, useState } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { Link, useParams } from "react-router-dom";

function GuestList() {

    const [medicalConditions, setConditions]=useState([])
    const [search, setSearch] = useState('');
    const {id}=useParams()
    
    useEffect(()=> {
        loadConditions();
    }, [])

    const loadConditions=async()=>{
        const result= await axios.get("http://localhost:9090/medicalConditions");
        setConditions(result.data);
    }

    const [user, setUsers]=useState([])

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:9090/users");
        setUsers(result.data);
    }

    const globalId = localStorage.getItem("id");
    console.log(globalId);
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
                <Link class="link-light" style={{textDecoration: 'none'}} to="/viewuser/:id">Profile</Link>
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
    
        <div className='container'>
            Medical Conditions List
            <div>
            <label htmlFor='search'></label>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
            </div>
            <table className="table border shadow">
                
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Symptoms</th>
                        <th scope="col">Suggestions</th>
                        <th scope="col">To Avoid</th>
                        <th scope="col">Meals</th>
                        <th scope="col">Vegan Meals</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        medicalConditions.filter((medicalCondition)=>{
                            return search.toLowerCase()===''
                            ? medicalCondition
                            : medicalCondition.name.toLowerCase().includes(search);
                          }).map((medicalCondition, index)=> (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{medicalCondition.name}</td>
                                <td>{medicalCondition.symptoms}</td>
                                <td>{medicalCondition.suggestions}</td>
                                <td>{medicalCondition.avoid}</td>
                                <td>{medicalCondition.meals}</td>
                                <td>{medicalCondition.veganMeals}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                        to={`/guestviewcondition/${medicalCondition.id}`}>View</Link>
                                    
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
export default GuestList

