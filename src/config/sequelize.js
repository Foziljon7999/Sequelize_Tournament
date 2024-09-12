const { Sequelize } = require("sequelize")

const sequelize = new Sequelize({
    host: "localhost",
    dialect: "postgres",
    username: "postgres",
    database: "n9",
    port: 5432,
    password: "972517999"
})

module.exports = sequelize