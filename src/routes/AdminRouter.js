import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Product from '../admin/container/Product/Product';
import Layout from '../admin/component/Layout/Layout';
import Review from '../admin/container/Review/Review';
import Category from '../admin/container/Category/Category';
import Facilites from '../admin/container/Facilites/Facilites';
import Counter from '../admin/container/ToolkitCounter/Counter';

function AdminRouter(props) {
    return (
        <div>
            <Layout>
                <Routes>
                    <Route exact path="/product" element={<Product />} />
                    <Route exact path="/review" element={<Review />} />
                    <Route exact path="/category" element={<Category />} />
                    <Route exact path="/facilites" element={<Facilites />} />
                    <Route exact path="/counter" element={<Counter />} />
                </Routes>
            </Layout>
        </div>
    );
}

export default AdminRouter;