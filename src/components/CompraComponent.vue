<template>
    <div v-if="cubos">
    <ul>
        <li v-for="cubo of cubos" :key="cubo">
            <div class="card" style="width: 18rem;">
                <img :src="cubo.imagen" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{cubo.nombre}}</h5>
                  <label>Marca: </label>
                  <h6>{{cubo.marca}}</h6>
                  <label>Precio: {{cubo.precio}} $</label><br/>
                  <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <button class="btn btn-danger" @click="compro(cubo.idCubo)">Comprar</button>
                 
                </div>
              </div>
        </li>
    </ul>
</div>

</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"CompraComponent",
    data(){
      return{
         cubos:[]
      }
    },
    mounted(){
      this.getCubos();
    },
    methods:{
      getCubos(){
            service.getCubos().then(res=>{
                this.cubos=res;
            })
        },
        compro(id){
          service.comprarCubo(id).then(res=>{
            console.log(res)
            this.$router.push("/usuario/2")
          })
          //  console.log("compro"+id)
        }
    }
}
</script>

<style>

</style>