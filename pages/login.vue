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

        <b-button @click="login()" type="submit" block variant="danger">Ingresar</b-button>

          <span class="red--text py-2">{{ mensaje }}</span>
          
        </b-form>      
      </div>
    </div>
  </div>
</template>

<script src="../assets/login.js" />
<style src="../css/general.css" />