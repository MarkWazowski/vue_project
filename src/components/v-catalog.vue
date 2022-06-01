
<template>
	<h1>Catalog</h1>
	<div class="v-catalog">	
		<v-catalog-item
		v-for="product in this.$store.state.products"
		:key="product.article"
		:product_data="product"
		@sendArticle="showChildArticleToConsole"
		/>
		
	</div>	
</template>

<script>

	import vCatalogItem from './v-catalog-item'
	import {mapActions} from 'vuex'//
	export default {
		name: 'v-catalog',
		components:{
			vCatalogItem,
		},
		props:{},//в пропс прилетает из родителя
		data(){//дата - персональные данные 
			return {
				
			}
		},
		methods:{
			...mapActions([
					'GET_PRODUCTS_FROM_API'
				]),
			showChildArticleToConsole(data){
				console.log(data);
			}
		},
		mounted(){
			this.GET_PRODUCTS_FROM_API()
		}


	}
</script>


<style>
.v-catalog {
    display: grid;
    justify-content: center;
    margin: 0;
    grid-template-columns: 1fr 1fr 1fr;
    width: 800px;
    margin: 0 auto;
    grid-gap: 5%;
}
</style>