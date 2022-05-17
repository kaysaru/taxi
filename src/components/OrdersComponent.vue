<template>
  <div>
    <ul class="list-group overflow">
      <li class="list-group-item list-group-item-action" :class="{active: order.date === selected.date}" v-for="(order, i) in orders" :key="orders[i].name" @click="emitSelectedOrder(order)">
        <span v-if="order.name.length !== 0">{{ order.name }}</span>
        <span v-else class="text-muted">(Без имени)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "OrdersComponent",
  props: {
    orders: Object
  },
  emits: {
    onselectorder(item) {
      return true
    }
  },
  data () {
    return {
      selected: {}
    }
  },
  methods: {
    emitSelectedOrder(order) {
      this.selected = order
      this.$emit('onselectorder', order)
    }
  }
}
</script>

<style scoped>
.overflow {
  overflow-y: auto !important;
}
</style>
