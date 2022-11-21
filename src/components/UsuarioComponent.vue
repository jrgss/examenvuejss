<template>
  <div>
      <div v-if="userIniciado">
        
          <div class="card" style="width: 18rem;">
            <h1>Perfil de Usuario</h1>
        <div class="card-body">
          <h5 class="card-title">Nombre:{{user.nombre}}</h5>
          <h6>Mail:{{user.email}}</h6>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </div>
        <div v-if="!comprasIniciadas">
        <button class="btn btn-info" @click="getCompras">Mostrar mis compras</button>
      </div>
        </div>
        <hr/>
      </div>

      <div class="card" style="width: 18rem" v-if="comprasIniciadas">
    <div v-for="compra of compras" :key="compra" >
        <div class="card-body">
          <h5 class="card-title">Pedido nº: {{compra.idPedido}}</h5>
          <p class="card-text">Usted ordenó el cubo con id: {{compra.idCubo}} en la fecha: {{compra.fechaPedido}}</p>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
        </div>
      </div>
      <div v-if="!userIniciado">
        <button class="btn btn-warning" @click="getUser">Mostrar mi perfil</button>
    </div>
    
</div>
  <router-link class="btn btn-info" to="/seguridad/1">Volver</router-link>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"UsuarioComponent",
    data(){
      return{
        user:{},
        compras:[],
        comprasIniciadas:false,
        userIniciado:false
      }
    },
    mounted(){
      if(this.$route.params.opcion==1){
        this.getUser();
      }else{
        this.getCompras();
      }
    },
    methods:{
      getUser(){
        service.getPerfilUsuario().then(res=>{
          this.user=res;
          this.userIniciado=true;
        })
      },
      getCompras(){
        service.getCompras().then(res=>{
          this.compras=res;
          this.comprasIniciadas=true
        })
      }
    }
    
}
</script>

<style>

</style>