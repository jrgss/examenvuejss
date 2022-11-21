<template>
  <div v-if="cubo">
    <div class="card" style="width: 18rem;">
          <img :src="cubo.imagen" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Nombre :{{cubo.nombre}}</h5>
          <label>Marca: {{cubo.marca}} </label>
          <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
          <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        <h4 v-if="comentarios">Comentarios:</h4>
            <ul>
                <li v-for="comment of comentarios" :key="comment">
                    {{comment.comentario}}
                    <p>{{comment.fechaComentario}}</p>
                </li>
            </ul>

          <router-link class="btn btn-warning" to="/">Volver</router-link>
        </div>
      </div>
  </div>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"CuboComponent",
    data(){
      return{
        cubo:{},
        comentarios:[],
        id:-1,
      }
    },
    mounted(){
      this.id=this.$route.params.id;
      this.getCubo();
      this.getComentarios();
    },
    methods:{
      getCubo(){
        service.getCubo(this.id).then(res=>{
          this.cubo=res;
        })
      },
      getComentarios(){
          service.getComentariosCubo(this.id).then(res=>{
            this.comentarios=res;
          })
      }
    }
}
</script>

<style>

</style>