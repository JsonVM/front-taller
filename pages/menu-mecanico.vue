<template>
  <div class="container2">
    <div class="c">
      <h1 class="title">
        Mecánico
      </h1>
      <div class="links">
        <b-button href="registro-motos" type="submit" variant="danger">Registrar motos</b-button>
        <b-button href="mantenimientos-mecanico" type="submit" variant="danger">Ver mantenimientos</b-button>
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
