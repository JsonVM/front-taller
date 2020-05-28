<template>
  <div class="container">
    <div>
      <h1 class="titulo-blanco">
        Realizar asignación de seguimiento
      </h1>

      <b-card
        title="Información del mantenimiento"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="c2"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearMantenimiento()">
            <b-form-group id="input-group-2" label="Documento del mecánico:" label-for="id_mecanico">
              <b-form-input
                id="id_mecanico"
                v-model="mantenimiento.id_mecanico"
                required
                placeholder="Ingrese el id del mecánico que realizará mantenimiento"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Placa de la moto:" label-for="placa">
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
            
            <b-form-group id="input-group-4" label="Trabajos realizados:" label-for="trabajos_realizados">
              <b-form-input
                id="trabajos_realizados"
                v-model="mantenimiento.trabajos_realizados"
                type="text"
                placeholder="trabajos realizados a la moto"
                
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Horas trabajadas:" label-for="horas_invertidas">
              <b-form-input
                id="horas_invertidas"
                v-model="mantenimiento.horas_invertidas"
                placeholder="ingrese las horas invertidas totales en los trabajos"
              ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="danger" v-if="!enEdicion"
              >Registrar mantenimiento</b-button
            >
            <b-button @click="actualizarMantenimientoBD()" variant="danger" v-else
              >Actualizar datos mantenimiento</b-button
            >
          </b-form>

          <b-table class="tabla" responsive hover :items="lista_mantenimientos" :fields="fields" head-variant="dark">
              <template v-slot:cell(acciones)="row">
                  <div>
                      <b-button size="sm" @click="cargarMantenimientoEditar(row)" variant ="danger">Editar</b-button>
                      <b-button size="sm" @click="eliminarMantenimiento(row)" variant ="danger">Eliminar</b-button>
                  </div>
              </template>
              </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/asignaciones-admin.js"/>

<style src="../css/general.css" />