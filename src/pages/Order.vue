<template>
  <div class="taxi">
    <tGisMap class="tgmap"
             @click="closeMenu"
             @coords="handleCoords"
             :center="[51.12, 71.43]"
             :marker="[51.12, 71.43]"
             :styles="{width: '100%', height: '94vh'}"
             :zoom="12"
             :order_menu="order_menu"
    />
    <MapMenu v-if="order_menu !== true"
                       :top="scroll"
                       @click="open"
                       @route="order_menu = true"
                       @traveltype="travelTypeChange"
                       @wheel="scrollControl"
    />
    <ChooseRouteMenu v-if="order_menu === true"
               @routeclose="order_menu = false"
               :travel_type="travelType"
               :marker_to_coords="marker_to_coords"
               :marker_from_coords="marker_from_coords"
    />
  </div>
</template>

<script>
import tGisMap from "@/components/tGisMap"
import MapMenu from "@/components/MapMenu";
import ChooseRouteMenu from "@/components/ChooseRouteMenu";

export default {
  name: "Order",
  components: {ChooseRouteMenu, MapMenu, tGisMap},
  data() {
    return {
      order_menu: false,
      scroll: 740,
      travelType: 'taxi',
      marker_to_coords: {
        lat: 0,
        lng: 0
      },
      marker_from_coords: {
        lat: 0,
        lng: 0
      }
    }
  },
  methods: {
    scrollControl(e) {
      if (this.scroll <= this.max && this.scroll >= this.min)
        this.scroll += e.deltaY * -0.4
    },
    handleCoords(e) {
      this.marker_to_coords = e.mtc
      this.marker_from_coords = e.mfc
    },
    travelTypeChange(e) {
      this.travelType = e.travelType;
    },
    closeMenu() {
      this.scroll = this.max
    },
    open() {
      if (this.scroll !== this.min)
        this.scroll = this.min;
    },
    chooseTaxi() {
      this.travelType = 'taxi';
    },
    chooseDelivery() {
      this.travelType = 'delivery';
    }
  },
  computed: {
    max() {
      return 740;
    },
    min() {
      return 510;
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
  width: 100%;
  overflow: hidden;
}

.tgmap {
  position: absolute;
}
</style>
