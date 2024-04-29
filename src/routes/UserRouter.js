import React, { useContext } from 'react';
import Header from '../user/component/Header/Header';
import Home from '../user/container/Home/Home';
import Footer from '../user/component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Shop from '../user/container/Shop/Shop';
// import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import PrivateRoute from './PrivateRoute';
// import Contact from '../user/container/Contact/Contact';
import ShopDetails from '../user/container/ShopDetails/ShopDetails';
import Reviewse from '../user/container/Review/Reviewse';
import Cart from '../user/container/Cart/Cart';
import Counter from '../admin/container/Counter/Counter';
import { ThemeContext } from '../context/Thimecontext';
import Contact from '../user/container/Contact/Contact';
// import Contect from '../admin/container/Contect/Contect';


function UserRouter(props) {

    const themeContext = useContext(ThemeContext)
    console.log(themeContext);

    return (
        <div className={themeContext.theme}>
        
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route element={<PrivateRoute />}>
                    <Route exact path="/Shop" element={<Shop />} />
                    <Route exact path="/Shop/:id" element={<ShopDetails />} />
                    {/* <Route exact path="/new:id" element={<Review />} />*/}
                </Route>
                <Route path='/counter' element={<Counter />} />
                <Route path='/Carts' element={<Cart />} />
                <Route path='/Contect' element={<Contact />} />

                {/* <Route exact path="/Reviewse" element={<Reviewse/>} /> */}

            </Routes>
            <Footer />
            
       
        </div>
    );
}

export default UserRouter;