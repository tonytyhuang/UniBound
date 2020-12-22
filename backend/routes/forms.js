const router = require('express').Router();
let Form = require('../models/form.model');

router.route('/').get((req, res) => {
    Form.find()
        .then(forms => res.json(forms))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const university = req.body.university;
    const program = req.body.program;
    const facebook = req.body.facebook;
    const instagram = req.body.instagram;
    const weChat = req.body.weChat;
    const other = req.body.other;
    const message = req.body.message;

    const newForm = new Form({
        name,
        email,
        university,
        program,
        facebook,
        instagram,
        weChat,
        other,
        message,
    });

    newForm.save()
    .then(() => res.json('Form added!')
    .catch(err => res.status(400).json('Error: ' + err)))
});

module.exports = router;