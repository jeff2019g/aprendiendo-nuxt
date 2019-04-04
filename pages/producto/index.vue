<template>
  <div class="row mt-3">
    <div class="col-sm-6">
      <h2>Listado de Productos</h2>
    </div>

    <div class="col-sm-6">
      <b-button variant="primary" href="/producto/crear">Nuevo</b-button>
    </div>

    <div class="rown mt-2">
      <div class="col-sm-12">
        <b-table responsive striped hover :fields="fields" :items="productos"/>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
   return db.collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];

        productosSnap.forEach(value => {
            productos.push(value.data())
        })
        return{
            productos
        }
      })
  },
  data() {
    return {
      fields: ["imagen", "nombre", "precio", "cantidad", "acciones"]
    };
  }
};
</script>

