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
})

//encender servidor
let puerto=3000;    //estableer un puerto
app.listen(puerto,function(){
    console.log("Servidor escuchando puerto "+puerto);
})
