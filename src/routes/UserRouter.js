import React from 'react';
import Header from '../user/component/Header/Header';
import Home from '../user/container/Home/Home';
import Footer from '../user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from '../user/container/Shop/Shop';
// import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import PrivateRoute from './PrivateRoute';
import Contact from '../user/container/Contact/Contact';
import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import Reviewse from '../user/container/Review/Reviewse';
import Cart from '../user/container/Cart/Cart';
import Counter from '../admin/container/Counter/Counter';


function UserRouter(props) {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route exact path="/Shop" element={<Shop />} />
                    <Route exact path="/Shop/:id" element={<ShopDetails />} />
                    {/* <Route exact path="/new:id" element={<Review />} />   */}
                </Route>
                <Route path='/counter' element={<Counter />} />
                <Route path='/Carts' element={<Cart />} />
                {/* <Route exact path="/Reviewse" element={<Reviewse/>} /> */}

            </Routes>
            <Footer />
        </>
    );
}

export default UserRouter;