import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("../views/loginUsers.vue") },
      { path: "crear-user", component: () => import("../views/crearUser.vue") },
      { path: "seccionUser", component: () => import("../views/seccionUser.vue") },
      { path: "seccionAdmin", component: () => import("../views/seccionAdmin.vue") }
    ]
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})