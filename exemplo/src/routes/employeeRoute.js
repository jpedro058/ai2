
const express = require('express');

const router = express.Router();
//importer os controladores [2]

const employeeController = require('../controllers/employeeController') router.get('/test',employeeController.test);
router.get('/save', (req, res) => { res.json({status: 'Employeed Saved'});
});
module.exports = router;