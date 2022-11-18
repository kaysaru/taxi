<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Taxi</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link" :class="{' active': getRoute === '/'}">Главная</router-link>
        </li>
        <li v-if="this.$store.getters.isLoggedIn" class="nav-item">
          <router-link to="/map" class="nav-link" :class="{' active': getRoute === '/map'}">Карта</router-link>
        </li>
        <li v-if="this.$store.getters.isLoggedIn" class="nav-item">
          <router-link to="/orders" class="nav-link" :class="{' active': getRoute === '/orders'}">Заказы</router-link>
        </li>
        <li v-if="!this.$store.getters.isLoggedIn" class="nav-item">
          <router-link to="/login" class="nav-link" :class="{' active': getRoute === '/login'}">Войти</router-link>
        </li>
        <li v-if="!this.$store.getters.isLoggedIn" class="nav-item">
          <router-link to="/signup" class="nav-link" :class="{' active': getRoute === '/signup'}">Зарегистрироваться
          </router-link>
        </li>
      </ul>
    </div>
    <div v-if="this.$store.getters.isLoggedIn" style="width: auto">
      <h5 class="navbar-text" style="color: white">
        {{ $store.getters.getUser.username }}</h5>
      <button class="btn btn-light" @click="unlogin">Выйти</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    unlogin() {
      this.$store.commit("setUser", null);
      this.$store.commit("setLoggedIn", false)
      this.$router.push("/")
    }
  },
  computed: {
    getRoute() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
nav {
  padding-left: 1em;
  padding-right: 1em;
}
</style>
