<template>
  <div class="clock">

    <div class="time">
      <div id="biaopan">
        <!--表针中心的点-->
        <div id="dian"></div>
        <!--时针-->
        <div id="shi"></div>
        <!--分针-->
        <div id="fen"></div>
        <!--秒针-->
        <div id="miao"></div>
      </div>
      <div id="now"></div>
    </div>
  </div>
</template>
<!--<script src="../time.js"></script>-->


<script>
import {time} from "@/time.js"

export default {
  name: "clock",
  mounted() {
    this.showClock()
  },
  methods: {
    showClock() {
      time()
    }
  }
}
</script>

<style scoped>
.time {
  padding: 10px;
  box-shadow: 0 0 10px #c8c7c7;
}

#biaopan {
  width: 150px;
  height: 150px;
  margin: 30px auto;
  margin-bottom: 10px;
  background: url('../assets/biaopan.jpg') no-repeat center center;
  background-size: 130%;
  position: relative;
}

#miao {
  width: 2px;
  height: 60px;
  background-color: #000;
  border-radius: 1.5px 1.5px 0 0;
  position: absolute;
  left: 75.6px;
  top: 17px;
}

#fen {
  width: 4px;
  height: 45px;
  background-color: black;
  border-radius: 2.5px 2.5px 0 0;
  position: absolute;
  left: 75px;
  top: 33px;
}

#shi {
  width: 5px;
  height: 29px;
  background-color: black;
  border-radius: 3.5px 3.5px 0 0;
  position: absolute;
  left: 74px;
  top: 47px;
}

#dian {
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 50% 50%;
  position: absolute;
  left: 72px;
  top: 73px;
  z-index: 1;
}

#now {
  text-align: center;
}
</style>