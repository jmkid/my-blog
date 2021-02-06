import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isCollapse: true,
        iconClass: 'el-icon-s-unfold'
    },
    getters:{
      getState(state){
          return state.isCollapse;
      },
      getIcon(state){
          return state.iconClass;
      }
    },
    mutations: {
        changeAsideState(state) {
            if (state.isCollapse === true) {
                state.isCollapse = false
                state.iconClass = "el-icon-s-fold"
            } else {
                state.isCollapse = true
                state.iconClass = "el-icon-s-unfold"
            }
        }
    },
    actions: {}
})
