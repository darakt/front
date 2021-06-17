import { createRouter, createWebHistory } from 'vue-router'
import Connection from './components/Connection';
import Home from './components/Home';

const routes = [
  { path: '/', component: Connection },
  { path: '/home', component: Home}
]

export const router = new createRouter({ 
  history: createWebHistory(),
  routes,
})