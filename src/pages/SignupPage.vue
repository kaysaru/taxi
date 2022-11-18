<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="card text-center mt-5 w-50">
        <div class="card-body">
          <h5 class="card-title mb-3">Зарегистрироваться</h5>
          <p v-if="error" style="color: orangered">Что-то пошло не так...</p>
          <form>
            <div class="form-group mb-3">
              <label for="exampleInputLogin1">Ваш логин</label>
              <input v-model="username" type="text" class="form-control" id="exampleInputLogin1"
                     aria-describedby="emailHelp" placeholder="Введите логин">
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputEmail1">Ваша почта</label>
              <input v-model="email" type="email" class="form-control" id="exampleInputEmail1"
                     aria-describedby="emailHelp" placeholder="Введите почту">
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword1">Пароль <span v-if="this.notSimilarPasswords" style="color: orangered">Пароли не одинаковые</span></label>
              <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                     placeholder="Введите пароль">
            </div>
            <div class="form-group mb-3">
              <label for="exampleInputPassword2">Повторите пароль</label>
              <input v-model="repeatPassword" type="password" class="form-control" id="exampleInputPassword2"
                     placeholder="Повторно введите пароль">
            </div>
            <button type="button" @click.prevent="signup" class="btn btn-primary">Зарегистрироваться</button>
          </form>
          <div class="mb-3 mt-3">
            Уже есть аккаунт?
            <router-link to="/login">Войти</router-link>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupPage",
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      error: false,
      notSimilarPasswords: false
    }
  },
  methods: {
    signup() {
      if (this.password !== this.repeatPassword) {
        this.notSimilarPasswords = true;
        return
      }
      this.notSimilarPasswords = false;
      const url = "http://localhost:3000/api/auth/signup";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          username: this.username,
          email: this.email,
          password: this.password,
          role: ["user"]
        }),
      };
      fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "User was registered successfully!") {
              setTimeout(() => this.$router.push("/login"), 3000)
              return
            }
            this.error = true;
          }).catch((e) => {
        console.error(e)
      })

    }
  }
}
</script>

<style scoped>

</style>