const { Router } = require('express');

const getFormPage = require('./templates/form.template');
const getSuccessfulValidatePage = require('./templates/successfulValidate.template');
const { validateForm, isFormValid } = require('./validator');

const router = Router();

router.route('/').get((req, res) => {
    res.send(getFormPage());
});

router.use('/validate', (req, res, next) => {
    const form = validateForm(req.body);
    if (isFormValid(form)) {
        next();
    } else {
        res.send(getFormPage(form));
    }
});

router.route('/validate').post((req, res) => {
    res.send(getSuccessfulValidatePage(req.body));
});

module.exports = router;
