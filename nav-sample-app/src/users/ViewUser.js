import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams } from "react-router-dom";

export default function ViewUser() {

    const [user, setUser]=useState([]);
    const [medConditionList, setMedCondList]=useState([]);

    const signupUserid = JSON.parse(localStorage.getItem("loginuserid"));
    const { id } = useParams();

    useEffect(() => {
        loadFavorites();
    }, []);

    const loadFavorites = async () => {
        const result = await axios.get(`http://localhost:9090/favorite/${signupUserid}`);
        setUser(result.data.user);
        setMedCondList(result.data.medCondList);
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
                {/*<Link class="link-light" style={{textDecoration: 'none'}} to="/conditionlist"> Health Conditions</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/userlist"> Users</Link>
                <Link class="link-light" style={{textDecoration: 'none'}} to="/aboutus">About Us</Link>*/}
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
                User Favorite List
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            medConditionList.map((fav, index)=> (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{fav.name}</td>
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
