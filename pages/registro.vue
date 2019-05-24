<template>
  <b-form @submit.prevent="registro">
    <div class="row mt-3">
      <div class="col-xs-6 col-sm-5 col-md-6">
        <h4>REGISTRO DE USUARIO</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <b-form-group label="Nombre" label-for="nombre">
          <b-form-input
            id="nombre"
            type="text"
            aria-required
            v-model="form.name"
            placeholder="Ingrese el nombre de Usuario"
          />
        </b-form-group>

        <b-form-group label="Email" label-for="email">
          <b-form-input
            id="Email"
            type="text"
            required
            v-model="form.email"
            placeholder="Ingrese el Email"
          />
        </b-form-group>

        <b-form-group label="Contraceña" label-for="password">
          <b-form-input
            id="Password"
            type="password"
            required
            v-model="form.password"
            placeholder="Ingrese la comtraseña"
          />
        </b-form-group>
      </div>
    </div>
    <div class="row">
      <div class="col-sx-12 offset-sm-5">
        <b-spinner variant="primary" v-if="guardando"></b-spinner>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 offset-sm-5">
        <b-button-toolbar>
          <b-button-group right class="mx-12">
            <b-button varuiant="primary" type="submit" :disabled="guardando">Guardar</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div>
    </div>
  </b-form>
</template>
<script>
import { auth } from "../services/firebase";

export default {
  data() {
    return {
      form: {}
    };
  },
  methods: {
    registro() {
      auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(res => {
          console.log(form.name);
          res.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(resUpdate => {
              this.$router.push({
                path: "/"
              });
            });
        })
        .catch(error => {
          alert("Pailas perro error  -- " + error.message);
        });
    }
  }
};
</script>

