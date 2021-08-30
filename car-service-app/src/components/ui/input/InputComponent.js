import React from 'react';
import { Form } from 'react-bootstrap';

const InputComponent = (props) => {

    return (
        <>
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type={props.type}
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    isInvalid={!!props.errors[props.name]}
                    onChange={(e) => props.onChange(e)} />
                <Form.Control.Feedback type="invalid" >
                    {props.errors[props.name]}
                </Form.Control.Feedback >
            </Form.Group>
        </>
    );
}

export default InputComponent;