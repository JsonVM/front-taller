/**
 * Aquì se encuentran los metodos para el crud de las motos
 */
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,

      //en este json se almacena la información agregada de las motos(obraas)
      moto: {
            placa:"",
            estado: "",
            clase: "",
            marca: "",
            modelo: "",
            color: "",
            cilindraje: "",
            id_propietario: "",
            nro_soat: "",
            vencimiento_soat: "",
            nro_tecnomecanica: "",
            vencimiento_tecnomecanica: "",
            acciones: true
      },
      fields: ["placa", "estado", "clase", "marca", "modelo", "color", "id_propietario", "acciones"],

      //En este arreglo se meten todas las motos
      lista_motos: [
        {
          
        }
      ],
       show: true
    }
  },
  //Para que llame  el metodo cargar y se listan las motos que hay en la BD
  mounted() {
    this.cargar()
  },


  methods: {
    //Para crear una nueva moto y agregarla a la BD
    crearMoto() {
      console.log("placa:" + this.moto.placa);
      console.log("MOTO:");
      console.log(this.moto);
      this.lista_motos.push(this.moto);

      let direccion = "http://localhost:3001/motos";
      axios
        .post(direccion, this.moto)
        .then((response) => {
          console.log("Moto agregada correctamente");
          alert("la moto se agrego correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos la moto no se pudo agregar correctamente");
        });

      this.moto = {
            placa:"",
            estado: "",
            clase: "",
            marca: "",
            modelo: "",
            color: "",
            cilindraje: "",
            id_propietario: "",
            nro_soat: "",
            vencimiento_soat: "",
            nro_tecnomecanica: "",
            vencimiento_tecnomecanica: "",
            acciones:true
      };

    },

    //cargar todos los registros de la BD y listarlos
    cargar() {
      let url = "http://localhost:3001/motos/";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_motos = data.info
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //cargar una moto para editarla 
    cargarMotoEditar({ item }) {
     let editar = this.lista_motos.find(moto => moto.placa == item.placa);
      this.enEdicion = true;
      this.moto = Object.assign({}, editar);
    },

    //agregar los nuevos valores a la moto editada
    actualizarMotoBD() {
      let id_Editar = this.moto.placa;
      console.log("placa de moto a editar: "+this.moto.placa);
      let direccion = "http://localhost:3001/motos/" + id_Editar;
      axios
        .put(direccion, this.moto)
        .then((response) => {
          console.log("moto editada correctamente");
          alert("La moto se edito correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, la moto no se pudo editar correctamente");
        });
        this.enEdicion = false;
      this.moto = {
            placa:"",
            estado: "",
            clase: "",
            marca: "",
            modelo: "",
            color: "",
            cilindraje: "",
            id_propietario: "",
            nro_soat: "",
            vencimiento_soat: "",
            nro_tecnomecanica: "",
            vencimiento_tecnomecanica: "",
            acciones: true
      };
    },

    //Actualiza los datos de una moto
    actualizarMoto() {
      let posicion = this.lista_motos.findIndex(
        moto => moto.placa == this.moto.placa
      );
      this.enEdicion = false;
      this.lista_motos.splice(posicion, 1, this.moto);
      this.moto = {
        placa:"",
            estado: "",
            clase: "",
            marca: "",
            modelo: "",
            color: "",
            cilindraje: "",
            id_propietario: "",
            nro_soat: "",
            vencimiento_soat: "",
            nro_tecnomecanica: "",
            vencimiento_tecnomecanica: "",
            acciones: true
      };
      localStorage.setItem('info-moto', JSON.stringify(this.lista_motos));
    },

    //eliminar moto de la BD
    eliminarMoto({item}) {
      let i = item.placa;
      let direccion = "http://localhost:3001/motos/" + i;
      axios
        .delete(direccion, i)
        .then((response) => {
          console.log("moto eliminada correctamente");
          alert("moto eliminada correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Para cargar los datos del localstorage en nuestro arreglo de motos
    local() {
      var datosLocal = JSON.parse(localStorage.getItem('info-moto'));
      if (datosLocal === null) {
        this.lista_motos = [];
      } else {
        this.lista_motos = datosLocal;
      }
    }
  }
};