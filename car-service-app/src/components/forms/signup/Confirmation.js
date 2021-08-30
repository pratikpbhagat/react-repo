import React from 'react';

const Confirmation = (props) => {

    return (
        <>
            <ul>
                <li>Username : {props.values.username}</li>
                <li>Email : {props.values.email}</li>
                <li>First Name : {props.values.firstName}</li>
                <li>Last Name : {props.values.lastName}</li>
                <li>Country : {props.values.country}</li>
            </ul>
        </>
    );
}

export default Confirmation;