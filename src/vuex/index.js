import vue from'vue';
import vuex from 'vuex';
vue.use(vuex);
import home from './home'
const store= new vuex.Store({
    state:{
        tex:1
    },
    mutations:{

    },
    actions:{

    },
    getters:{

    },
    modules:{
        home:home
    }
})
export default store;