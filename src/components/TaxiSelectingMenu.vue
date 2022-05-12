<template>
  <div class="taxi-menu" :style="{top: this.top + 'px'}">
    <div class="row mb-2">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Куда едем?</h5>
            <div class="card-text">Выберите куда хотите поехать на такси
              <svg class="bi bi-arrow-right-circle-fill"></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-2">
      <div class="col">
        <div class="row">
          <div class="col pe-1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Куда едем?</h5>
                <div class="card-text">Выберите куда хотите поехать на такси</div>
              </div>
            </div>
          </div>
          <div class="col ps-1">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Куда едем?</h5>
                <div class="card-text">Выберите куда хотите поехать на такси</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="row mb-2">
        <div class="col col pe-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Такси</h5>
            </div>
          </div>
        </div>
        <div class="col col ps-1">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Доставка</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaxiSelectingMenu",
  props: {
    top: {
      type: Number,
      default: 50
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
  height: 65vh;
}
</style>
