import React from 'react';
import Header from './Header/Header';
import Content from '../../containers/Content/Content';
import Footer from './Footer/Footer';

const layout = (props) => (
    <div>
        <Header />
        <Content />
        <Footer />
    </div>
);

export default layout;