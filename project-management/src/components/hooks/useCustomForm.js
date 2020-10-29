import { useState, useEffect, useRef } from 'react';

const useCustomForm = ({ initialValues, onSubmit }) => {

    const [values, setValues] = useState(initialValues || {});
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    // const [onSubmitting, setOnSubmitting] = useState(false);
    // const [onBlur, setOnBlur] = useState(false);

    const formRendered = useRef(true);

    useEffect(() => {
        if (!formRendered.current) {
            setValues(initialValues);
            setErrors({});
            setTouched({});
            // setOnSubmitting(false);
            // setOnBlur(false);
        }
        formRendered.current = false;
        // eslint-disable-next-line
    }, []);

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors({ ...errors });
        onSubmit({ values, errors });
    };

    return {
        values,
        errors,
        touched,
        handleChange,
        handleSubmit
    };
}

export default useCustomForm;