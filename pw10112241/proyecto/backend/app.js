let express=require('express');
let mysql=require('mysql');
let cors=require('cors');

let app=express();
app.use(express.json()); //para marder mensaje tipo json
app.use(cors());//aceptar solicitudes de un servidor externo

//rutas de acceso
app.get("/",function(req,res) {
    res.send("Ruta de inicio");
});

//encender servidor
let puerto=3000;    //estableer un puerto
app.listen(puerto,function(){
    console.log("Servidor escuchando puerto "+puerto);
})
