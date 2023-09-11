
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  

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
 props: true,
  component: () => import('../views/CheckoutView.vue'),
  
},
{
  path: '/contact',
  name: 'contact',
 
  component: () => import('../views/ContactView.vue'),
  afterEnter() {
    if(!cookies.get('LegitUser')) {
      router.push({name: 'signIn'})
    }
  }
},
{
  path: '/single/:prodID',
  name: 'single',
 
  component: () => import('../components/SingleView.vue')
},
{
  path: '/signIn',
  name: 'signIn',
 
  component: () => import('../views/SignInView.vue')
},
{
  path: '/register',
  name: 'register',
 
  component: () => import('../views/RegisterView.vue')
},
{
  path: '/addProduct',
  name: 'addProduct',
 
  component: () => import('../views/AddProductView.vue')
},
{
  path: '/editProduct/:prodID',
  name: 'editProduct',
  component: () => import('../views/EditProductView.vue')
},
{
  path: '/buttons',
  name: 'buttons',
  component: () => import('../views/ButtonsView.vue')
}


];
  
  


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router