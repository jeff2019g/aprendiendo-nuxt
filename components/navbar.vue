<template>
  <!--<div>
        <a href="/">Inicio</a>
        <a href="/contacto">Contacto</a>
  </div>-->
  <b-navbar variant="primary" type="dark" toggleable="lg">
    <b-navbar-brand href="/">BootstrapVue</b-navbar-brand>
    <b-navbar-toggle target="menu"></b-navbar-toggle>
    <b-collapse is-nav id="menu">
      <b-navbar-nav>
        <b-nav-item href="/contacto">Contacto</b-nav-item>
        <b-nav-item href="/producto">Productos</b-nav-item>
        <b-nav-item href="/categorias">Categorias</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
      <!-- Using 'button-content' slot -->
      <template slot="button-content">
        <em>User</em>
      </template>
      <b-dropdown-item href="#">Profile</b-dropdown-item>
      <b-dropdown-item href="/registro">Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    

    
  </b-navbar>
</template>

<script>
export default {};
</script>

