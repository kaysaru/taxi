<template>
  <div id="map" ref="map" :style="styles" @click="trackMarkers"></div>
</template>

<script>
// eslint-disable-next-line
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
    },
    static: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    order_menu: Boolean
  },
  data() {
    return {
      map: null,
      marker_from: null,
      marker_to: null
    }
  },
  methods: {
    trackMarkers() {
      if (this.order_menu === true) {

        let mtc = {
          lat: this.marker_to._latlng.lat,
          lng: this.marker_to._latlng.lng
        }
        let mfc = {
          lat: this.marker_from._latlng.lat,
          lng: this.marker_from._latlng.lng
        }
        this.$emit('coords', {mtc: mtc, mfc: mfc})
      }
    },
    init() {
      // eslint-disable-next-line no-undef
      this.map = DG.map(this.$refs.map, {
        'center': this.center,
        'zoom': this.zoom,
        'dragging': !this.static,
        'touchZoom': !this.static,
        'scrollWheelZoom': !this.static,
        'doubleClickZoom': !this.static,
        'boxZoom': !this.static,
        'geoclicker': !this.static,
        'zoomControl': !this.static,
        'fullscreenControl': !this.static
      });
    }
  },
  mounted() {
    this.init()
  },
  watch: {
    order_menu() {
      if (this.order_menu === true) {
        // eslint-disable-next-line no-undef
        this.marker_to = DG.marker([51.12, 71.43], {
          draggable: true
        }).addTo(this.map).bindPopup('Точка прибытия');

        // eslint-disable-next-line no-undef
        this.marker_from = DG.marker([51.13, 71.45], {
          draggable: true
        }).addTo(this.map).bindPopup('Точка отправления');
      } else {
        this.marker_from.removeFrom(this.map)
        this.marker_to.removeFrom(this.map)
      }
    }
  }
}
</script>

<style scoped>
#map {
  z-index: 0;
}
</style>
