//import React from 'react'
import React, { useEffect, useState } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { Link, useParams } from "react-router-dom";

function ConditionList() {

    const [medicalConditions, setConditions]=useState([]);
    const [search, setSearch] = useState('');
    const {id}=useParams()
    
    useEffect(()=> {
        loadConditions();
    }, [])

    const loadConditions=async()=>{
        const result= await axios.get("http://localhost:9090/medicalConditions");
        setConditions(result.data);
    }


    const deleteCondition=async(id)=>{
        await axios.delete(`http://localhost:9090/medicalCondition/${id}`)
        loadConditions();
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
                        <th scope="col">Height</th>
                        <th scope="col">Sunlight</th>
                        <th scope="col">Season</th>
                        <th scope="col">Temperatures</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        plants.map((plants, index)=> (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{medicalCondition.name}</td>
                                <td>{medicalCondition.height}</td>
                                <td>{medicalCondition.sunlight}</td>
                                <td>{medicalCondition.season}</td>
                                <td>{medicalCondition.temperature}</td>
                                <td>
                                    <Link className="btn btn-primary mx-2"
                                        to={`/viewCondition/${medicalCondition.id}`}>View</Link>
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
export default ConditionList

