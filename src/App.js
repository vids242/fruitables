import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRouter from './routes/UserRouter';
import AdminRouter from './routes/AdminRouter';


function App() {
  return (
    <>
    <Routes>
      <Route exact path="/*" element={<UserRouter/>}/>
      <Route exact path="/admin/*" element={<AdminRouter/>}/>
    </Routes>
   
    </>
  );
}

export default App;
