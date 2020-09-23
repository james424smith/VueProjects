import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e84f44e = () => interopDefault(import('..\\pages\\books\\index.vue' /* webpackChunkName: "pages/books/index" */))
const _7cce5306 = () => interopDefault(import('..\\pages\\books\\_slug.vue' /* webpackChunkName: "pages/books/_slug" */))
const _2ac2ffdc = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/books",
    component: _7e84f44e,
    name: "books"
  }, {
    path: "/books/:slug",
    component: _7cce5306,
    name: "books-slug"
  }, {
    path: "/",
    component: _2ac2ffdc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
