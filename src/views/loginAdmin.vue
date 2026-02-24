<template>
  <div>
    <input type="text" v-model="usuario" />
    <input type="text" v-model="password" />
    <button @click="login()">login</button>
  </div>
</template>

<script setup>
import { postData } from "../services/services.js";
import { useAuthStore } from "../store/Auth.js";
import { ref } from "vue";

let usuario = ref("");
let password = ref("");
const authStore = useAuthStore();

const login = async () => {
  try {
    const res = await postData("login", {
      email: usuario.value,
      password: password.value,
    });

    const { Usuario, token } = res.data;
    console.log(res);
    authStore.token = res.data.token;
    console.log(authStore.token);
  } catch (error) {
    console.log(error.response);
  }
};
</script>

<style>
body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(
    to right,
    #5b1fa6 0% ,
    /* lado izquierdo oscuro */  #5b1fa6 45%,
    /* mantiene color */ #1e1e1e 55%,
    /* empieza difuminado */ #1e1e1e 100% /* lado derecho morado */
  );
}
</style>
