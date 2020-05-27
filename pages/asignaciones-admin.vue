<template>
  <div class="container">
    <div>
      <h1 class="title">
        Realizar asignación de seguimiento
      </h1>

      <b-card
        title="Información del mantenimiento"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="mb-2"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearMantenimiento()">
            <b-form-group id="input-group-2" label="documento del mecánico:" label-for="id_mecanico">
              <b-form-input
                id="id_mecanico"
                v-model="mantenimiento.id_mecanico"
                required
                placeholder="Ingrese el id del mecánico que realizará mantenimiento"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="placa de la moto:" label-for="placa">
              <b-form-input
                id="placa"
                v-model="mantenimiento.placa"
                required
                placeholder="Ingrese la placa del mantenimiento"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="fecha:" label-for="fecha">
              <b-form-input
                id="fecha"
                v-model="mantenimiento.fecha"
                required
                placeholder="fecha actual"
              ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="success" v-if="!enEdicion"
              >Registrar mantenimiento</b-button
            >
            <b-button @click="actualizarmantenimientoBD()" variant="success" v-else
              >Actualizar datos mantenimiento</b-button
            >
          </b-form>

          <b-table responsive hover :items="lista_mantenimientos" :fields="fields" head-variant="dark">
              <template v-slot:cell(acciones)="row">
                  <div>
                      <b-button size="sm" @click="cargarMantenimientoEditar(row)" class="mr-2">Editar</b-button>
                      <b-button size="sm" @click="eliminarMantenimiento(row)" class="mr-2">Eliminar</b-button>
                  </div>
              </template>
              </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/asignaciones-admin.js"/>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
