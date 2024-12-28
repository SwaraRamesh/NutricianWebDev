import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";

export default function ViewList() {

    const [favorites, setFavorites]=useState({
        userId: "",
        medId: ""
    });

    const { id } = useParams();
    const { userId } = useParams();
    const { medId } = useParams();

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        const result = await axios.get(`http://localhost:9090/favorite/${id}`);
        setFavorites(result.data);
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
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User's Favorites List Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of favorites list id: {favorites.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>ID: </b>
                                    {favorites.id}
                                </li>
                                <li className="list-group-item">
                                    <b>User ID: </b>
                                    {favorites.userId}
                                </li>
                                <li className="list-group-item">
                                    <b>Medical Condition ID: </b>
                                    {favorites.medId}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <br></br>
                    <Link className="btn btn-dark my-2" to={"/addtolist/:id"}>
                        Add Condition to List
                    </Link>
                    <br></br>
                    <Link className="btn btn-primary my-2" to={"/"}>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
