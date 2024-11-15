const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require("path");
const pageRutes = require("./routes/pages");

/* Instanciar */
const app = express();

/* Puerto */
const port = 3008;

app.use('/', pageRutes);
app.use(express.static('estilos'))

app.use(bodyParser.urlencoded({extended: false})); /* analizar los datos del cuerpo de las solicitudes HTTP,
    especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET*/

app.set('view engine', 'ejs'); // Es un motor de plantillas //Permite generar cambios en HTML de manera dinámica

const db = mysql.createConnection({
    host: 'localhost',
    user: 'progweb2_rmu',
    password: '123456',
    database: 'node_crud_rmu',
    port: '3306'
});


// conexion db
db.connect(err => {
    if(err){
        console.log(`Error al momento de hacer conexion con la BD`);
    } else{
        console.log(`Conexion Realizada con Exito`);
    }

});

//server inicio
app.listen(port,()=>{
    console.log(`El server esta en escucha desde http://localhost:${port}`);
});

//Mostrar lista de usuarios

app.get('/', (req, res) => {
    //Consulta a la base de datos
    const query = 'select * from users';
    //Trabajar con la conexion
    db.query(query, (err, results) => {
        if(err){
            //Mensaje de Error para el usuario
            console.error(`Error al recupear los datos. Codigo de error: ${err}`)
            res.send('Error al recuperar los datos');
        } else{
            res.render('index',{users: results});
        }
    });
});

// Agregar Usuario

app.post('/add', (req, res) => {

    const {name, email} = req.body;
    const query = 'insert into users (name, email) value (?,?)';
    db.query(query,[name, email], (err) => {
        if(err){
            console.error(`Error al insertar datos en la tabla de usuarios. Codigo de error: ${err}`);
            res.send(`Error al insertar datos en la tabla de usuarios.`)
        } else{
            res.redirect('/');
        }
    });
});

//Editar Usuarios

app.get('/edit/:id', (req, res) => {

    const {id} = req.params;
    const query = 'select * from users where id = ?';
    db.query(query, [id], (err,results) => {

        if(err){
            console.error('Error e la BD');
            res.send("Error en la BD")
        } else{

            res.render('edit', {users:results[0]});
        }
    });
});

app.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const query = 'update users set name = ?, email = ? WHERE id = ?';
    db.query(query, [name, email, id], (err,results) => {

        if(err){
            console.error('Error e la BD');
            res.send("Error en la BD")
        } else{

            res.redirect('/');
        }
    });
});

//Eliminar Usuario

app.get('/delete/:id', (req, res) => {

    const {id} = req.params;
    const query = 'delete from users where id = ?';
    db.query(query,[id], (err) => {

        if(err){
            console.error('Error al Eliminar');
            res.send("Error al Eliminar");
        } else {
            res.redirect('/');
        }

    });
});
