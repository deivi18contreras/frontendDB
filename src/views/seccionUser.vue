<template>
  <q-page class="portal-page">

    <!-- HEADER -->
    <div class="top-header">

      <div class="header-row">
        <div class="brand">
          <q-icon name="auto_awesome" />
          <div class="title">PORTAL MÍSTICO</div>
        </div>

        <div class="header-actions">
          <q-btn round flat icon="notifications" />
          <q-avatar size="42px">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANvVnTSnvzzLkpT6Wom5BAZ8s8qtj2dl2Z4zZPWlIIKh6gc64vqTmqpTQ6zDO42evyChWepxfhsq3YH1-_bc9LFG14RI6nBSf0psRI2x5xObBoc-05X8a7WiYLFqxh6lbfFFSgNA-sUsQaCccepC1qRPWDkdihz26v2M7p3RQX2xHY_W6QO2yPCeqp6VDRkmjq9BZbCN2zhnUxDak0V9fkZ1B51XM9ViufRI3GhYZlOiXBykkd4POoEUxLB-VWGhvlhsvnjFDiZuI" />
          </q-avatar>
        </div>
      </div>

      <!-- TABS -->
      <div class="nav-tabs">
        <div :class="['tab', activeTab === 'readings' && 'tab-active']" @click="activeTab = 'readings'">
          <q-icon name="auto_stories" />
          <span>Lecturas</span>
        </div>

        <div :class="['tab', activeTab === 'membership' && 'tab-active']" @click="activeTab = 'membership'">
          <q-icon name="card_membership" />
          <span>Membresía</span>
        </div>
      </div>

    </div>

    <!-- CONTENT -->
    <div class="content">

      <!-- READINGS -->
      <div v-if="activeTab === 'readings'">

        <q-btn class="gold-button full-width q-mb-lg">
          <q-icon name="star" />
          GENERAR LECTURA
        </q-btn>

        <q-card class="glass-card q-mb-lg">
          <q-card-section>

            <div class="reading-header">
              <div class="number-box">22</div>
              <div>
                <div class="reading-title">Número Maestro 22</div>
                <div class="reading-sub">El Arquitecto del Cosmos</div>
              </div>
            </div>

            <p class="reading-text">
              Tu frecuencia actual resuena con la maestría de la construcción universal...
            </p>

            <div class="reading-buttons">
              <q-btn flat icon="share">Compartir</q-btn>
              <q-btn flat icon="auto_awesome_motion">Guardar</q-btn>
            </div>

          </q-card-section>
        </q-card>

      </div>

      <!-- MEMBERSHIP -->
      <div v-if="activeTab === 'membership'">

        <q-card class="glass-card">
          <q-card-section>
            <div class="membership-title">Nivel Premium</div>
            <div class="membership-status">Activa</div>
          </q-card-section>
        </q-card>

      </div>

    </div>

    <!-- BOTTOM BAR -->
    <div class="bottom-bar">
      <div class="home-indicator"></div>
    </div>

  </q-page>
</template>

<script setup>
import { ref } from "vue";

const activeTab = ref("readings");
</script>

<style scoped>
/* PAGE */

.portal-page {
  min-height: 100vh;
  background: radial-gradient(circle at top right, #4A148C, #0F021A);
  color: white;
}

/* HEADER */

.top-header {
  position: sticky;
  top: 0;
  backdrop-filter: blur(18px);
  background: rgba(0, 0, 0, 0.5);
  padding: 24px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.1);
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--q-primary);
  font-weight: bold;
  font-size: 20px;
}

.header-actions {
  display: flex;
  gap: 12px;
}

/* TABS */

.nav-tabs {
  display: flex;
  justify-content: space-around;
}

.tab {
  opacity: 0.4;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
}

.tab-active {
  opacity: 1;
  color: var(--q-primary);
}

/* CONTENT */

.content {

  max-width: 100vw;
  margin: auto;
}

/* CARDS */

.glass-card {
  background: rgba(74, 20, 140, 0.15);
  backdrop-filter: blur(16px);
  border-radius: 18px;
  border: 1px solid rgba(212, 175, 55, 0.15);
}

/* GOLD BUTTON */

.gold-button {
  background: linear-gradient(145deg, #D4AF37, #B8860B);
  color: black;
  font-weight: bold;
}

/* READING */

.reading-header {
  display: flex;
  gap: 18px;
  align-items: center;
}

.number-box {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: rgba(212, 175, 55, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: var(--q-primary);
  font-weight: bold;
}

.reading-title {
  font-size: 20px;
  font-weight: bold;
}

.reading-sub {
  opacity: 0.6;
}

.reading-text {
  margin-top: 20px;
  opacity: 0.8;
  line-height: 1.6;
}

.reading-buttons {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

/* BOTTOM BAR */

.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 46px;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-indicator {
  width: 140px;
  height: 5px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
</style>