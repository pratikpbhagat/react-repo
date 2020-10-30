import React from 'react';
import Aux from 'react-aux';
import styles from './InputComponent.module.css';

const InputComponent = (props) => {
    let inputComponent = null;

    switch (props.elementType) {
        case ('input'):
            inputComponent = <input {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('textarea'):
            inputComponent = <textarea {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ('multi-choice'):
            inputComponent = (
                <Aux>
                    {
                        props.elementConfig.options.map(option => (
                            <label key={option.value}>
                                <input {...props.elementConfig}
                                    onChange={props.changed}
                                    value={option.value} checked />
                                {option.displayValue}
                            </label>
                        ))
                    }
                </Aux>
            );
            break;
        case ('select'):
            inputComponent = (
                <select value={props.value} onChange={props.changed} >
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
        <div className={styles.InputComponent}>
            <label>{props.elementConfig.label}</label>
            {inputComponent}
        </div>
    );
}

export default InputComponent;