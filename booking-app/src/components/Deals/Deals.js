import React, { Component } from 'react';
import InputComponent from '../ui/InputComponent/InputComponent';

class Deals extends Component {

    state = {
        dealsForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Name',
                    label: 'Name'
                }
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password',
                    label: 'Password'
                }
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
                }
            },
            interests: {
                elementType: 'multi-choice',
                elementConfig: {
                    type: 'checkbox',
                    name: 'gender',
                    options: [
                        { value: 'A', displayValue: 'First Interest' },
                        { value: 'B', displayValue: 'Second Interest' },
                        { value: 'C', displayValue: 'Third Interest' },
                        { value: 'D', displayValue: 'Fourth Interest' },
                        { value: 'E', displayValue: 'Fifth Interest' },
                    ],
                    label: 'Select Interests'
                }
            },
            address: {
                elementType: 'textarea',
                elementConfig: {
                    placeholder: 'Address',
                    label: 'Address'
                }
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
                }
            }
        }
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.dealsForm) {
            formElementsArray.push({
                id: key,
                config: this.state.dealsForm[key]
            });
        }
        let form = (
            <form>
                {formElementsArray.map((formElement) => (
                    <InputComponent
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig} />
                ))}
            </form>
        );
        return (
            <div>
                this is the deals Component
                {form}
            </div>
        );
    }
}

export default Deals;