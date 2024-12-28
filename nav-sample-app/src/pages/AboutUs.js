import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
export default function AboutUs() {
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
                <div className="col-md-6 offset-md-2 border rounded p-2 mt-5 shadow">
                    <h2 className="text-center m-6">About Us</h2>
                    <p>Welcome to Nutrician!</p>
                    <p>Nutrician is a web-development project designed to assist people with research
                        and remembering information on medical conditions and other related information.
                    </p>
                    <p>This website is closely related to a multi-platform app, developed using Xamarin, of the same name.
                    </p>
                    <p>In Nutrician, if you have admin access, you can control settings, accounts, and information displayed on our website.
                        As a user, you have access to plenty of information derived from thorough research. Users can also have a favorites
                        list and log entries related to their health. You can edit and delete this information and mantain a log as you wish!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
