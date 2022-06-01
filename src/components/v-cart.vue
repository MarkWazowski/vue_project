<template>
	<div class="v-cart">
		
	</div>	
</template>

<script>
	export default {
		name: 'v-cart',
		components:{

		},
		props:{},//в пропс прилетает из родителя
		data(){//дата - персональные данные 
			return {
				
			}
		},

	}
</script>


<style>
	.v-cart {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		max-width: 900px;
		margin: 0;
	}
</style>
