const estudiante = require('../models/users');

const username = process.env.USERNAME;
const db = process.env.DB;
const pass = process.env.PASS;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('6itNpyBZPN', '6itNpyBZPN', 'kaKvV7uvDr', {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

const estu = estudiante(sequelize, Sequelize);

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas Sincronizadas');
    })

module.exports = {
    estu
}