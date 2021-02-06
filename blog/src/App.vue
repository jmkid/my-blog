<template>
  <div id="app">
    <router-view/>
<!--    <canvas id="canvas1"></canvas>-->
    <canvas id="canvas2"></canvas>
  </div>
</template>
<script>
// import {mycanvas} from "@/canvas";
import {zhihu} from "@/canvas2"

export default {
  components: {

  },

  mounted() {
    this.showCanvas()
  },
  methods: {
    showCanvas() {
      // mycanvas()
      zhihu()
    }
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#canvas1 {
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  @media(max-width: 900px) {
    display: none;
  }
  @media(max-width: 320px) {
    display: none;
  }
}
#canvas2{
  pointer-events: none;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  @media(max-width: 900px) {
  display: none;
}
  @media(max-width: 320px) {
    display: none;
  }
}
</style>
