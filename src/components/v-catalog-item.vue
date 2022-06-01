<template>
	<div class="v-catalog-item">
			<img :src=" require('@/assets/images/' + product_data.image) " alt="">
			<p class="v-catalog-item__name">{{ product_data.name }}</p>
			<p class="v-catalog-item__price">Price: {{ product_data.price }}</p>
			<button 
			class="v-catalog-item__add_to_cart_btn btn" 
			@click="sendDataToParent">
			Add to cart
			</button>
	</div>	
</template>

<script>
	export default {
		name: 'v-catalog-item',
		components:{

		},
		props:{
			product_data: {
				type: Object,
				default(){
					return {}
				},//указываем тип ожидаемого содержимого и дефолтное состояние перед принятием данных от родителя. Вызывается функция, возвращающая пустой объект

			},
		},//в пропс прилетает из родителя
		data(){//дата - персональные данные 
			return {
				
			}
		},
		methods:{
			sendDataToParent(){
				this.$emit('sendArticle', this.product_data.article)//sendArticle - как будет называться в родителе - 1ый параметр функции, 2ой параметр - то, что мы будем передавать 
			}
		}

	}
</script>


<style>
	.v-catalog-item {
		display: flex;
		flex-direction: column;
		box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
	}
	img{
		width: 100px;
		margin: 0 auto;
	}
</style>