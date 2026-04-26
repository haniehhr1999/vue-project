import {createRouter , createWebHistory} from 'vue-router'
import HomeMe from './pages/HomeMe.vue'
import AboutMe from './pages/AboutMe.vue'
import UserListMe from './pages/UserListMe.vue'

const routes = [
    {
        path: '/' , 
        name: 'home' , 
        component : HomeMe
    } , 
    {
        path: '/about' , 
        name: 'about' , 
        component : AboutMe
    } , 
    {
        path: '/users' , 
        name: 'users' , 
        component : UserListMe
    } ,
]

const router = createRouter({
    history: createWebHistory() , 
    routes : routes
})

export default router

