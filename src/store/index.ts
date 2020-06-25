import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [1 , 5 , 8 , 10 , 30 , 50],
    filteredImages:[],
    images:[
      {
        id:'1',
        name:'刘德华',
        url:'/static/image/personage/liudehua.jpg',
      },
      {
        id:'2',
        name:'成龙',
        url:'/static/image/personage/chenglong.jpg',
      },
      {
        id:'3',
        name:'李小龙',
        url:'/static/image/personage/lixiaolong.jpg',
      },
      {
        id:'4',
        name:'张家辉',
        url:'/static/image/personage/zhangjiahui.jpg',
      },
      {
        id:'5',
        name:'周润发',
        url:'/static/image/personage/zhourunfa.jpg',
      },
      {
        id:'6',
        name:'周星驰',
        url:'/static/image/personage/zhouxingchi.jpg',
      },

      {
        id:'7',
        name:'刘德华2',
        url:'/static/image/personage/liudehua.jpg',
      },
      {
        id:'8',
        name:'成龙2',
        url:'/static/image/personage/chenglong.jpg',
      },
      {
        id:'9',
        name:'李小龙2',
        url:'/static/image/personage/lixiaolong.jpg',
      },
      {
        id:'10',
        name:'张家辉2',
        url:'/static/image/personage/zhangjiahui.jpg',
      },
      {
        id:'11',
        name:'周润发2',
        url:'/static/image/personage/zhourunfa.jpg',
      },
      {
        id:'12',
        name:'周星驰2',
        url:'/static/image/personage/zhouxingchi.jpg',
      },


      {
        id:'13',
        name:'刘德华y',
        url:'/static/image/personage/liudehua.jpg',
      },
      {
        id:'14',
        name:'成龙',
        url:'/static/image/personage/chenglong.jpg',
      },
      {
        id:'15',
        name:'李小龙y',
        url:'/static/image/personage/lixiaolong.jpg',
      },
      {
        id:'16',
        name:'张家辉y',
        url:'/static/image/personage/zhangjiahui.jpg',
      },
      {
        id:'17',
        name:'周润发y',
        url:'/static/image/personage/zhourunfa.jpg',
      },
      {
        id:'18',
        name:'周星驰y',
        url:'/static/image/personage/zhouxingchi.jpg',
      },

      {
        id:'19',
        name:'刘德华2y',
        url:'/static/image/personage/liudehua.jpg',
      },
      {
        id:'20',
        name:'成龙2y',
        url:'/static/image/personage/chenglong.jpg',
      },
      {
        id:'21',
        name:'李小龙2y',
        url:'/static/image/personage/lixiaolong.jpg',
      },
      {
        id:'22',
        name:'张家辉2y',
        url:'/static/image/personage/zhangjiahui.jpg',
      },
      {
        id:'23',
        name:'周润发2y',
        url:'/static/image/personage/zhourunfa.jpg',
      },
      {
        id:'24',
        name:'周星驰2y',
        url:'/static/image/personage/zhouxingchi.jpg',
      },
    ]
  },
  getters:{
    //return this.$store.getters.filteredList
    filteredList: (state)=>{
      return state.list.filter(item=>item<10);
    },
    listCount: (state,getters)=>{
      return getters.filteredList.length;
    },
    total:(state)=>{
      return state.images.length;
    }
  },
  mutations: {
    getImages:(state,params)=>{
      var start=params.pageSize*(params.currentPage-1);
      var end=params.pageSize*params.currentPage;
      state.filteredImages=state.images.slice(start,end);
    },
    /**
     * this.$store.commit({
     *  type:'withParam',
     *  count: 5
     * })
     */
    // withParams(state,params){
    //   state.count+=params.count;
    // }
    
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
