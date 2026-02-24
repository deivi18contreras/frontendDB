import login from "../views/loginUsers.vue"
import admin from "../views/loginAdmin.vue"
import seccionUser from "../views/seccionUser.vue"
import seccionAdmin from "../views/seccionAdmin.vue"
 
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/", component:login},
    {path:"/admin", component:admin},
    {path:"/seccionUser", component:seccionUser},
    {path:"/seccionAdmin", component:seccionAdmin}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})