import React from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import HomeFeed from './components/HomeFeed';
import Profile from './components/Profile';
import Notifications from './components/Notifications';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Routes>
              <Route path='/' element={<HomeFeed />} /> 
              <Route path="/profile" element={<Profile />} /> 
              <Route path='/notifications' element={<Notifications />} /> 
        </Routes>
      </BrowserRouter>
    </>
      
  );
}

export default App;
