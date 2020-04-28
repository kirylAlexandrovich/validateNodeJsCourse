const getSuccessfulValidateTemplate = (data) => {
    return `
        <div>Full name: ${data.firstName} ${data.lastName}</div>
        <div>Email: ${data.email}</div>
        <div>Phone: ${data.phoneNumber}</div>
        <div>Password: ***${data.password}***</div>
    `;
};

module.exports = getSuccessfulValidateTemplate;
