import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "./../views/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        redirect: "/explore",
      },
      {
        path: "/explore",
        name: "Explore",
        component: () =>
          import(/* webpackChunkName: "Explore" */ "../views/Explore.vue"),
      },
      {
        path: "/library",
        name: "Library",
        component: () =>
          import(/* webpackChunkName: "Library" */ "../views/Library.vue"),
      },
      {
        path: "/library/:id",
        name: "Library",
        component: () =>
          import(
            /* webpackChunkName: "Library-detail" */ "../views/QuizView.vue"
          ),
      },
      {
        path: "/explore/:id",
        name: "Library",
        component: () =>
          import(/* webpackChunkName: "Library" */ "../views/QuizView.vue"),
      },
      {
        path: "/question/:id",
        name: "Question",
        component: () =>
          import(
            /* webpackChunkName: "Library-detail" */ "../views/QuestionDetail.vue"
          ),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/verify",
    name: "Verify",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Verify.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
