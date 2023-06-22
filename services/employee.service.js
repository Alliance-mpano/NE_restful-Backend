

const config = require('config.json');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
module.exports = {
    // authenticate,
    // getAll,
    // getById,
    create,
    getAll
    // update,
    // delete: _delete
};


async function create(params) {
    // validate
    // if (await db.Employee.findOne({ where: { username: params.username } })) {
    //     throw 'Username "' + params.username + '" is already taken';
    // }

    // // hash password
    // if (params.password) {
    //     params.hash = await bcrypt.hash(params.password, 10);
    // }

    // save user
    await db.Employee.create(params);
}
async function getAll() {
    return await db.Employee.findAll();
}