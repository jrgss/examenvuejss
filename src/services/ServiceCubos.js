import axios from "axios";
import Global from "@/Global";
export default class ServiceCubo{
    getCubos(){
        return new Promise(function(resolve){
            var request="/api/Cubos";
            var url=Global.urlCubos+request;
        axios.get(url).then(res=>{
            resolve(res.data);
        })
        })
    }

    getMarcas(){
        return new Promise(function(resolve){
            var request="/api/Cubos/Marcas";
            var url=Global.urlCubos+request;
        axios.get(url).then(res=>{
            resolve(res.data);
        })
        })
    }

    getCubo(id){
        return new Promise(function(resolve){
            var request="/api/Cubos/"+id;
            var url=Global.urlCubos+request;
            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }

    getCubosPorMarca(marca){
        return new Promise(function(resolve){
            var request="/api/Cubos/CubosMarca/"+marca;
            var url=Global.urlCubos+request;
            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
       
    }

    getComentariosCubo(id){
        return new Promise(function(resolve){
            var request="/api/ComentariosCubo/GetComentariosCubo/"+id;
            var url=Global.urlCubos+request;
            axios.get(url).then(res=>{
                resolve(res.data)
            })
        })
    }

    inicioSesion(mail,pass){
        return new Promise(function(resolve){
            var request="/api/Manage/Login";
            var url=Global.urlCubos+request;
            var json={email:mail,password:pass}
            console.log(json)
            axios.post(url,json).then(res=>{
                var token=res.data.response;
                // console.log("TOKEN ES="+token)
                localStorage.setItem('token',token);
                resolve(token);

            })
        })
    }

    getPerfilUsuario(){
        return new Promise(function(resolve){
            var request="/api/Manage/PerfilUsuario";
            var url=Global.urlCubos+request;
            var token=localStorage.getItem('token');
            var headers={"Authorization":"Bearer "+token}
            // console.log(token)
            axios.get(url,{headers}).then(res=>{
                resolve(res.data);
            })
        })
    }

    getCompras(){
        return new Promise(function(resolve){
            var request="/api/Compra/ComprasUsuario";
            var url=Global.urlCubos+request;
            var token=localStorage.getItem('token');
            var headers={"Authorization":"Bearer "+token}
            axios.get(url,{headers}).then(res=>{
                resolve(res.data);
            })
        })
    }

    comprarCubo(id){
        return new Promise(function(resolve){
            var request="/api/Compra/InsertarPedido/"+id;
            var url=Global.urlCubos+request;
            var token=localStorage.getItem('token');
            var headers={"Authorization":"Bearer "+token}
            axios.post(url,"",{headers}).then(res=>{
                resolve(res.data);
            })
        })
       
    }

    registroUser(user){
        return new Promise(function(resolve){
            var request="/api/Manage/RegistroUsuario";
            var url=Global.urlCubos+request;
            // var token=localStorage.getItem('token');
            var headers={"Content-Type":"application/json"}
            console.log(url);
            var json=JSON.stringify(user);
            console.log(json)
            axios.post(url,json,{headers}).then(res=>{
                resolve(res.data);
            })
        })
       
    }
    estoyLogeado(){
        var token=localStorage.getItem('token');
        if(token!=null){
            return true;
        }else{
            return false;
        }
    }
    logOut(){
        localStorage.clear();
    }
}