export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const getMultiSelectValues = (formData, inputIdentifier, inputElementValue) => {
    let selectedValues = formData[inputIdentifier];
    if (selectedValues === '') {
        selectedValues = [];
    }
    console.log(selectedValues.includes(inputElementValue));
    if (selectedValues.includes(inputElementValue)) {
        console.log('Remove ' + inputElementValue);
        const updatedValues = selectedValues.filter(item => item !== inputElementValue);
        inputElementValue = updatedValues;
    } else {
        selectedValues.push(inputElementValue);
        inputElementValue = selectedValues;
    }
    return inputElementValue;
};