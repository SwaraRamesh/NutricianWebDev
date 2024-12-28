import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";

export default function GuestViewProfile(props) {

    const [user, setUser]=useState({});
    const [username, setUsername]=useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:9090/user/${id}`);
        console.log(result.data);
        setUser(result.data.user);
    }

    return (
        <div>
            <nav  class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Nutrician</Link>
                    <Link class="link-light" style={{textDecoration: 'none'}} to="/guestlist">Health Conditions</Link>
                    <Link class="link-light" style={{textDecoration: 'none'}} to="/guestviewprofile/:id">{props.user}</Link>
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
                <div className='py-4'>
                    My Profile
                    <table className="table border shadow">
                        
                        <thead>
                            <tr>
                                <th scope="row">#</th>
                                <th scope="row">First Name</th>
                                <th scope="row">Last Name</th>
                                <th scope="row">Email</th>
                                <th scope="row">Username</th>
                                <th scope="row">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((fav, index)=> (
                                    <tr>
                                        <th scope="col" key={index}>{index+1}</th>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        
                                        
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

