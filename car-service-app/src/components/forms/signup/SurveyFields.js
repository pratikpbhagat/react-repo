import React from 'react';
import InputComponent from '../../ui/input/InputComponent';

const SurveyFields = (props) => {

    return (
        <>
            <div>
                <InputComponent
                    label="First Name"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={props.values.firstName}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
                <InputComponent
                    label="Last Name"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={props.values.lastName}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
                <InputComponent
                    label="Country"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={props.values.country}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
            </div>
        </>
    );
}

export default SurveyFields;