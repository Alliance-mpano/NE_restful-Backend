
const employeeService = require('../services/employee.service');
const validateRequest = require('_middleware/validate-request');
const Joi = require("joi")

function createSchema(req, res, next) {
    const schema = Joi.object({
        id: Joi.string().min(1).max(50).required(),
        firstName: Joi.string().min(5).max(50).required(),
        lastName: Joi.string().min(3).max(110).required(),
        NID: Joi.string().required(),
        phone: Joi.string().required(),
        email: Joi.string().email().required(),
        department: Joi.string().required(),
        position: Joi.string().min(1).required(),
        manufacturer: Joi.string().min(1).required(),
        model: Joi.string().min(1).required(),
        serialNumber: Joi.string().min(1).required(),
    });
    validateRequest(req, next, schema);
}
function addEmployee(req, res, next) {
    employeeService.create(req.body)
        .then((employee) => {
            console.log(employee)
            res.json({ message: 'Registration successful', employee: employee })
        })
        .catch(next);
}

function getAll(req,res,next){
    employeeService.getAll().then(employees=>{
        res.json(employees);
    })
}
module.exports = {createSchema, addEmployee,getAll}

