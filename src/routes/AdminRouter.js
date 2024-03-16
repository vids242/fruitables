import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/container/Product/Product';

function AdminRouter(props) {
    return (
        <div>
            <Routes>
                <Route exact path="/product" element={<Product/>}/>
            </Routes>
        </div>
    );
}

export default AdminRouter;