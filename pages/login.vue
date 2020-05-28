<template>
  <div class="container">
    <div class= "c">
      <h1 class="title">
        Iniciar sesión
        
      </h1>
      <div class="d">
        <b-form action="javascript:void(0)">
          <b-form-group @submit.stop.prevent label="Documento:" label-for="id">
            <b-form-input
              class="form-control"
              v-model="usuario.documento"
              type="number"
              placeholder="Ingrese su documento de identidad"
              id="documento"
              :rules="reglas"/>
          </b-form-group>

          <b-form-group @submit.stop.prevent label="Contraseña:" label-for="password">
            <b-form-input
              class="form-control"
              type="password"
              v-model="usuario.clave"
              placeholder="Ingrese su contraseña"
              id="password"
			  :rules="reglas"/>
        </b-form-group>

        <b-button @click="login()" type="submit" block variant="success">Ingresar</b-button>

          <span class="red--text py-2">{{ mensaje }}</span>
          
        </b-form>      
      </div>
    </div>
  </div>
</template>

<script src="../assets/login.js" />

<style>
.container {
  background-image: url("../imagenes/moto1.jpg");
  background-size: 100%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Arial", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  color: black;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: black;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.c {
  padding: 2%;
  background-color: #CC2936;
  opacity: 90%;
  font-weight: 500;
}

.d {
  background-color: #CC2936;
}
</style>