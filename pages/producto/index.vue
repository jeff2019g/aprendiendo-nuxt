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
        <b-table
          responsive
          striped
          hover
          :fields="fields"
          :items="productos"
          id="productos"
          :current-page="currentPage"
          :per-page="perPage"
        >
          <template slot="acciones" slot-scope="data">
            <b-button variant="success">Editar</b-button>
            <b-button variant="danger" @click="eliminarProducto(data.item.id)">Eliminar</b-button>
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="productos"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../services/firebase";
export default {
  asyncData() {
    return db
      .collection("productos")
      .get()
      .then(productosSnap => {
        let productos = [];

        productosSnap.forEach(value => {
          productos.push({
            id: value.id,
            ...value.data()
          });
        });
        return {
          productos,
          currentPage: 1,
          perPage: 5
        };
      });
  },
  data() {
    return {
      fields: ["imagen", "nombre", "precio", "cantidad", "acciones"]
    };
  },
  computed: {
    rows() {
      return this.productos.length;
    }
  },
  methods: {
    eliminarProducto(id) {
      db.collection("productos")
        .doc(id)
        .delete()
        .then(() => {
          let index;
          this.productos.map((value, key) => {
            if (value.id == id) index = key;
          });
          this.productos.splice(index, 1);
        });
    }
  }
};
</script>

