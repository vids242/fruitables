import React from 'react';
import Header from '../user/component/Header/Header';
import Home from '../user/container/Home/Home';
import Footer from '../user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from '../user/container/Shop/Shop';
import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import PrivateRoute from './PrivateRoute';
import Contact from '../user/container/Contact/Contact';

function UserRouter(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route exact path="/Shop" element={<Shop />} />
                    <Route exact path="/Shop/:id" element={<ShopDetails />} />
                </Route>
            <Route path='/contact' element={<Contact/>} />

            </Routes>
            <Footer />
        </>
    );
}

export default UserRouter;