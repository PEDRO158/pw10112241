<template>
    <div class="container mt-5"></div>
        <div class="card">
            <div class="card-header">
                <h4>Agregar Clientes</h4>
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
            </div>
        </div>
</template>
<script>
export default{
    name: "ClientesView",
    data(){
        return{
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
    }
}
</script>