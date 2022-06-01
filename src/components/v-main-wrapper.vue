<template>
	<div class="v-main-wrapper">
		<p>{{title}}</p>
		<v-catalog></v-catalog>
		<v-cart></v-cart>
		<v-catalog-item></v-catalog-item>
	</div>	
</template>

<script>
	
	import vCatalog from './v-catalog'
	import vCart from './v-cart'
	
	export default {
		name: 'v-main-wrapper',
		components:{
			vCatalog,vCart, 
		},
		props:{},//в пропс прилетает из родителя
		data(){//дата - персональные данные 
			return {
				title: 'Main title!!!'
			}
		},

	}
</script>


<style>
	.v-main-wrapper {
		
		
		
	}
</style>

