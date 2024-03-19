import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRouter from './routes/UserRouter';
import AdminRouter from './routes/AdminRouter';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<UserRouter />} />
        <Route element={<PrivateRoute />}>
          <Route exact path="/admin/*" element={<AdminRouter />} />
        </Route>

      </Routes>

    </>
  );
}

export default App;
