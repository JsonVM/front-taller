/**
 * Aquì se encuentran los metodos para el crud de los mantenimientos(version administrador
 */
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,
      sePuedeEditar: false,

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
        let id = localStorage.getItem("documento");
      let url = "http://localhost:3001/asignaciones/"+id;
      axios.get(url,id).then(respuesta => {
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
        let plac = item.placa;
        let id_mecanic= item.id_mecanico;
        let fech= item.fecha;
        let trabajos_realizado= item.trabajos_realizados;
        let horas_invertida= item.horas_invertidas;

        let man ={
            placa:plac,
            id_mecanico: id_mecanic,
            fecha: fech,
            trabajos_realizados: trabajos_realizado,
            horas_invertidas: horas_invertida
        }

        this.mantenimiento =man;

      this.enEdicion = true;
    },

    //agregar los nuevos valores a lamantenimiento editada
    actualizarMantenimientoBD() {
      let direccion = "http://localhost:3001/asignaciones/" + this.mantenimiento.placa + "/"
       + this.mantenimiento.id_mecanico + "/" + this.mantenimiento.fecha;
      axios
        .put(direccion, this.mantenimiento)
        .then((response) => {
          console.log("mantenimiento editada correctamente");
          alert("El mantenimiento se actualizó correctamente");
          console.log(response);
          this.cargar();
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, el mantenimiento no se pudo actualizar");
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