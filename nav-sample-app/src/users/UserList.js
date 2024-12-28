import React, { useEffect, useState } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { Link, useParams } from "react-router-dom";

export default function UserList() {
    const [users, setUsers]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        const result=await axios.get("http://localhost:9090/users");
        setUsers(result.data);
    }

    const deleteUser=async(id)=>{
        await axios.delete(`http://localhost:9090/user/${id}`)
        loadUsers()
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
        <div className='container'>
            <div className='py-4'>
                Users List
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Username</th>
                        <th scope="col">Password</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                        <br></br>
                        <Link className="btn btn-outline-dark" to="/adduser">Add User</Link>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index)=> (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.username}</td>
                                    <td>{user.password}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2"
                                            to={`/viewuser/${user.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-2"
                                        to={`/edituser/${user.id}`}>Edit</Link>
                                        <button className="btn btn-outline-danger mx-2"
                                        onClick={()=>deleteUser(user.id)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
