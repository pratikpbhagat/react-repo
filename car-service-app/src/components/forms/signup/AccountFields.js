import React from 'react';
import InputComponent from '../../ui/input/InputComponent';

const AccountFields = (props) => {

    return (
        <>
            <div>
                <InputComponent
                    label="Username"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={props.values.username}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
                <InputComponent
                    label="Email"
                    type="Email"
                    name="email"
                    placeholder="Email"
                    value={props.values.email}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
                <InputComponent
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={props.values.password}
                    errors={props.errors}
                    onChange={(e) => props.onChangeHandler(e)} />
            </div>
        </>
    );
}

export default AccountFields;