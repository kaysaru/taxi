<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="card text-center mt-5 w-50">
        <div class="card-body">
          <h5 class="card-title mb-3">Войти</h5>
          <h5 v-if="this.errorType" style="color: orangered"> {{ this.errorType }}</h5>
          <form>
            <div class="form-group mb-3">
              <label for="exampleInputEmail1">Логин</label>
              <input v-model="username" type="text" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp"
                     placeholder="Введите логин">
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Пароль</label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                     placeholder="Введите пароль">
            </div>
            <button type="button" @click.prevent="sendCreds" class="btn btn-primary">Войти</button>
          </form>
        </div>
        <div class="mb-3">
          Нет аккаунта?
          <router-link to="/signup">Зарегистрироваться</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      username: '',
      password: '',
      success: null,
      errorType: '',
      errorTypes: {
        invalidPassword: "Неправильный пароль",
        noSuchLogin: "Неправильный логин"
      }
    }
  },
  methods: {
    sendCreds() {
      const url = "http://localhost:3000/api/auth/signin";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.message) {
              if (data.message === "User Not found.") {
                this.errorType = this.errorTypes.noSuchLogin
              } else if (data.message === "Invalid Password!") {
                this.errorType = this.errorTypes.invalidPassword
              }
              return
            }
            if (data.accessToken) {
              this.$store.commit("setLoggedIn", true)
              this.$store.commit("setUser", data)
              this.success = true
              this.errorType = ''
              this.$router.push("/map")
            }
            console.log(data);
          }).catch((e) => {
        console.error(e)
      })
    }
  }
}
</script>

<style scoped>

</style>