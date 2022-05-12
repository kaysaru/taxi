<template>
  <div>
    <tGisMap
        :center="[54.98, 82.89]"
        :marker="[54.98, 82.89]"
        :styles="{width: '100%', height: '100vh'}"
        :zoom="16"/>
      <TaxiSelectingMenu/>
  </div>
</template>

<script>
import tGisMap from "@/components/tGisMap"
import TaxiSelectingMenu from "@/components/TaxiSelectingMenu";

export default {
  name: "Order",
  components: {TaxiSelectingMenu, tGisMap}
}
</script>

<style scoped>

</style>
