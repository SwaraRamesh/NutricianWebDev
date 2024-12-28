
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from './layout/NavbarComp';

import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import AddCondition from "./medicalConditions/AddCondition";
import EditCondition from "./medicalConditions/EditCondition";
import ViewCondition from './medicalConditions/ViewCondition';
import UserList from './users/UserList';
import FavoritesList from './favorites/FavoritesList';
import AddFavorite from './favorites/AddFavorite';
import ViewList from './favorites/ViewList';
import ConditionList from './medicalConditions/ConditionList';
import SignIn from './pages/SignIn';
import GuestList from './medicalConditions/GuestList';
import GuestViewCondition from './medicalConditions/GuestViewCondition';
import GuestViewFavs from './users/GuestViewFavs';
import GuestViewProfile from './users/GuestViewProfile';
import NavbarCompGuest from './layout/NavbarCompGuest';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import EntryList from './notes/EntryList';
import EditEntry from './notes/EditEntry';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path="/navbar" element={<NavbarComp/>}></Route>
          <Route exact path="/navguest" element={<NavbarCompGuest/>}></Route>
          <Route exact path="/" element={<SignIn></SignIn>}/>
          <Route exact path="/Home" element={<Home></Home>}/>
          <Route exact path="/adduser" element={<AddUser></AddUser>}/>
          <Route exact path="/edituser/:id" element={<EditUser></EditUser>}/>
          <Route exact path="/viewuser/:id" element={<ViewUser></ViewUser>}/>
          <Route exact path="/medicalConditions/" element={<ViewCondition></ViewCondition>}/>
          <Route exact path="/addcondition" element={<AddCondition></AddCondition>}/>
          <Route exact path="/editcondition/:id" element={<EditCondition></EditCondition>}/>
          <Route exact path="/viewcondition/:id" element={<ViewCondition></ViewCondition>}/>
          <Route exact path="/conditionlist" element={<ConditionList></ConditionList>}/>
          <Route exact path="/userlist/" element={<UserList></UserList>}/>
          <Route exact path="/favoriteslist/" element={<FavoritesList></FavoritesList>}/>
          <Route exact path="/addtolist/:id" element={<AddFavorite></AddFavorite>}/>
          <Route exact path="/viewlist/:id" element={<ViewList></ViewList>}/>
          <Route exact path="/guestlist/" element={<GuestList></GuestList>}/>
          <Route exact path="/guestviewcondition/:id" element={<GuestViewCondition></GuestViewCondition>}/>
          <Route exact path="/guestviewfavs/:id" element={<GuestViewFavs></GuestViewFavs>}/>
          <Route exact path="/guestviewprofile/:id" element={<GuestViewProfile></GuestViewProfile>}/>
          <Route exact path="/aboutus" element={<AboutUs></AboutUs>}/>
          <Route exact path="/contactus" element={<ContactUs></ContactUs>}/>
          <Route exact path="/entrylist" element={<EntryList></EntryList>}/>
          <Route exact path="/editentry/:id" element={<EditEntry></EditEntry>}/>
        </Routes>

      </Router>
     
    </div>
  );
}

export default App;
