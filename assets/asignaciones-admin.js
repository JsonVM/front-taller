/**
 * Aquì se encuentran los metodos para el crud de los mantenimientos(version administrador
 */
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,

      //en este json se almacena la información agregada de los mantenimientos
     mantenimiento: {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados:"",
        horas_invertidas:"",
        acciones:true
      },
      fields: ["id_mecanico", "placa", "fecha", "trabajos_realizados", "horas_invertidas","acciones"],

      //En este arreglo se meten todas los mantenimientos
      lista_mantenimientos: [
        {
          
        }
      ],
       show: true
    }
  },
  //Para que llame  el metodo cargar y se listan las mantenimientos que hay en la BD
  mounted() {
    this.cargar()
  },


  methods: {
    //Para crear una nuevamantenimiento y agregarla a la BD
    crearMantenimiento() {
      this.lista_mantenimientos.push(this.mantenimiento);

      let direccion = "http://localhost:3001/asignaciones";
      axios
        .post(direccion, this.mantenimiento)
        .then((response) => {
          console.log("mantenimiento agregado correctamente");
          alert("el mantenimiento se agrego correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos el mantenimiento no se pudo agregar correctamente");
        });

      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados:"",
        horas_invertidas:"",
        acciones:true
      };

    },

    //cargar todos los registros de la BD y listarlos
    cargar() {
      let url = "http://localhost:3001/asignaciones/";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_mantenimientos = data.info
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //------------------------------------------------


    //cargar unamantenimiento para editarla 
    cargarMantenimientoEditar({ item }) {
     let editar = this.lista_mantenimientos.find(mantenimiento =>mantenimiento.documento == item.documento);
      this.enEdicion = true;
      this.mantenimiento = Object.assign({}, editar);
    },

    //agregar los nuevos valores a lamantenimiento editada
    actualizarMantenimientoBD() {
      let id_Editar = this.mantenimiento.documento;
      console.log("documento demantenimiento a editar: "+this.mantenimiento.documento);
      let direccion = "http://localhost:3001/mantenimientos/" + id_Editar;
      axios
        .put(direccion, this.mantenimiento)
        .then((response) => {
          console.log("mantenimiento editada correctamente");
          alert("Lamantenimiento se edito correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, el mantenimiento no se pudo editar correctamente");
        });
        this.enEdicion = false;
      this.mantenimiento = {
        id_mecanico: "",
        placa: "",
        fecha: "",
        trabajos_realizados:"",
        horas_invertidas:"",
        acciones:true
      };
    },

    //Actualiza los datos de unmantenimiento
    actualizarMantenimiento() {
      let posicion = this.lista_mantenimientos.findIndex(
       mantenimiento =>mantenimiento.documento == this.mantenimiento.documento
      );
      this.enEdicion = false;
      this.lista_mantenimientos.splice(posicion, 1, this.mantenimiento);
      this.mantenimiento = {
            tipo_documento: "",
            documento: "",
            nombre: "",
            apellidos: "",
            celular: "",
            correo: "",
            rol: "",
            clave: "",
            acciones:true
      };
      localStorage.setItem('info-mantenimiento', JSON.stringify(this.lista_mantenimientos));
    },

    //eliminarmantenimiento de la BD
    eliminarMantenimiento({item}) {
      let placa = item.placa;
      let id_mecanico = item.id_mecanico;
      let fecha = item.fecha;

      let asig = {
        placa : item.placa,
        id_mecanico : item.id_mecanico,
        fecha : item.fecha
      }
      let direccion = "http://localhost:3001/mantenimientos/" +placa + "/" + id_mecanico + "/" + fecha;
      axios
        .delete(direccion, asig)
        .then((response) => {
          console.log("mantenimiento eliminado correctamente");
          alert("mantenimiento eliminado correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log("hubo un error: " + error);
        });
    },
    //Para cargar los datos del localstorage en nuestro arreglo de mantenimientos
    local() {
      var datosLocal = JSON.parse(localStorage.getItem('info-mantenimiento'));
      if (datosLocal === null) {
        this.lista_mantenimientos = [];
      } else {
        this.lista_mantenimientos = datosLocal;
      }
    }
  }
};