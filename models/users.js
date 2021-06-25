module.exports = (sequelize, type) => {

    return sequelize.define('estudiante', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: type.STRING,
        apellido: type.STRING,
        correo: type.STRING,
        celular: type.INTEGER
    })
}