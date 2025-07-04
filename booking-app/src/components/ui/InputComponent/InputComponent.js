import React from 'react';
import Aux from 'react-aux';

const inputComponent = (props) => {

    let inputComponent = null;

    switch (props.elementType) {
        case ('input'):
            inputComponent = <input {...props.elementConfig} />;
            break;
        case ('textarea'):
            inputComponent = <textarea {...props.elementConfig} />;
            break;
        case ('multi-choice'):
            inputComponent = (
                <Aux>
                    {
                        props.elementConfig.options.map(option => (
                            <div key={option.value}>
                                <input {...props.elementConfig} />
                                <label>{option.displayValue}</label>
                            </div>
                        ))
                    }
                </Aux>
            );
            break;
        case ('select'):
            inputComponent = (
                <select>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputComponent = <input />;
    }
    return (
        <div>
            <label>{props.elementConfig.label}</label>
            {inputComponent}
        </div>
    );
}

export default inputComponent;