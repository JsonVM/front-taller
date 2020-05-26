/**
 * Aquì se encuentran los metodos para el crud de los usuarios
 */
const axios = require('axios');
export default {
  data() {
    return {
      enEdicion: false,

      //en este json se almacena la información agregada de los usuarios
      usuario: {
        tipo_documento: "",
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: "",
        clave: "",
        acciones:true
      },
      fields: ["tipo_documento", "documento", "nombre", "apellidos", "celular", "correo", "rol","acciones"],
      rol: [
        { value: "1", text: "Mecánico" },
        { value: "2", text: "Administrador" },
      ],

      //En este arreglo se meten todas los usuarios
      lista_usuarios: [
        {
          
        }
      ],
       show: true
    }
  },
  //Para que llame  el metodo cargar y se listan las usuarios que hay en la BD
  mounted() {
    this.cargar()
  },


  methods: {
    //Para crear una nueva usuario y agregarla a la BD
    crearMoto() {
      console.log(this.usuario);
      this.lista_usuarios.push(this.usuario);

      let direccion = "http://localhost:3001/usuarios";
      axios
        .post(direccion, this.usuario)
        .then((response) => {
          console.log("usuario agregado correctamente");
          alert("el usuario se agrego correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos el usuario no se pudo agregar correctamente");
        });

      this.usuario = {
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

    },

    //cargar todos los registros de la BD y listarlos
    cargar() {
      let url = "http://localhost:3001/usuarios/";
      axios.get(url).then(respuesta => {
        let data = respuesta.data
        if (data.ok) {
          this.lista_usuarios = data.info
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error")
      });

    },

    //cargar una usuario para editarla 
    cargarUsuarioEditar({ item }) {
     let editar = this.lista_usuarios.find(usuario => usuario.documento == item.documento);
      this.enEdicion = true;
      this.usuario = Object.assign({}, editar);
    },

    //agregar los nuevos valores a la usuario editada
    actualizarUsuarioBD() {
      let id_Editar = this.usuario.documento;
      console.log("documento de usuario a editar: "+this.usuario.documento);
      let direccion = "http://localhost:3001/usuarios/" + id_Editar;
      axios
        .put(direccion, this.usuario)
        .then((response) => {
          console.log("usuario editada correctamente");
          alert("La usuario se edito correctamente");
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          alert("Lo sentimos, la usuario no se pudo editar correctamente");
        });
        this.enEdicion = false;
      this.usuario = {
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
    },

    //Actualiza los datos de un usuario
    actualizarUsuario() {
      let posicion = this.lista_usuarios.findIndex(
        usuario => usuario.documento == this.usuario.documento
      );
      this.enEdicion = false;
      this.lista_usuarios.splice(posicion, 1, this.usuario);
      this.usuario = {
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
      localStorage.setItem('info-usuario', JSON.stringify(this.lista_usuarios));
    },

    //eliminar usuario de la BD
    eliminarUsuario({item}) {
      let i = item.documento;
      let direccion = "http://localhost:3001/usuarios/" + i;
      axios
        .delete(direccion, i)
        .then((response) => {
          console.log("usuario eliminado correctamente");
          alert("usuario eliminado correctamente");
          this.cargar();
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Para cargar los datos del localstorage en nuestro arreglo de usuarios
    local() {
      var datosLocal = JSON.parse(localStorage.getItem('info-usuario'));
      if (datosLocal === null) {
        this.lista_usuarios = [];
      } else {
        this.lista_usuarios = datosLocal;
      }
    }
  }
};