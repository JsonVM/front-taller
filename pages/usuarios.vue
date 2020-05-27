<template>
  <div class="container">
    <div>
      <h1 class="title">
        Registro de Usuario
      </h1>

      <b-card
        title="Información del usuario"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="mb-2"
        v-show="true"
      >
        <b-card-body>
          <b-form action="javascript:void(0)" @submit="crearMoto()">
            <b-form-group id="input-group-2" label="Tipo de documento:" label-for="tipo_documento">
              <b-form-input
                id="tipo_documento"
                v-model="usuario.tipo_documento"
                required
                placeholder="Ingrese el tipo de documento de la usuario"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="Documento:" label-for="documento">
              <b-form-input
                id="documento"
                v-model="usuario.documento"
                required
                placeholder="Ingrese el documento del usuario"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Nombre:" label-for="nombre">
              <b-form-input
                id="nombre"
                v-model="usuario.nombre"
                required
                placeholder="nombre del usuario"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Apellidos:" label-for="apellidos">
              <b-form-input
                id="apellidos"
                v-model="usuario.apellidos"
                required
                placeholder="Ingrese los apellidos de la usuario"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-5"
              label="celular:"
              label-for="celular"
            >
              <b-form-input
                id="celular"
                v-model="usuario.celular"
                required
                placeholder="celular"
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-6"
              label="correo:"
              label-for="correo"
            >
              <b-form-input
                id="correo"
                v-model="usuario.correo"
                required
                placeholder="correo"
              ></b-form-input>
            </b-form-group>
            
             <b-form-group label= "tipo usuario:">
          <b-form-select v-model="usuario.rol" :options="rol"></b-form-select>
        </b-form-group>

            <b-form-group
              id="input-group-8"
              label="contraseña:"
              label-for="clave"
            >
              <b-form-input
                id="clave"
                v-model="usuario.clave"
                required
                type="password"
                placeholder="ingrese la clave"
              ></b-form-input>
            </b-form-group>
            

            <b-button type="submit" variant="success" v-if="!enEdicion"
              >Registrar usuario</b-button
            >
            <b-button @click="actualizarUsuarioBD()" variant="success" v-else
              >Actualizar datos usuario</b-button
            >
          </b-form>

          <b-table responsive hover :items="lista_usuarios" :fields="fields" head-variant="dark">
              <template v-slot:cell(acciones)="row">
                  <div>
                      <b-button size="sm" @click="cargarUsuarioEditar(row)" class="mr-2">Editar</b-button>
                      <b-button size="sm" @click="eliminarUsuario(row)" class="mr-2">Eliminar</b-button>
                  </div>
              </template>
              </b-table>
        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/usuarios.js"/>

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
