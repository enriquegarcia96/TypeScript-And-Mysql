import { Sequelize } from 'sequelize';

const db = new Sequelize('node', 'root', 'tucontraseña', { // node => se llama mi base de datos
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
})


export default db;