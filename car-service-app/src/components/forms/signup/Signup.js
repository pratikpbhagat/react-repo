import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import MultiStepForm from '../multi-step/MultiStepForm';
import AccountFields from './AccountFields';
import Confirmation from './Confirmation';
import Success from './Success';
import SurveyFields from './SurveyFields';

const Signup = () => {

    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    }

    const getFormErrors = () => {
        const errors = {};
        if (!email || email === '') {
            errors.email = 'Please enter valid Email address';
        }
        if (!username || username === '') {
            errors.username = 'Please enter Username';
        }
        if (!password || password === '') {
            errors.password = 'Please enter Password';
        }
        if (!firstName || firstName === '') {
            errors.firstName = 'Please enter First Name';
        }
        if (!lastName || lastName === '') {
            errors.lastName = 'Please enter Last Name';
        }
        if (!country || country === '') {
            errors.country = 'Please select Country';
        }
        return errors;
    }

    const onSubmit = () => {
        const errors = getFormErrors();
        setErrors(errors);
        if (Object.keys(errors).length > 0) {
            return false;
        } else {
            console.log(values);
            return true;
        }
    }

    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        country: ''
    });
    const { email, username, password, firstName, lastName, country } = state;
    const values = { email, username, password, firstName, lastName, country };

    const pages = [
        { step: 1, page: 'Account Details' },
        { step: 2, page: 'Personal Details' },
        { step: 3, page: 'Confirmation', isConfirm: true },
        { step: 4, page: 'Success', isSuccess: true },
        { step: 5, page: 'Success', isSuccess: true }
    ];

    const showForm = () => {
        switch (step) {
            case 1:
                return <AccountFields
                    values={values}
                    errors={errors}
                    onChangeHandler={(e) => onChangeHandler(e)} />;
            case 2:
                return <SurveyFields
                    values={values}
                    errors={errors}
                    onChangeHandler={(e) => onChangeHandler(e)} />;
            case 3:
                return <Confirmation
                    values={values}
                    errors={errors} />;
            case 4:
                return <Success
                    values={values} />
            default:
                return null;
        }
    }

    return (
        <>
            <MultiStepForm
                header="Signup"
                pages={pages}
                initialStep={1}
                totalSteps={3}
                onStepChange={(step) => setStep(step)}
                onSubmit={() => onSubmit()}
                errors={errors}>
                <Form>
                    {showForm()}
                </Form>
            </MultiStepForm>
        </>
    );
}

export default Signup;