import React, { useState } from 'react';
import FormIOBuilder from '../FormIO/FormIOBuilder';

const MainBody = () => {
    const [formType, setFormType] = useState('form');
    const [schema, setSchema] = useState();

    const changeFormType = (e) => {
        setFormType(e.target.value);
    }

    const saveFormIO = (e) => {
        e.preventDefault();
        console.log(schema);
    }

    return (
        <>
            <select onChange={e => changeFormType(e)} value={formType}>
                <option value="form">Form</option>
                <option value="wizard">Wizard</option>
            </select>
            <form onSubmit={e => saveFormIO(e)}>
                <button>Save Form</button>
            </form>
            <FormIOBuilder type={formType} onFormChange={form => setSchema(form)} />
        </>
    );
}

export default MainBody;