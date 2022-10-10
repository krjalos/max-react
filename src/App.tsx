import React from 'react';
import {Routes, Route} from 'react-router-dom';
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Header from "./components/Header/Header";
import SingleMeetupPage from "./pages/SingleMeetupPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<AllMeetups/>}/>
        <Route path='/meetup/:meetupId' element={<SingleMeetupPage/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
        <Route path='/new-meetup' element={<NewMeetup/>}/>
      </Routes>
    </div>
  );
}

export default App;
