<template>
  <div class="padre">
    <div>
      <h1>NUMEROLOGY</h1>
    </div>


    <div class="card">
      <h1>Autenticacion</h1>

      <div class="texto">
        <input type="text" v-model="usuario" label="gmail" />
        <input type="text" v-model="password" label="password" />
      </div>
      <div class="botones">
        <BotonAmarrillo texto="acceso al portal" @click="login()" />
        <BotonAmarrillo texto="crear usuario" />
        <BotonAmarrillo texto="entrar como Admin" @click="entradaAdmin()"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import BotonAmarrillo from "../components/botonAmarrillo.vue";
import { postData } from "../services/services.js";
import { useAuthStore } from "../store/Auth.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

let usuario = ref("");
let password = ref("");
const router = useRouter()
const authStore = useAuthStore();

const login = async () => {
  try {
    const res = await postData("login", {
      email: usuario.value,
      password: password.value,
    });

    console.log(res);
    authStore.token = res.data.token;
    console.log(authStore.token);
  } catch (error) {
    console.log(error.response);
  }
};

const entradaAdmin = ()=>{
  router.push("/admin")
}
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(
    to right,
    #1e1e1e 0%,
    /* lado izquierdo oscuro */ #1e1e1e 45%,
    /* mantiene color */ #5b1fa6 55%,
    /* empieza difuminado */ #5b1fa6 100% /* lado derecho morado */
  );
}
.padre {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
}
.texto {
  color: white;
  display: grid;
}
.botones{
  display: grid;
}
</style>
