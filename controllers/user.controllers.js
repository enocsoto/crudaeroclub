const { estu } = require('../db/db')

const userGet = async (req, res) => {
    try {
        const allStudent = await estu.findAll();
        res.json({
            msg: 'Lista de Estudiantes',
            allStudent
        });
    } catch (error) {
        console.log(error);
    }
}
const userPost = async (req, res) => {
    try {
        const postEstudent = await estu.create(req.body);
        // const obtenerdatos = () => {
        //     const inombre = document.getElementById('inombre').value;
        //     const iapellido = document.getElementById('iapellido').value;
        //     const icorreo = document.getElementById('icorreo').value;
        //     const icelular = document.getElementById('icelular').value;
        // }
        estu.query('INSERT INTO estudiantes set ?', [obtenerdatos]);
        res.json({
            msg: 'Usuario Creado',
            postEstudent
        });
    } catch (error) {
        console.log('No se realizó el envio de la información del estudiante');
    }
}
const userPut = async (req, res) => {
    try {
        await estu.update(req.body, {
            where: { id: req.params.id }
        });
        res.json({
            msg: `Estudiante con id ${req.params.id} se ha modificado`
        });
    } catch (error) {
        console.log('No se realizó la actualizacion del Estudiante');
    }
}
const usersGet = async (req, res) => {
    try {
        const estudent = await estu.findOne({
            where: { id: req.params.id }
        });
        res.json(estudent);
    } catch (error) {
        console.log(error);
    }
}

const userDelete = async (req, res) => {
    try {
        await estu.destroy({
            where: { id: req.params.id }
        })
        res.json({
            msg: `El Estudiante con id ${req.params.id} ha sido Eliminado`
        });
    } catch (error) {
        console.log(`No se ha eliminado el Estudiante con iD ${req.params.id}`);
    }
}

module.exports = {
    userGet,
    userPost,
    userPut,
    usersGet,
    userDelete
}