<template>
  <div>
    <h1>Examen Cubos</h1>
    <div v-if="cubos">
    <ul>
        <li v-for="cubo of cubos" :key="cubo">
            <div class="card" style="width: 18rem;">
                <img :src="cubo.imagen" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Nombre: {{cubo.nombre}}</h5>
                  <h6> Marca: {{cubo.marca}}</h6>
                  <label>Precio: {{cubo.precio}} $</label><br/>
                  <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                  <router-link :to="/cubo/ +cubo.idCubo" class="btn btn-primary">Detalles</router-link>
                 
                </div>
              </div>
        </li>
    </ul>
</div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"HomeComponent",
    data(){
        return{
            cubos:[]
        }
    },
    watch:{
        '$route.params.marca'(nextVal,oldVal){
            // console.log("cambio1")
            if(nextVal!=oldVal && nextVal!=null){
                
                this.getCubosPorMarca(this.$route.params.marca);
            }
            if(nextVal==null){
                this.getCubos();
            }
        }
    },
    mounted(){
        // console.log("monto")
        this.getCubos();
        // console.log("monto" +this.cubos)
    },
    methods:{
        getCubos(){
            service.getCubos().then(res=>{
                this.cubos=res;
            })
        },
        getCubosPorMarca(marca){
            //  console.log("afaf")
            service.getCubosPorMarca(marca).then(res=>{
                this.cubos=res;
            })
        }
    }

}
</script>

<style scoped>
li{
    display: inline-block;
}

</style>