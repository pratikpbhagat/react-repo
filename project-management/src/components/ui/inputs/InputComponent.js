import React from 'react';
import Aux from 'react-aux';

const InputComponent = (props) => {
    let inputComponent = null;

    switch (props.elementType) {
        case ('input'):
            inputComponent = <input {...props.elementConfig}
                value={props.elementValue} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputComponent = <textarea {...props.elementConfig} value={props.elementValue} />;
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

export default InputComponent;