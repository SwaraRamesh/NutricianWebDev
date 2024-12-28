import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link,useParams, useNavigate } from "react-router-dom";

export default function EntryList(){//) {

    const [user, setUser]=useState([]);
    const [noteList, setNoteList]=useState([]);
    const [note, setNote]=useState([]);

    let navigate=useNavigate()
    const signupUserid = JSON.parse(localStorage.getItem("loginuserid"));
    const { id } = useParams();

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes=async()=>{
        //console.log("from notes - local storage "+signupUserid);
        const result= await axios.get(`http://localhost:9090/notesUser/${signupUserid}`);//${id}`);
        setNoteList(result.data.noteList);
        setUser(result.data);
        console.log(result.data);
    }

    const deleteNote=async(id)=>{
        await axios.delete(`http://localhost:9090/note/${id}`)
        loadNotes();
    }

    const addNote=async(e)=>{
        e.preventDefault();
        note.userId = user.id
        await axios.post("http://localhost:9090/note", note)
        navigate("/")
    }

    const onInputChange=(e)=>{
        setNote({...note, [e.target.name]: e.target.value });
    };

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
                <Link class="link-light" style={{textDecoration: 'none'}} to="/viewuser:id">Profile</Link>
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
        <br></br>
        <div className='container'>
        <label>Add Entry:</label>
            <input
                type={"text"}
                className="form-control"
                placeholder="Your entry:"
                name="note"
                onChange={(e)=>onInputChange(e)}
            />
            <br></br>
            <button className="btn btn-outline-primary mx-2" onClick={()=>deleteNote(note)}>Submit</button>
            <br></br>
        </div>
        <div className='container'>
            <div className='py-4'>
                Notes
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Entry</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            noteList.map((note, index)=> (
                                <tr>
                                    <th scope="row" key={index}>{index+1}</th>
                                    <td>{note.entry}</td>
                                    <Link className="btn btn-outline-primary mx-2"
                                        to={`/editentry/${note.id}`}>Edit</Link>
                                    <button className="btn btn-outline-danger mx-2"
                                        onClick={()=>deleteNote(note)}
                                        >Delete</button>
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