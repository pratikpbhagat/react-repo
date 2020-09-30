import React, { Component } from 'react';
import Input from '../ui/Input/Input';

class CarRentals extends Component {
    state = {
        carRentalsForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name',
                    label: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street',
                    label: 'Street'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code',
                    label: 'Zip Code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country',
                    label: 'Country'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail',
                    label: 'Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            }
            ,
            selectedCar: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ],
                    label: 'Select Car'
                },
                value: '',
                validation: {},
                valid: true
            }
        }
    }
    render() {
        const formElementsArray = [];
        for (let key in this.state.carRentalsForm) {
            formElementsArray.push({
                id: key,
                config: this.state.carRentalsForm[key]
            });
        }
        let carRentalsForm = (
            <form>
                {formElementsArray.map((formElement) => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig} />
                ))}
            </form>
        );
        return (
            <div>
                {carRentalsForm}
            </div>
        )
    };
}

export default CarRentals;