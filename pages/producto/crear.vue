<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>Ingreso de Nuevos Productos</h1>
      </div>
    </div>
    <form name="frmdatos" @submit.prevent="guerdarProducto">
      <div class="row">
        <div class="col-sm-12">
          <b-form-group label="imagen" label-for="imagen">
            <b-form-file placeholder="Cargar Imagen" accept="image/*" v-model="imageProduct"/>
          </b-form-group>
          <div class="form-group">
            <label for="nombre">Nombre del Producto:</label>
            <input
              type="text"
              class="form-control"
              required
              v-model="form.nombre"
              placeholder="Ingresa el nombre del producto"
              name="nombre"
              id="nombre"
            >
          </div>
          <div class="form-group">
            <label for="precio">PRECIO:</label>
            <input
              type="number"
              class="form-control"
              required
              v-model="form.precio"
              placeholder="Ingresa Precio"
              name="precio"
              id="precio"
            >
          </div>
          <div class="form-group">
            <label for="cantidad">CANTIDAD:</label>
            <input
              type="number"
              class="form-control"
              required
              v-model="form.cantidad"
              placeholder="Ingresa la Cantidad"
              name="cantidad"
              id="cantidad"
            >
          </div>
          <b-form-group label="Categoria" label-for="categoria">
            <b-form-select id="categoria" v-model="form.categoria" :options="categorias"></b-form-select>
          </b-form-group>
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
import { db, storage } from "../../services/firebase";

export default {
  asyncData(){
    return db.collection('categorias').get().then(categoriasSnap => {
      let categorias =[];
      categoriasSnap.forEach(value => {
        categorias.push(value.data().nombre);
      });
      return{
        categorias
      }
    });
  },
  data() {
    return {
      form: {
        nombre: "",
        cantidad: "",
        precio: ""
      },
      guardando: false,
      imageProduct: ""
    };
  },
  methods: {
    guerdarProducto() {
      this.guardando = true;

      let imageRef = storage.child(this.imageProduct.name);

      imageRef.put(this.imageProduct).then(async imageRes => {
       console.log(imageRes)
        this.form.imagen = await imageRes.ref.getDownloadURL();

        db.collection("productos")
        .add(this.form)
        .then(res => {
            this.$router.push({
              path: "/producto"
            });
          });
      });
    }
  }
};
</script>

