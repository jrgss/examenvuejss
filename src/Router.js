import { createRouter,createWebHistory } from "vue-router";
import HomeComponent from './components/HomeComponent.vue'
import CompraComponent from './components/CompraComponent.vue'
import CuboComponent from './components/CuboComponent.vue'
import SeguridadComponent from './components/SeguridadComponent.vue'
import UsuarioComponent from './components/UsuarioComponent.vue'
const routes=[
    {
        path:"/",component:HomeComponent
    },
    {
        path:"/compra",component:CompraComponent
    },
    {
        path:"/:marca",component:HomeComponent
    },
    {
        path:"/cubo/:id",component:CuboComponent
    },
    {
        path:"/seguridad/:opcion",component:SeguridadComponent
    },
    {
        path:"/usuario/:opcion",component:UsuarioComponent
    }
    
]
const router= createRouter({
    routes:routes,
    history:createWebHistory()
})
export default router;
