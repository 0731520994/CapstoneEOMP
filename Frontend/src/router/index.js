
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    
    path: '/about',
    name: 'about',
   
    component: () => import('../views/AboutView.vue')
  },
  {
    
    path: '/admin',
    name: 'admin',
   
    component: () => import('../views/AdminView.vue')
  },
  {
  
    path: '/products',
    name: 'all',
   
    component: () => import('../views/AllView.vue')
  },
  {
  path: '/categories',
  name: 'categories',
 
  component: () => import('../views/CategoriesView.vue')
},
{
  path: '/checkout',
  name: 'checkout',
 
  component: () => import('../views/CheckoutView.vue')
},
{
  path: '/contact',
  name: 'contact',
 
  component: () => import('../views/ContactView.vue')
},
{
  path: '/single/:prodID',
  name: 'single',
 
  component: () => import('../components/SingleView.vue')
},
{
  path: '/signUp',
  name: 'signUp',
 
  component: () => import('../views/RegisterView.vue')
},
{
  path: '/signIn',
  name: 'signIn',
 
  component: () => import('../views/LoginView.vue')
},
];
  
  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router