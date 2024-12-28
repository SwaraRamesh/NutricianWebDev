import React, { useEffect, useState } from 'react';
import axios, { AxiosHeaders } from 'axios';
import { Link, useParams } from "react-router-dom";

export default function FavoritesList() {
    const [favorites, setFavorites]=useState([])
    const {id}=useParams()
    const {userId}=useParams()
    const {medId}=useParams()

    useEffect(()=>{
        loadFavorites();
    }, []);

    const loadFavorites=async()=>{
        const result=await axios.get(`http://localhost:9090/favorite/${userId}`);
        setFavorites(result.data);
        console.log(result);
    }

    const deleteFavorites=async(id)=>{
        await axios.delete(`http://localhost:9090/favorite/${userId}/${medId}`)
        loadFavorites()
    }
  

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

        <div className='container'>
            <div className='py-4'>
                Favorites List By Users
                <table className="table border shadow">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Favorites ID</th>
                        <th scope="col">User Id</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            favorites.map((favorites, index)=> (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{favorites.id}</td>
                                    <td>{favorites.userId}</td>
                                    <td>{favorites.medId}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2"
                                            to={`/viewlist/${favorites.userId}`}>View</Link>
                                        <button className="btn btn-danger mx-2"
                                            onClick={()=>deleteFavorites(favorites.id)}
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