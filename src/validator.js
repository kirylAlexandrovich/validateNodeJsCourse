const checkEmailAddressRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checkStringLength(str, length) {
    return str.length >= length;
};

const validateForm = (form) => {
    const validatedForm = {};

    Object.keys(form).forEach((el) => {
        switch (el) {
            case 'firstName':
            case 'lastName':
                validatedForm[el] = {
                    value: form[el],
                    valid: checkStringLength(form[el], 3),
                };
                break;
            case 'email':
                validatedForm[el] = {
                    value: form[el],
                    valid: form[el].search(checkEmailAddressRegEx) !== -1,
                };
                break;
            case 'phoneNumber':
                validatedForm[el] = {
                    value: form[el],
                    valid: form[el].search(/\+*[0-9]{5,}/) !== -1,
                };
                break;
            case 'password':
                validatedForm[el] = {
                    value: form[el],
                    valid: checkStringLength(form[el], 1) && form[el] === form['repeatPassword'],
                };
                break;
        }
    });

    return validatedForm;
};

function isFormValid(form) {
    return Object.values(form).every(({ valid }) => valid);
}

module.exports = {
    validateForm,
    isFormValid,
};
