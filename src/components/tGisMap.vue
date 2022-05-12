<template>
  <div id="map" :style="styles"></div>
</template>

<script>
import gMap from '2gis-maps'

export default {
  name: "tGisMap",
  props: {
    center: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    marker: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    zoom: {
      type: Number,
      default: 13
    },
    styles: {
      type: Object,
      default: () => {
        return {width: '500px', height: '400px'}
      }
    }
  },
  methods: {
    init() {
      let map
      gMap.then(() => {
        // eslint-disable-next-line no-undef
        map = DG.map('map', {
          'center': this.center,
          'zoom': this.zoom
        });
        // eslint-disable-next-line no-undef
        DG.marker(this.marker).addTo(map)
      })
    }
  },
  created() {
    this.init()
  }
}
</script>

<style scoped>

</style>
