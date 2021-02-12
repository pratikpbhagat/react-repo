import React from 'react';
import { FormBuilder } from 'react-formio';

const Layout = () => {
    const type = 'form';
    return (
        <FormBuilder form={{ display: type }} onChange={(schema) => console.log(schema)} />
    );
}

export default Layout;