<template>
  <div class="taxi">
    <tGisMap
        :center="[51.12, 71.43]"
        :marker="[51.12, 71.43]"
        :styles="{width: '100%', height: '94vh'}"
        :zoom="12"/>
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
.taxi {
  overflow: hidden;
  height: 94vh;
}
</style>
