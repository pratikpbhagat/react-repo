import React from 'react';

const input = (props) => {
    let inputElement = null;
    console.log(props.elementConfig);

    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig}
                value={props.value} />;
            break;
        case ('select'):
            inputElement = (
                <select
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input />;
    }

    return (
        <div>
            <label>{props.elementConfig.label}</label>
            {inputElement}
        </div>
    );
};

export default input;