<template>
  <div>
    <div class="container mt-2">
      <div v-if="order !== null" class="fs-5">
        <!--        <table class="table table-borderless">-->
        <!--          <thead>-->
        <!--          <tr>-->
        <!--            <th>Имя</th>-->
        <!--            <th>Откуда</th>-->
        <!--            <th>Куда</th>-->
        <!--            <th>Дата поездки</th>-->
        <!--          </tr>-->
        <!--          </thead>-->
        <!--          <tbody>-->
        <!--          <tr>-->
        <!--            <td>-->
        <!--              <span v-if="order.name.length !== 0">{{ order.name }}</span>-->
        <!--              <span v-else class="text-muted">(Без имени)</span>-->
        <!--            </td>-->
        <!--            <td>{{ order.route_from }}</td>-->
        <!--            <td>{{ order.route_to }}</td>-->
        <!--            <td>{{ order.date }}</td>-->
        <!--          </tr>-->
        <!--          </tbody>-->
        <!--        </table>-->
        <div class="fw-bold">Имя</div>
        <div><span v-if="order.name.length !== 0">{{ order.name }}</span>
          <span v-else class="text-muted">(Без имени)</span></div>
        <br>
        <div class="fw-bold">Откуда</div>
        <div>{{ order.route_from }}</div><br>
        <div class="fw-bold">Куда</div>
        <div>{{ order.route_to }}</div><br>
        <div class="fw-bold">Дата</div>
        <div>{{ order.date }}</div>
      </div>
      <div class="text-center mt-5 fs-5" v-else>
        <span>Выберите заказ для просмотра деталей</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrdersComponentCurrent",
  props: {
    order: Object
  }
}
</script>

<style scoped>

</style>
