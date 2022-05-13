<template>
  <div class="d-flex container">
    <div class="taxi-menu border border-primary">
      <div class="d-flex justify-content-end">
        <button type="button" class="btn-close mb-3" @click="$emit('routeclose')" aria-label="Close"></button>
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
  name: "OrderMenu",
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
        route_from: '',
        route_to: '',
        time: Date
      },
      name: ''
    }
  },
  methods: {
    saveOrder() {
      let order = {
        name: this.name,
        route_from: this.route_from,
        route_to: this.route_to,
        date: this.getDate
      }
      console.log(order)
    }
  },
  computed: {
    route_to() {
      return this.marker_to_coords.lat + ", " + this.marker_to_coords.lng
    },
    route_from() {
      return this.marker_from_coords.lat + ", " + this.marker_from_coords.lng
    },
    getDate() {
      return new Date().toLocaleString()
    }
  }
}
</script>

<style scoped>

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
