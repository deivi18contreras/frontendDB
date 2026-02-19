import inicio from "../views/loginUsers.vue"
 
import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {path:"/", component:inicio}
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})