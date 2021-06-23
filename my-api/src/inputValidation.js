"use strict";
var validator = require("email-validator");
var passwordValidator = require('password-validator');

//Module that contains multiple call back function semantically organized
// called by a routes defined in router.js

// Validates the body of the contact form request. In the event the body of the request 
// is missing any of the following properties, or these fields have incorrect
// values: name, email, phoneNumber, content, it should be treated as a 
// Bad Request
const validateBody = (req, res, next) => {
    const obj = req.body
    const contact = obj
    const requiredProperties = ["name","email", "phoneNumber", "content"]
    let found = true
    let missingProperties = []
    requiredProperties.forEach(property => {
        if (!contact.hasOwnProperty(property)) {
            found = false
            missingProperties.push(property)
        }
    })
    if (!found) {
        return res.status(400).json({message: "validation error", invalid: `${missingProperties}`})
    }
    next()
}

// Validates the body of User registration. In the event any of the properties
// are missing, or the wrong values are provided, alongside the appropriate 
// status code (Bad Request)
const validateUser = (req, res, next) => {
    const obj = req.body
    const user = obj
    const requiredProperties = ["userfullname","userpassword", "useremail"]
    let found = true
    let missingProperties = []
    requiredProperties.forEach(property => {
        if (!user.hasOwnProperty(property)) {
            found = false
            missingProperties.push(property)
        }
    })
    if (!found) {
        return res.status(400).json({message: "validation error", invalid: `${missingProperties}`})
    }
    next()
}

// NPM function to check validity of email
const checkValidemail = (req, res, next) => {
    if (!validator.validate(req.body.useremail))
    {   
       return res.status(400).json({message: "Enter a valid email address"})
    }  
    next()
}

// NPM function to check password length
const checkPasswordlength = (req, res, next) => {
    var schema = new passwordValidator();
    schema
    .is().min(8)

    if (!schema.validate(req.body.userpassword))
    {
       return res.status(400).json({message: "Password must be minimum 8 characters"})
    }  
    next()
}

export { validateBody, validateUser, checkValidemail, checkPasswordlength };