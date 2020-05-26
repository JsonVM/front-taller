<template>
  <div class="container">
    <div>
      <h1 class="title">
        Registro de motos
      </h1>

      <b-card
        title="Información de la Moto"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="mb-2"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearMoto()">
            <b-form-group id="input-group-2" label="placa:" label-for="placa">
              <b-form-input
                id="placa"
                v-model="moto.placa"
                required
                placeholder="Ingrese la placa de la moto"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="estado actual:" label-for="estado">
              <b-form-input
                id="estado"
                v-model="moto.estado"
                required
                placeholder="Ingrese el estado de la moto"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="clase:" label-for="clase">
              <b-form-input
                id="clase"
                v-model="moto.clase"
                required
                placeholder="clase de la moto"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Marca:" label-for="marca">
              <b-form-input
                id="marca"
                v-model="moto.marca"
                required
                placeholder="Ingrese la marca de la moto"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="modelo:"
              label-for="modelo"
            >
              <b-form-input
                id="modelo"
                v-model="moto.modelo"
                required
                placeholder="modelo"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="Color:"
              label-for="color"
            >
              <b-form-input
                id="color"
                v-model="moto.color"
                required
                placeholder="Color"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-7"
              label="Cilindraje:"
              label-for="cilindraje"
            >
              <b-form-input
                id="cilindraje"
                v-model="moto.cilindraje"
                required
                type="text"
                placeholder="cilindraje"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-8"
              label="cc del propietario:"
              label-for="id_propietario"
            >
              <b-form-input
                id="id_propietario"
                v-model="moto.id_propietario"
                required
                type="text"
                placeholder="cédula del propietario"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-9"
              label="Número del soat:"
              label-for="nro_soat"
            >
              <b-form-input
                id="nro_soat"
                v-model="moto.nro_soat"
                required
                type="text"
                placeholder="Número del soat"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-10"
              label="Fecha vencimiento del soat:"
              label-for="vencimiento_soat"
            >
              <b-form-input
                id="vencimiento_soat"
                v-model="moto.vencimiento_soat"
                required
                placeholder="fecha vencimiento del soat"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-11"
              label="Número de tecnomecanica:"
              label-for="nro_tecnomecanica"
            >
              <b-form-input
                id="nro_tecnomecanica"
                v-model="moto.nro_tecnomecanica"
                required
                type="text"
                placeholder="Número de tecnomecanica"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-12"
              label="Fecha vencimiento tecnomecanica:"
              label-for="vencimiento_tecnomecanica"
            >
              <b-form-input
                id="vencimiento_tecnomecanica"
                v-model="moto.vencimiento_tecnomecanica"
                required
                type="text"
                placeholder="AAAA-MM-DD"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="success" v-if="!enEdicion"
              >Registrar moto</b-button
            >
            <b-button @click="actualizarMotoBD()" variant="success" v-else
              >Actualizar datos moto</b-button
            >
          </b-form>

          <b-table responsive hover :items="lista_motos" :fields="fields" head-variant="dark">
              <template v-slot:cell(acciones)="row">
                  <div>
                      <b-button size="sm" @click="cargarMotoEditar(row)" class="mr-2">Editar</b-button>
                      <b-button size="sm" @click="eliminarMoto(row)" class="mr-2">Eliminar</b-button>
                  </div>
              </template>
              </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/registro-motos.js"/>

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
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
