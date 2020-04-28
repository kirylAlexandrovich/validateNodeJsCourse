const getPageTamplate = require('./page.template');

const getValidStyle = (valid) => {
    return valid ? '' : 'style="color: #ff0000"';
}

const getFieldValue = (field) => {
    return (field && field.value) || '';
}

const getFieldLabel = (field, label, errorLabel) => {
    if(field && !field.valid) {
        return errorLabel;
    }

    return label;
}

const getFormTemplate = (formData = {}) => {
    const { firstName, lastName, email, phoneNumber, password } = formData;

    return `
        <form method="post" action="/validate" style="width: 175px; margin: auto">
        <div>
            <label for="firstName" ${firstName && getValidStyle(firstName.valid)}>
               ${getFieldLabel(firstName, 'Name:', 'Name must be longer than 3 symbols')}
            </label>
            <input type="text" id="firstName" name="firstName" value="${getFieldValue(firstName)}">
        </div>
        
        <div>
            <label for="lastName" ${lastName && getValidStyle(lastName.valid)}>
                ${getFieldLabel(lastName, 'Last name:', 'Last name must be longer than 3 symbols')}
            </label>
            <input type="text" id="lastName" name="lastName" value="${getFieldValue(lastName)}">
        </div>
        
        <div>
            <label for="email" ${email && getValidStyle(email.valid)}>
                ${getFieldLabel(email, 'Email:', 'Email must be valid')}
            </label>
            <input type="email" id="email" name="email" value="${getFieldValue(email)}">
        </div>
        
        <div>
            <label for="phoneNumber" ${phoneNumber && getValidStyle(phoneNumber.valid)}>
                ${getFieldLabel(phoneNumber, 'Phone number:', 'Phone number must be longer than 5 symbols')}
            </label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value="${getFieldValue(phoneNumber)}">
        </div>
        
        <div>
            <label for="password" ${password && getValidStyle(password.valid)}>
                ${getFieldLabel(password, 'Password:', 'Repeat password doesn\'t equal password')}
            </label>
            <input type="password" id="password" name="password" value="${getFieldValue(password)}">
        </div>
        
        <div>
            <label for="repeatPassword">Repeat password:</label>
            <input type="password" id="repeatPassword" name="repeatPassword">
        </div>
        
        <input type="submit" value="Submit" style="margin: 10px 57px">
    </form>
`};

const getFormPage = (formData) => {
    return getPageTamplate(getFormTemplate(formData));
};

module.exports = getFormPage;
