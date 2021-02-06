<template>
  <div id="home">

  </div>
</template>

<script>
export default {
  name: 'BookPage',
}
</script>

<style lang="scss">
#home {

}

.container {
  display: flex;
  flex-direction: column;
}

.head {
  z-index: 99998;
  background-color: deepskyblue;
  opacity: 0.9;
  height: 60vh;
  //min-height: 300px;
  @media(max-width: 700px) {
    height: 20vh
  }
  @media(max-width: 320px) {
    height: 20vh;
  }
}

.contain {
  flex: 1;
  display: flex;
  flex-direction: row;
  height: auto;
}

.aside-left {
  margin: 5px 0 5px 4vw;
  padding: 5px;
  box-shadow: 0 10px 10px #c8c7c7;
  background-color: #FFF;
  //flex: 1;
  flex: 0 1 200px;
  @media(max-width: 900px) {
    display: none;
  }
  @media(max-width: 320px) {
    display: none;
  }
}

.main {
  padding: 30px;
  margin: 2vw;
  //flex: 0 4 80vw;
  flex: 4;
  box-shadow: 0 0 20px #c8c7c7;

}

.aside-right {
  margin: 5px 4vw 5px 5px;
  padding: 5px;
  box-shadow: 0 10px 10px #c8c7c7;
  flex: 0 1 260px;
  background-color: #FFF;
  @media(max-width: 900px) {
    display: none;
  }
}

.foot {
  flex: 1;
  background-color: #5252d9;
  text-align: center;
}

a {
  color: black;
  text-decoration: none;
}
</style>