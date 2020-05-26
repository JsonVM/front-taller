import axios from "axios";

export default {
  asyncData({ query }) {
    let token = query.token; // Capturamos el token que llega por url
    let token_url = token ? true : false; // Me indica si hay un token en url o no
    return { token, token_url };
  },
  mounted() {
    if (this.token_url == true) {
      // Ingresa a este código si hay un token en url.

      //Asigno la información del token al localstorage
      localStorage.setItem("token", this.token);

      //this.$router.push("PONER AQUÍ LA URL DE LA PÁGINA CUANDO SE REDIRECCION AL HACER LOGIN EXITOSO.");
      // Por ejemplo
      //this.$router.push("info-publicacion");


    }
  },

  data() {
    return {
      title: "INICIAR SESIÓN",
      usuario: {
        documento: "",
        clave: "",
      },
      mensaje: null,
      reglas: [(v) => !!v || "El campo es obligatorio."],
    };
  },
  methods: {
    //metodo para autentificar la persona que se esta logueando para darle acceso y validar el rol
    login() {
      axios.post("http://localhost:3001/login", {
        documento: this.usuario.documento,
        clave: this.usuario.clave
      }).then(res => {

        if (res) {
          this.agregarInfoLS({ idusuario: this.usuario.documento, token: res.data['info'], nombre: res.data['nombre'] })

          console.log(this.usuario.documento)
          localStorage.setItem('documento', this.usuario.documento);

        }
        let id_listar = localStorage.getItem("documento");

        let rol = res.data.rol
        console.log("el rol es:" + rol);
        localStorage.setItem('token', res.data.info);

        if (rol == 2) {
          this.$router.push("menu-admin");
        } else if (rol == 1) {
          this.$router.push("menu-mecanico");
        } 
        
        let mensaje = res.data.mensaje
        console.log(mensaje) 
      }).catch(error => {
        console.log(mensaje = "Ha ocurrido un error: " + error)
      })
    },

    //este metodo no se esta utilizando
    verificarRol(id) {
      let direccion = "http://localhost:3001/registro-usuario/rol/" + id;
      let token = localStorage.getItem("token");
      axios.get(direccion, { headers: { token } }).then(respuesta => {
        let data = respuesta.data
        console.log(data);
        if (data.ok) {
          let i = data.info[0].rol;
          console.log("i!!" + i);
          return i;
        }
        this.mensaje = data.mensaje;
        console.log(respuesta);
      }).catch(error => {
        console.log(this.mensaje = "Ha ocurrido un error: " + error)
      });

    },
    agregarInfoLS(item) {
      localStorage.setItem('usuario', JSON.stringify(item));
    }
  }
}