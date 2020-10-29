import React, { useState } from 'react';
import { getMultiSelectValues, updateObject } from '../../common/utility/Utility';
import InputComponent from '../../ui/inputs/InputComponent';

const Leaves = () => {

    const [leavesFormData, setLeavesFormData] = useState({
        name: '',
        gender: '',
        interests: [],
        address: '',
        type: ''
    });

    const [leavesForm, setLeavesForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Name',
                label: 'Name'
            },
            value: ''
        },
        gender: {
            elementType: 'multi-choice',
            elementConfig: {
                type: 'radio',
                name: 'gender',
                options: [
                    { value: 'M', displayValue: 'Male' },
                    { value: 'F', displayValue: 'Female' }
                ],
                label: 'Select Gender'
            },
            value: ''
        },
        interests: {
            elementType: 'multi-choice',
            elementConfig: {
                type: 'checkbox',
                name: 'interests',
                options: [
                    { value: 'A', displayValue: 'First Interest' },
                    { value: 'B', displayValue: 'Second Interest' },
                    { value: 'C', displayValue: 'Third Interest' },
                    { value: 'D', displayValue: 'Fourth Interest' },
                    { value: 'E', displayValue: 'Fifth Interest' }
                ],
                label: 'Select Interests'
            },
            value: ''
        },
        address: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Address',
                label: 'Address'
            },
            value: ''
        },
        type: {
            elementType: 'select',
            elementConfig: {
                label: 'Select Type',
                options: [
                    { value: 'A', displayValue: 'First Option' },
                    { value: 'B', displayValue: 'Second Option' },
                    { value: 'C', displayValue: 'Third Option' }
                ]
            },
            value: 'A'
        }
    });

    const formElementsArray = [];
    for (let key in leavesForm) {
        formElementsArray.push({
            id: key,
            config: leavesForm[key]
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in leavesForm) {
            formData[formElementIdentifier] = leavesForm[formElementIdentifier].value;
        }
        console.log(leavesFormData);
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        // handle input change events on screen
        const updatedFormElement = updateObject(leavesForm[inputIdentifier], {
            value: event.target.value
        });

        const updatedleavesForm = updateObject(leavesForm, {
            [inputIdentifier]: updatedFormElement
        });
        setLeavesForm(updatedleavesForm);

        // handle actual form data
        let inputElementValue = event.target.value;

        if (inputIdentifier === 'interests') {
            inputElementValue = getMultiSelectValues(leavesFormData, inputIdentifier, inputElementValue);
        }

        const updatedFormData = updateObject(leavesFormData, {
            [inputIdentifier]: inputElementValue
        })
        setLeavesFormData(updatedFormData);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            {formElementsArray.map((formElement) => (
                <InputComponent
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={event => inputChangedHandler(event, formElement.id)} />
            ))}
            <button type="submit">Submit</button>
        </form>
    );

    return (
        <div>
            <h2>Leaves</h2>
            {form}
        </div>
    );
}

export default Leaves;