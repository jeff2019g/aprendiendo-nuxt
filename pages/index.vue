<template>
  <div>
 
    <h1>Hola {{ msg }}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar" class="btn btn-primary">Guardar</button>
    <b-button variant="primary">Guardar</b-button>
    <table>
      <tr>
        <th>Nombre</th>
      </tr>
      <tr v-for="(mun, index) in municipios" :key="index">
        <td>{{ mun }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import navbar from '../components/navbar'
//import contacto from './'


export default {
  components: { navbar},
  data() {
    return {
      msg: "Jeff Grijalba",
      municipios: ["mocoa", "valle del guamuez", "pto asis"]
    };
  },
  methods: {
      guardar(){
          this.municipios.push(this.msg)
          this.msg = ''
      }
  }
};
</script>

<style>
</style>
