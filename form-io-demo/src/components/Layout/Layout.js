import React, { useState } from 'react';
import { FormBuilder } from 'react-formio';
import { Form } from 'react-formio';

const Layout = () => {
    const type = 'form';

    const [schema, setSchema] = useState();

    const saveForm = (form) => {
        console.log(form);
        setSchema(form);
    }

    return (
        <>
            <FormBuilder form={{ display: type }} onChange={(form) => saveForm(form)} />
            {/* Form Renderer
            <Form src={schema} onSubmit={console.log} /> */}
        </>
    );
}

export default Layout;