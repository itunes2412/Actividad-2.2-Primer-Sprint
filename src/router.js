import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes
import MyComponent from './components/MyComponent.vue'
import Nosotros from './components/Nosotros.vue'
import Propiedades from './components/Propiedades.vue'
import Proyectos from './components/Proyectos.vue'
import Promocion from './components/Promoción.vue'
import Contacto from './components/Contacto.vue'
import Blog from './components/Blog.vue'
import Registro from './components/Registro.vue'


const routes = [
  {
    path: '/',
    name: 'MyComponent',
    component: MyComponent // Usar el componente 'MyComponent' aquí
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
  },
  {
    path: '/propiedades',
    name: 'Propiedades',
    component: Propiedades
  },
  {
    path: '/proyectos',
    name: 'Proyectos',
    component: Proyectos
  },
  {
    path: '/promocion',
    name: 'Promocion',
    component: Promocion
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


