<template>
  <div class="taxi">
    <tGisMap
        @click="closeMenu"
        :center="[51.12, 71.43]"
        :marker="[51.12, 71.43]"
        :styles="{width: '100%', height: '94vh'}"
        :zoom="12"/>
    <TaxiSelectingMenu
        @wheel="scrollControl" @="drag"
        :top="scroll"
    />
  </div>
</template>

<script>
import tGisMap from "@/components/tGisMap"
import TaxiSelectingMenu from "@/components/TaxiSelectingMenu";

export default {
  name: "Order",
  components: {TaxiSelectingMenu, tGisMap},
  data() {
    return {
      scroll: 740
    }
  },
  methods: {
    scrollControl(e) {
      if (this.scroll <= this.max && this.scroll >= this.min)
        this.scroll += e.deltaY * -0.4
    },
    closeMenu() {
      this.scroll = this.max
    },
    open(e) {
      if (this.scroll !== this.min)
        this.scroll = this.min;
      console.log(e)
    },
    drag(e) {
      console.log(e)
      // eslint-disable-next-line no-undef
      console.log($(document).height())
    }
  },
  computed: {
    max() {
      return 740;
    },
    min() {
      return 300;
    }
  },
  watch: {
    scroll() {
      if (this.scroll > this.max)
        this.scroll = this.max
      if (this.scroll < this.min)
        this.scroll = this.min
    }
  }
}
</script>

<style scoped>
.taxi {
  height: 94vh;
  position: relative;
  overflow: hidden;
}
</style>
