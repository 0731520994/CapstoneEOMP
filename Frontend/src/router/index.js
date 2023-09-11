
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



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
 
  component: () => import('../views/CheckoutView.vue'),
  beforeEnter() {
    if(!cookies.get('LegitUser')) {
      router.push({name: 'signIn'})
    }
  }
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
  path: '/cart/:prodID',
  name: 'addTocart',
 
  component: () => import('../components/AddToCartView.vue')
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
  path: '/editProduct/:id',
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