import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserRouter from './routes/UserRouter';
import AdminRouter from './routes/AdminRouter';
import PrivateRoute from './routes/PrivateRoute';
import { Provider } from 'react-redux';
import { storeReduces } from './redux/store';

import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from './context/Thimecontext';

function App() {
  const {store,persistor} = storeReduces()

  return (
    
    <ThemeProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route exact path="/*" element={<UserRouter />} />
          <Route element={<PrivateRoute />}>
            <Route exact path="/admin/*" element={<AdminRouter />} />
          </Route>

        </Routes>
      </PersistGate>
    </Provider>
      </ThemeProvider>
  );
}

export default App;
