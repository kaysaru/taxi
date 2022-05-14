<template>
  <div class="container">
    <div class="taxi-menu rounded-3" :style="topStyle">
      <div class="row mb-2">
        <div class="col">
          <div class="card" @click="$emit('route', travelType)">
            <div class="card-body">
              <h5 class="card-title">
                Куда едем?
              </h5>
              <div class="card-text">
                Выберите куда хотите поехать на такси
              </div>
              <span class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                       class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="row mb-2">
          <div class="col col pe-1">
            <div class="card" @click="this.travelType = 'taxi'" :class="{'card-active': this.travelType === 'taxi'}">
              <div class="card-body">
                <h5 class="card-title">Такси</h5>
                <span class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                       class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div class="col col ps-1">
            <div class="card" @click="this.travelType = 'delivery'" :class="{'card-active': this.travelType === 'delivery'}">
              <div class="card-body">
                <h5 class="card-title">Доставка</h5>
                <span class="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                       class="bi bi-box2-fill" viewBox="0 0 16 16">
                    <path
                        d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5ZM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6l.5.667Z"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MapMenu",
  props: {
    top: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      travelType: 'taxi'
    }
  },
  methods: {
    chooseTaxi() {
      this.travelType = 'taxi';
    },
    chooseDelivery() {
      this.travelType = 'delivery';
    }
  },
  computed: {
    topStyle() {
      return {
        top: this.top * 0.06 + 'em',
        transition: '0.1s ease-out',
      }
    }
  },
  watch: {
    travelType() {
      this.$emit('traveltype', this.travelType)
    }
  }
}
</script>

<style scoped>
.taxi-menu {
  position: absolute;
  background-color: white;
  width: 100%;
  padding: 1em;
  height: 45vh;
}

.container {
  position: relative;
}

.card:hover {
  background-color: #eaeaea;
}

.card:active {
  background-color: lightgray;
}

.card-active {
  background-color: lightgray;
}

.card {
  cursor: pointer;
  transition: background-color .1s linear 100ms
}

.arrow {
  position: absolute;
  right: 2em;
  vertical-align: center;
  top: 50%;
  -ms-transform: translateY(-50%) translateX(-50);
  transform: translateY(-50%);
}
</style>
