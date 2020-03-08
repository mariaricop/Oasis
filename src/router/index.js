import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Servicios from "../views/Servicios.Vue";
import Hoteles from "../views/Hoteles.vue";
import Contacto from "../views/Contacto.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Servicios
  },
  {
    path: "/hoteles",
    name: "Hoteles",
    component: Hoteles
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto
  }
];

const router = new VueRouter({
  routes
});

export default router;
