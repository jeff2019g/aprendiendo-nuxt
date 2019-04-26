<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <h1>Ingreso de Nueva Categoria</h1>
            </div>
        </div>
        <form name="frmdatos" @submit.prevent="guerdarcategorias">
            <div class="row">
                <div class="col-sm-12">
                    
                    <div class="form-group">
                        <label for="nombre">Nombre de Categoria:</label>
                        <input type="text" class="form-control" required v-model="form.nombre" placeholder="Ingresa el nombre de la categoria" name="nombre" id="nombre">
                    </div>
                    
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>        
    </div>
</template>

<script>

import {db} from '../../services/firebase'

export default {
    data(){
        return{
            form: {
                nombre: ''
            }
        }
    },
    methods: {
        guerdarcategorias(){
            db.collection("categorias").add(this.form).then(res => {
                this.$router.push({
                    path: "/categorias"
                })
            })
        }
    }
}
</script>