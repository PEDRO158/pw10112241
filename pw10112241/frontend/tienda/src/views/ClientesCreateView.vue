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
                <Form :validation-schema="validationSchema" @submit="onTodoBien">
                    <div class="mt-3">
                        Id
                        <Field name="id" id="id" type="text" class="form-control" v-model="model.cliente.id" />
                        <ErrorMessage name="id" />
                    </div>
                    <div class="mt-3">
                        Nombre
                        <Field name="nombre" id="nombre" type="text" class="form-control" v-model="model.cliente.nombre" />
                        <ErrorMessage name="nombre" />
                    </div>
                    <div class="mt-3">
                        Apellido
                        <Field name="apellido" id="apellido"  type="text" class="form-control" v-model="model.cliente.apellido" />
                        <ErrorMessage name="apellido" />
                    </div>
                    <div class="mt-3">
                        Direccion
                        <Field name="direccion" id="direccion"  type="text" class="form-control" v-model="model.cliente.direccion" />
                        <ErrorMessage name="direccion" />
                    </div>
                    <div class="mt-3">
                        Telefono
                        <Field name="telefono" id="telefono"  type="text" class="form-control" v-model="model.cliente.telefono" />
                        <ErrorMessage name="telefono" />
                    </div>
                    <div class="mt-3">
                        RFC
                        <Field name="rfc" id="rfc"  type="text" class="form-control" v-model="model.cliente.rfc" />
                        <ErrorMessage name="rfc" />
                    </div>
                    <div class="mt-3">
                        CURP
                        <Field name="curp" id="curp"  type="text" class="form-control" v-model="model.cliente.curp" />
                        <ErrorMessage name="curp" />
                    </div>
                    <div class="mt-3">
                        CP
                        <Field name="cp" id="cp"  type="text" class="form-control" v-model="model.cliente.cp" />
                        <ErrorMessage name="cp" />
                    </div>
                    <div class="mt-3">
                        <button type="submit" class="btn btn-primary" @click="guardarCliente()">Guardar</button>
                    </div>
                </Form>
            </div>
        </div>
</template>
<script>
import axios from 'axios';
import { Field,Form,ErrorMessage } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/zod';
import * as zod from 'zod';
export default{
    name: "ClientesView",
    components: {Field,Form,ErrorMessage },
    data(){
        const validationSchema= toTypedSchema(
            zod.object({
                id:zod.string({message: "Requerido" }).min(1),
                nombre:zod.string({message: "Requerido" }).min(1),
                apellido:zod.string({message: "Requerido" }).min(1),
                direccion:zod.string({message: "Requerido" }).min(1),
                telefono:zod.string({message: "Requerido" }).min(1).max(10),
                rfc:zod.string({message: "Requerido" }).min(1),
                curp:zod.string({message: "Requerido" }).min(1),
                cp:zod.string({message: "Requerido" }).min(1),
            })
        )
        return{
            validationSchema,
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
        onTodoBien(){
            alert('Todo bien')
        },
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