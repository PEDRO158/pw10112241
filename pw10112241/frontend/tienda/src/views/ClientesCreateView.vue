<template>
    <div class="container mt-5"></div>
        <div class="card">
            <div class="card-header">
                <h4>Agregar Clientes</h4>
                <div v-if="mensaje==1" class="alert alert-success" role="alert">
                    Datos guardados con exito.
                </div>
            </div>
            <div class="card-body">
                <div class="mt-3">
                    Id
                    <input type="text" class="form-control" v-model="model.cliente.id">
                </div>
                <div class="mt-3">
                    Nombre
                    <input type="text" class="form-control" v-model="model.cliente.nombre">
                </div>
                <div class="mt-3">
                    Apellido
                    <input type="text" class="form-control" v-model="model.cliente.apellido">
                </div>
                <div class="mt-3">
                    Direccion
                    <input type="text" class="form-control" v-model="model.cliente.direccion">
                </div>
                <div class="mt-3">
                    Telefono
                    <input type="text" class="form-control" v-model="model.cliente.telefono">
                </div>
                <div class="mt-3">
                    RFC
                    <input type="text" class="form-control" v-model="model.cliente.rfc">
                </div>
                <div class="mt-3">
                    CURP
                    <input type="text" class="form-control" v-model="model.cliente.curp">
                </div>
                <div class="mt-3">
                    CP
                    <input type="text" class="form-control" v-model="model.cliente.cp">
                </div>
                <div class="mt-3">
                    <button class="btn btn-primary" @click="guardarCliente()"> Guardar</button>
                </div>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
export default{
    name: "ClientesView",
    data(){
        return{
            mensaje:0,
            model: {
                cliente:{
                    id: '',
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    telefono: '',
                    rfc: '',
                    curp: '',
                    cp: ''
                }
            },
        }
    }, methods:{
        guardarCliente(){
            axios.post('http://localhost:3000/api/clientes',this.model.cliente)
            .then(res=>{
                if (res.data.affectedRows== 1) {//si se inserta un registro
                    this.model.cliente={
                        id: '',
                        nombre: '',
                        apellido: '',
                        direccion: '',
                        telefono: '',
                        rfc: '',
                        curp: '',
                        cp: ''
                    }
                    this.mensaje=1;//mensaje de exito
                }
            })
        }
    }
}
</script>