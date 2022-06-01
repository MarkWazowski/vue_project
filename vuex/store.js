 /* eslint-disable */
import { createApp } from 'vue'
import { createStore } from 'vuex'
import { axios } from 'axios'

// Create a new store instance.
const store = createStore({
  state:{
  	products:[]
  },//1) ШАГ записываем новый массив продуктс - он пустой
  mutations: {
  	SET_PRODUCTS_TO_STATE: (state, products)=>{
  		state.products = products;//массив продуктс из стейта будет продуктсом, который мы получили в actions
  	}
  },
  actions:{
  	GET_PRODUCTS_FROM_API({commit}){//асинхронный метод
  		return axios('http://localhost:3000/products',{//2) ШАГ вызываем ахиос запрос
  			method: "GET"//3) Зайди на этот УРЛ и получи этот продуктс
  		})//ахиос - это промис
  		.then((products)=>{
  			return products;// возвращаем то, что прислал промис ахиос
  			commit('SET_PRODUCTS_TO_STATE', products)//положить продуктс в state, конструкция commit вызывает мутацию 
  		})
  		.catch(error=>{console.log(error);return error})
  	}
  },
  getters:{
  	PRODUCTS(state){
  		return state.products;
  	}//получатель, хранитель локальный. Мы говорим ему - верни то, что лежит в state - там объект со свойством products - реактивность - когда продуктс будет изменяться - геттер будет автоматически обновлять данные в компонент
  },

})

const app = createApp({ /* your root component */ })

// Install the store instance as a plugin
app.use(store)