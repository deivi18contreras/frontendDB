import login from "../views/loginUsers.vue"
import admin from "../views/loginAdmin.vue"
 
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/", component:login},
    {path:"/admin", component:admin}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})