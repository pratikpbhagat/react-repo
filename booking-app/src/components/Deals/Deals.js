import React, { Component } from 'react';
import InputComponent from '../ui/InputComponent/InputComponent';

class Deals extends Component {

    state = {
        dealsForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    placeholder: 'Name',
                    label: 'Name'
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