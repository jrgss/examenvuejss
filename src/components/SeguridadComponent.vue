<template>
  <div>
    <div v-if="opcion==1 &&statusIniciado==false">
      <h2>Log In</h2>
        <form v-on:submit.prevent="inicioSesion()">
        <label>Usuario</label>
        <input type="text" v-model="userL"/>
        <label>Contraseña</label>
        <input type="text" v-model="passL"/>
        <button class="btn btn-success">Log In</button>
    </form>
    </div>
    <div v-if="opcion==2 &&statusIniciado==false">
      <h2>Registro</h2>
          <form v-on:submit.prevent="registro()">
        <label>Nombre</label>
        <input type="text" v-model="nameR"/>
         <label>Mail</label>
        <input type="text" v-model="mailR"/>
        <label>Contraseña</label>
        <input type="text" v-model="passR"/>
        <label>Repetir contraseña</label>
        <input type="text" v-model="passrepeR"/>
        <button class="btn btn-success">Registro</button>
    </form>
    </div>
  </div>

  <div v-if="statusIniciado==true">
    <router-link class="btn btn-info" to="/usuario/1">Ver mi perfil</router-link>
    <router-link class="btn btn-success" to="/usuario/2">Ver mis compras</router-link>
    <router-link class="btn btn-danger" to="/compra">Realizar una compra</router-link>
    <button @click="desloguear" class="btn btn-dark">Log out</button>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"SeguridadComponent",
    data(){
      return{
        opcion:0,
        userL:"",
        passL:"",
        nameR:"",
        mailR:"",
        passR:"",
        passrepeR:"",
        statusIniciado:false,
      }
    },
    mounted(){
      this.opcion=this.$route.params.opcion;
      if(service.estoyLogeado()){
        this.statusIniciado=true;
      }
    },
    methods:{
      inicioSesion(){
        service.inicioSesion(this.userL,this.passL).then(res=>{
                    console.log(res);

          this.statusIniciado=true;
        })
      },
      registro(){
        var name=this.nameR;
        var mail=this.mailR;
        var pass=this.mailR;
    var json={
      idUsuario:531,nombre:name,email:mail,pass:pass
     }        
        
        service.registroUser(json).then(res=>{
          this.opcion=1;
          console.log(res);
        })
      },
      desloguear(){
        service.logOut();
        this.statusIniciado=false;
      }
    },
    watch:{
      '$route.params.opcion'(nextVal,oldVal){
        if(nextVal!=oldVal){
          this.opcion=nextVal;
          console.log()
        }
      }
    }
}
</script>

<style>

</style>