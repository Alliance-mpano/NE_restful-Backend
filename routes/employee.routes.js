const express = require('express')
const {addEmployee,createSchema,getAll } = require('../controllers/employee.controller')
const router = express.Router();
const authorize = require('_middleware/authorize');

/**
 * @swagger
 * /employees/create:
 *   post:
 *     summary: Create Employee
 *     description: Creating a new employee
 *     responses:
 *       '201':
 *         description: Employee Created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Employee'
 */

router.get('/',  getAll)
router.post('/create',  createSchema, addEmployee);

module.exports = router;