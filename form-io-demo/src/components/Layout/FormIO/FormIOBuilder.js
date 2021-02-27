import React, { useState } from 'react';
import { FormBuilder } from 'react-formio';
import { Form } from 'react-formio';

const FormIOBuilder = (props) => {
    const type = props.type;

    const [schema, setSchema] = useState();

    const saveForm = (form) => {
        setSchema(form);
    }

    return (
        <>
            <FormBuilder form={{ display: type }}
                onChange={(form) => props.onFormChange(form)} />
            {/* Form Renderer
            <Form src={schema} onSubmit={console.log} /> */}
        </>
    );
}

export default FormIOBuilder;