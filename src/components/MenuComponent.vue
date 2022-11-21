<template>
<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Cubos</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/" aria-current="page">Home</router-link>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Marcas
            </a>
            <ul class="dropdown-menu">
                <li v-for="marca of marcas" :key="marca"><router-link class="dropdown-item" :to="'/'+marca">{{marca}}</router-link></li>
             </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Seguridad
            </a>
            <ul class="dropdown-menu">
              <li><router-link class="dropdown-item" to="/seguridad/1">Inicio Sesion</router-link></li>
              <li><router-link class="dropdown-item" to="/seguridad/2">Registro</router-link></li>

              <!-- <li><a class="dropdown-item" [routerLink]="['/seguridad/'+1]">Login</a></li>
              <li><a class="dropdown-item" [routerLink]="['/seguridad/'+2]">Registro</a></li> -->

             </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from './../services/ServiceCubos'
const service = new ServiceCubos();
export default {
    name:"MenuComponent",
    data(){
        return{
            marcas:"",
        }
    },
    mounted(){
        this.getMarcas();
    },
    methods:{
        getMarcas(){
            service.getMarcas().then(res=>{
                this.marcas=res;
            })
        }
    }

}
</script>

<style>

</style>