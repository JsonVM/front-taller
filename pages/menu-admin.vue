<template>
  <div class="container">
    <div class = "c">
      <h1 class="title">
        Administrador
      </h1>
      <div class="links">
        <b-button href="registro-motos" type="submit" variant="danger">Registrar motos</b-button>
        <b-button href="usuarios" type="submit" variant="danger">Control usuarios</b-button>
        <b-button href="asignaciones-admin" type="submit" variant="danger">Asignar mantenimiento</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style src="../css/general.css" />