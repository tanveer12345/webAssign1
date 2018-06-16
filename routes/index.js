/*
File name: index.js
Author's name: Tanveer
Website name: azuresite.com
File Description: This file is to get pages. 

*/
var express = require('express');
var router = express.Router();
const indexController = require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.homePage);

router.get('/about', indexController.about);
router.get('/projects', indexController.projects);
router.get('/services', indexController.services);
router.get('/contact', indexController.contact);
module.exports = router;
