import React, { useEffect, useState } from 'react';
import './MultiStepForm.css';

const MultiStepForm = (props) => {

    const [state, setState] = useState({
        initialStep: props.initialStep,
        step: props.initialStep,
        totalSteps: props.totalSteps,
        errors: {}
    });

    const validatePagesInput = (pages) => {
        const confirmStep = pages.find(page => page.isConfirm);
        console.log('confirmStep', confirmStep);
        if (confirmStep && confirmStep.length > 1) {
            return false;
        }

        const successStep = pages.find(page => page.isSuccess);
        console.log('successStep', successStep);
        if (successStep && successStep.length > 1) {
            return false;
        }
        return true;
    }

    useEffect(() => {
        props.onStepChange(state.step);
    }, [state.step, props]);

    const prevStep = () => {
        setState({ ...state, step: state.step - 1 });
    }

    const nextStep = () => {
        setState({ ...state, step: state.step + 1 });
    }

    const onSubmit = () => {
        const response = props.onSubmit();
        if (response) {
            nextStep();
        }
    }

    return (
        <>
            <div className="multi-step-form">
                <h3>{props.header}</h3>
                <h4>Step {state.step}</h4>
                {validatePagesInput(props.pages) ? props.children : 'Validation of input for multi-step form failed'}
                <div>
                    <ul>
                        <li>
                            <button
                                disabled={state.step === 1}
                                onClick={() => prevStep()}>
                                Previous
                            </button>
                        </li>
                        <li>
                            <button>
                                Cancel
                            </button>
                        </li>
                        <li>
                            <button
                                disabled={state.step === state.totalSteps}
                                onClick={() => nextStep()}>
                                Next
                            </button>
                        </li>
                        <li>
                            <button type="submit" disabled={state.step !== state.totalSteps}
                                onClick={() => onSubmit()}>
                                Submit
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default MultiStepForm;