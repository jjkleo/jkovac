import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeIndex: 1,
    count:0 ,//return this.$store.state.count;
    list: [1 , 5 , 8 , 10 , 30 , 50],
  },
  getters:{
    //return this.$store.getters.filteredList
    filteredList: (state)=>{
      return state.list.filter(item=>item<10);
    },
    listCount: (state,getters)=>{
      return getters.filteredList.length;
    }
  },
  mutations: {
    changeActiveIndex:(state,index)=>{
      state.activeIndex=index;
    },
    //this.$store.commit('increment',5);
    increment(state, n=1){
      state.count+=n;
    },
    //this.$store.commit('decrease');
    decrease(state){
      state.count--;
    },
    /**
     * this.$store.commit({
     *  type:'withParam',
     *  count: 5
     * })
     */
    withParams(state,params){
      state.count+=params.count;
    }
  },
  actions: {
    //this.$store.dispatch('increment');
    increment(context){
      context.commit('increment',1);
    }
  },
  modules: {
    
  }
});
