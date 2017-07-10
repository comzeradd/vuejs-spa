<template>
  <div>
    <div class="page-wrap">
      <b-navbar toggleable type="light bg-faded">
        <div class="container">
          <b-nav-toggle target="nav_collapse"></b-nav-toggle>

          <b-link class="navbar-brand" to="#">
            <router-link :to="{ name: 'home'}" class="navbar-brand"><img src="./assets/img/app.png" alt="logo"></router-link>
          </b-link>

          <b-collapse is-nav id="nav_collapse">
            <b-nav is-nav-bar>
              <b-nav-item :to="{ name: 'home'}" exact class="m-2">Home</b-nav-item>
              <b-nav-item :to="{ name: 'about'}" class="m-2">About</b-nav-item>
              <b-nav-item :to="{ name: 'contact'}" class="m-2">Contact</b-nav-item>
            </b-nav>
          </b-collapse>
        </div>
      </b-navbar>

      <div class="content container">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>

    <footer>
      <div class="container">
        <a href="https://gitlab.com/comzeradd/vuejs-spa" target="_blank">source code</a>
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<style lang="scss">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import './app.scss';
</style>
