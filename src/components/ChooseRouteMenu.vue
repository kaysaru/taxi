<template>
  <div class="d-flex container" :class="menuStyle">
    <div class="taxi-menu rounded-3">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn-close mb-3" @click="closeMenu" aria-label="Close"></button>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="input-group mb-0">
            <span class="input-group-text">Имя</span>
            <input type="text" class="form-control" v-model="name"></div>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="input-group mb-3">
            <span class="input-group-text">Откуда</span>
            <input type="text" class="form-control" placeholder="Точка отправления" aria-label="Точка отправления"
                   :value="route_from">
          </div>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Точка прибытия" aria-label="Точка прибытия"
                   :value="route_to">
            <span class="input-group-text">Куда</span>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-evenly">
        <div class="card text-white bg-info mt-3" style="max-width: 18rem;">
          <div class="card-header">Выбранный тип поездки</div>
          <div class="card-body">
            <h5 class="card-title">{{ travel_type === 'taxi' ? 'Такси' : 'Доставка' }}</h5>
          </div>
        </div>
        <button type="button" class="btn btn-lg btn-outline-primary mt-3" @click="saveOrder">Заказать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseRouteMenu",
  props: {
    marker_from_coords: {
      type: Object,
      // eslint-disable-next-line vue/require-valid-default-prop
      default() {
        return {
          lat: 0, lng: 0
        }
      }
    },
    marker_to_coords: {
      type: Object,
      default() {
        return {
          lat: 0, lng: 0
        }
      }
    },
    travel_type: String
  },
  data() {
    return {
      route: {
        name: '',
        route_from: '',
        route_to: '',
        time: Date
      },
      name: '',
      isCreated: false,
      success: false
    }
  },
  created() {
    this.isCreated = true
  },
  methods: {
    async saveOrder() {
      const url = "http://localhost:3000/api/addorder";
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          'Access-Control-Allow-Origin': '*',
          'x-access-token': this.$store.getters.getUser.accessToken
        },
        body: JSON.stringify({
          name: this.name,
          from: this.route_from,
          to: this.route_to,
          referer: this.$store.getters.getUser.username
        }),
      };
      await fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
            if (data.message === "Order was added!")
              this.success = true
          }).catch((e) => {
        console.error(e)
      })
      if (this.success) {
        let order = {
          name: this.name,
          route_from: this.route_from,
          route_to: this.route_to,
          date: this.getDate
        }
        this.$store.commit("addToOrders", order)
        this.$emit('routeclose')
        await this.$router.push("/orders")
      }

    },
    closeMenu() {
      this.isCreated = false
      setTimeout(() => this.$emit('routeclose'), 100)
    }
  },
  computed: {
    route_to() {
      return this.marker_to_coords.lat.toFixed(3) + ", " + this.marker_to_coords.lng.toFixed(3)
    },
    route_from() {
      return this.marker_from_coords.lat.toFixed(3) + ", " + this.marker_from_coords.lng.toFixed(3)
    },
    getDate() {
      return new Date().toLocaleString()
    },
    menuStyle() {
      return {
        'new-container': this.isCreated,
        'destroy-container': !this.isCreated
      }
    }
  }
}
</script>

<style scoped>
@keyframes append-anim {
  from {
    transform: translateY(1000px);
  }
  to {
    transform: translateY(0%);
  }
}

@keyframes destroy-anim {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(1000px);
  }
}

.new-container {
  animation: append-anim .1s linear
}

.destroy-container {
  animation: destroy-anim .1s linear;
}

.container {
  position: relative;
}

.taxi-menu {
  position: absolute;
  background-color: white;
  top: 30em;
  width: 100%;
  padding: 1em;
  height: 45vh;
}
</style>
