const express = require('express');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');

// const db = require('../data/db-config');
const Users = require('./users-model');
const restricted = require('./users-middleware/restricted');

const router = express.Router();

router.use(helmet());
router.use(express.json());


router.get('/', restricted, (req, res) => {
    console.log('Username from users-router ', req.session.username)
    Users.find()
        .then(users => res.json(users))
        .catch(err => res.send(err))
})

// function protected (req, res, next) {
//     const { username, password } = req.headers;

//     if (username && password) {
//         Users.findBy({ username })
//             .first()
//             .then(user => {
//                 if (user && bcrypt.compareSync(password, user.password)) {
//                     next();
//                 } else {
//                     res.status(401).json({ message: 'Invalid Credentials' })
//                 }
//             })
//             .catch(err => res.status(500).json(err))
//     } else {
//         res.status(400).json({ message: 'Please provide valid credentials' })
//     }
// };

module.exports = router;