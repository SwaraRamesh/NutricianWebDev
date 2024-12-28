import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

export default function EditEntry() {
    
    let navigate=useNavigate()

    const {id}=useParams()

    const [note, setNote]=useState({
        entry:"",
        userId:""
    });

    const{entry, userId}=note

    const onInputChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value });
    };

    useEffect(()=>{
        loadNote()
    }, []);

    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:9090/note", note)
        navigate("/entrylist")
    };

    const loadNote=async()=>{
        const result = await axios.get(`http://localhost:9090/note/${id}`)
        setNote(result.data);
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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Note</h2>
                    
                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="entry" className="form-label">Entry</label>
                        <input
                        type={"text"}
                        className="form-control"
                        placeholder="Change your note"
                        name="entry"
                        value={entry}
                        onChange={(e)=>onInputChange(e)}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">User ID</label>
                        <br></br>
                        <label>{userId}</label>
                    </div>

                    <br></br>
                    <button type="submit" className="btn btn-outline-dark">Submit</button>
                    <Link className="btn btn-outline-danger mx-2" to="/userlist">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}