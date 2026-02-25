<template>
  <q-page class="login-page bg-dark text-white">

    <div class="login-container">

      <!-- PANEL IZQUIERDO -->
      <div class="visual-panel">

        <img
          class="background-image"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmb8tUiU6e7G_8n-DBzt9reT9DVwK8UjFK4y3FZpZ0pDA1SRDCCcBnmw3Svrzq8A3N6gGw1RULmBwz2UNljeAzPLYen7GxchrrobfkpZ3lDjNrq3YHHxeWGAa_sQj7-xaNNNzlnHU7HkTvO1HMXdJ5XrU7txQ2DZnzRwnZjcg4uKENJSWnhma4JcyBELSI9-3YTdA2rlNgC91DoPkubXHoM30JKbq3RuOG9nERkJJd5xhH_F3WsX1eJIW8TQazIgNGN-6lTahw1Ig"
        />

        <div class="overlay"></div>

        <div class="numerology-grid">
          <span>11:11</span>
          <span>333</span>
          <span>777</span>
          <span>444</span>
          <span>999</span>
          <span>222</span>
        </div>

        <div class="title-panel">
          <h1>Numerology</h1>
          <p>ADMINISTRATIVE PORTAL</p>
        </div>

      </div>

      <!-- PANEL DERECHO -->
      <div class="form-panel">

        <q-card class="glass-container">

          <q-card-section class="text-center">
            <div class="text-h5">Authentication</div>
            <div class="subtitle">Secure Entry Required</div>
          </q-card-section>

          <q-card-section>

            <q-input
              filled
              v-model="usuario"
              label="Email"
              dark
              class="q-mb-md"
            >
              <template v-slot:prepend>
                <q-icon name="alternate_email" />
              </template>
            </q-input>

            <q-input
              filled
              v-model="password"
              label="Secret Key"
              type="password"
              dark
            >
              <template v-slot:prepend>
                <q-icon name="lock_open" />
              </template>
            </q-input>

          </q-card-section>

          <q-card-actions vertical>

            <q-btn
              color="primary"
              label="Access Portal"
              class="full-width q-mb-sm"
              @click="login"
            />

            <q-btn
              flat
              label="Crear Usuario"
              class="full-width"
              @click="creacionUsuarios"
            />

          </q-card-actions>

        </q-card>

        <div class="version-text">
          V8.0 • Encrypted Connection
        </div>

      </div>

    </div>

  </q-page>
</template>

<script setup>
import { postData } from "../services/services.js";
import { useAuthStore } from "../store/Auth.js";
import { useRouter } from "vue-router";
import { ref } from "vue";

const usuario = ref("");
const password = ref("");

const router = useRouter();
const authStore = useAuthStore();

const login = async () => {
  try {
    const res = await postData("login", {
      email: usuario.value,
      password: password.value,
    });

    authStore.token = res.data.token;

    const rol = res.data.usuario.rol;  

    if (rol === "admin") {
      router.push("/seccionAdmin");
    } else {
      router.push("/seccionUser");
    }

  } catch (error) {
    console.log(error.response);
  }
};

const creacionUsuarios = () => {
  router.push("/crear-user");
};
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
.login-page {
  width: 100vw;        /* 👈 FORZAMOS ancho completo */
  height: 100vh;
  overflow: hidden;
}

/* CONTENEDOR PRINCIPAL */

.login-container {
  display: flex;
 
}

/* ================= PANEL VISUAL ================= */

.visual-panel {
  position: relative;
  width: 50vw;         /* 👈 Mitad real de pantalla */
  height: 100vh;
  background: #0a0a0c;
  overflow: hidden;
}

.background-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.6;
}

.overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, transparent, #0a0a0c);
}

.numerology-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  opacity: 0.15;
  font-size: 64px;
  color: var(--q-primary);
  font-weight: 200;
}

.title-panel {
  position: absolute;
  top: 80px;
  left: 80px;
}

.title-panel h1 {
  font-size: 70px;
  color: var(--q-primary);
  letter-spacing: 10px;
}

.title-panel p {
  font-size: 18px;
  opacity: 0.6;
  letter-spacing: 4px;
}

/* ================= PANEL FORM ================= */

.form-panel {
  width: 50vw;         /* 👈 Mitad real */
  height: 100vh;
  background: #4A148C;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px;
}

/* CARD */

.glass-container {
  width: 100%;
  max-width: 600px;
  padding: 35px;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(18px);
  border-radius: 26px;
  border: 1px solid rgba(255,255,255,0.2);
  box-shadow: 0 30px 80px rgba(0,0,0,0.45);
}

/* TEXTOS */

.subtitle {
  font-size: 15px;
  opacity: 0.4;
  letter-spacing: 2px;
}

/* INPUTS */

.q-field {
  font-size: 18px;
}

/* BOTONES */

.q-btn {
  height: 56px;
  font-size: 15px;
}

/* VERSION */

.version-text {
  position: absolute;
  bottom: 40px;
  font-size: 15px;
  opacity: 0.35;
}

/* ================= CELULAR ================= */

@media (max-width: 768px) {

  .login-container {
    flex-direction: column;
  }

  .visual-panel,
  .form-panel {
    width: 100vw;
    height: 50vh;
  }

  .title-panel {
    top: 35px;
    left: 25px;
  }

  .title-panel h1 {
    font-size: 32px;
    letter-spacing: 4px;
  }

  .title-panel p {
    font-size: 11px;
  }

  .numerology-grid {
    font-size: 26px;
  }

  .form-panel {
    padding: 20px;
  }

  .glass-container {
    border-radius: 18px;
  }

  .q-field {
    font-size: 15px;
  }

  .q-btn {
    height: 46px;
  }

  .version-text {
    font-size: 12px;
  }
}

</style>