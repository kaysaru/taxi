<template>

  <div class="container">
    <div class="mt-5">
      <h2>Ваши заказы</h2>
    </div>
    <div class="row border border-secondary max-height" v-if="orders.length !== 0">
      <div class="col-4 px-0">
        <OrdersComponent :orders="orders" @onselectorder="getSelectedOrder"/>
      </div>
      <div class="col-8 px-0">
        <OrdersComponentCurrent :order="selectedOrder"/>
      </div>
    </div>
    <div class="text-center mt-4 mb-4" v-else>
      <span class="align-middle">
        Вы еще не сделали ни один заказ.
        <router-link to="/map">Сделайте сейчас!</router-link>
      </span>
    </div>
  </div>
</template>

<script>
import OrdersComponent from "@/components/OrdersComponent";
import OrdersComponentCurrent from "@/components/OrdersComponentCurrent";

export default {
  name: "OrdersPage",
  components: {OrdersComponentCurrent, OrdersComponent},
  data() {
    return {
      orders: [],
      selectedOrder: null
    }
  },
  created() {
    this.orders = this.$store.getters.getOrders
  },
  methods: {
    getSelectedOrder(e) {
      this.selectedOrder = e
    }
  }
}
</script>

<style scoped>
.max-height {
  min-height: 20vh;
  overflow: hidden;
}
</style>
