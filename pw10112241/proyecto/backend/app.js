let express=require('express');
let mysql=require('mysql');
let cors=require('cors');

let app=express();
app.use(express.json()); //para marder mensaje tipo json
app.use(cors());//aceptar solicitudes de un servidor externo

//conexion a MySQL
let conexion=mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'pwdata',
    port: '3306'
});
//nos conectamos a mysql
conexion.connect(function(error){
    if (error) {
        throw error;
    }else{
        console.log('Conectado a la base de datos');
    }
});

//rutas de acceso
app.get("/",function(req,res) {
    res.send("Ruta de inicio");
});
//seleccionamos todos los clientes
app.get('/api/clientes',(req,res)=>{
    conexion.query('SELECT * FROM clientes',(error,filas)=>{
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    })
});
//seleccionamos un cliente en especifico
app.get('/api/clientes/:id',(req,res)=>{
    conexion.query('SELECT * FROM clientes WHERE id=?',[req.params.id],(error,fila)=>{
        if (error) {
            throw error;
        } else {
            res.send(fila);
        }
    })
});

//elimnar
app.delete('/api/clientes/:id',(req,res)=>{
    let id= req.params.id;
    conexion.query('DELETE FROM clientes WHERE id=?',[id],(error,filas)=>{
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    })
});
//INSERTAR
app.post('/api/clientes',(req,res)=>{
    let data={
        id:req.body.id,
        nombre:req.body.nombre,
        apellido:req.body.apellido,
        direccion:req.body.direccion,
        telefono:req.body.telefono,
        rfc:req.body.rfc,
        curp:req.body.curp,
        cp:req.body.cp,
    }
    let sql="INSERT INTO clientes SET ?";
    conexion.query(sql,data,(error,resultado)=>{
        if (error) {
            throw error;
        } else {
            res.send(resultado);
        }
    })
});

//actualizar
app.put('/api/cliente/:id',(req,res)=>{
    let id= req.params.id;
    let nombre= req.body.nombre;
    let apellido= req.body.apellido;
    let direccion= req.body.direccion;
    let telefono= req.body.telefono;
    let rfc= req.body.rfc;
    let curp= req.body.curp;
    let cp= req.body.cp;
let sql="UPDATE clientes SET nombre=?,apellido,direccion=?,telefono=?,rfc=?,curp=?,cp=? WHERE id=?";
conexion.query(sql,[nombre,apellido,direccion,telefono,rfc,curp,cp,id],(error,results)=>{
    if (error) {
        throw error;
    } else {
        res.send(results);
    }
})
});

//encender servidor
let puerto=3000;    //estableer un puerto
app.listen(puerto,function(){
    console.log("Servidor escuchando puerto "+puerto);
})
