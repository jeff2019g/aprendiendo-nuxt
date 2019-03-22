<template>
  <div>
    <h1>Hola {{ msg }}</h1>
    <input type="text" v-model="msg">
    <button @click="guardar">Guardar</button>
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
export default {
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
