 <template>
  <div class="container">
    <div>
      <h1 class="title">
        Mantenimientos
      </h1>

      <b-card
        title="Mantenimientos"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 50rem;"
        class="mb-2"
        v-show="true"
      >

       <b-card-body>
          <b-form action="javascript:void(0)" @submit="actualizarMantenimientoBD()">
            <b-form-group id="input-group-2" label="documento del mecánico:" label-for="id_mecanico">
              <b-form-input
                id="id_mecanico"
                v-model="mantenimiento.id_mecanico"
                required
                disabled
                placeholder="documento del mecánico que realizará mantenimiento"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-1" label="placa de la moto:" label-for="placa">
              <b-form-input
                id="placa"
                v-model="mantenimiento.placa"
                required
                disabled
                placeholder="placa de la moto del mantenimiento"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="fecha:" label-for="fecha">
              <b-form-input
                id="fecha"
                v-model="mantenimiento.fecha"
                required
                disabled
                placeholder="fecha actual"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="trabajos realizados:" label-for="trabajos_realizados">
              <b-form-input
                id="trabajos_realizados"
                v-model="mantenimiento.trabajos_realizados"
                required
                type="text"
                placeholder="trabajos realizados a la moto"
                
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-5" label="Horas trabajadas:" label-for="horas_invertidas">
              <b-form-input
                id="horas_invertidas"
                v-model="mantenimiento.horas_invertidas"
                required
                placeholder="ingrese las horas invertidas totales en los trabajos"
              ></b-form-input>
            </b-form-group>

          </b-form>

            <b-button @click="actualizarMantenimientoBD()" variant="success" v-if="enEdicion"
              >Actualizar datos mantenimiento</b-button
            >

             <b-table responsive hover :items="lista_mantenimientos" :fields="fields" head-variant="dark">
              <template v-slot:cell(acciones)="row">
                  <div>
                      <b-button size="sm" @click="cargarMantenimientoEditar(row)" class="mr-2">Editar</b-button>
                  </div>
              </template>
             </b-table>

        </b-card-body>
      </b-card>
    </div>
  </div>
</template>

<script src="@/assets/mantenimientos-mecanico.js"/>

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
 
