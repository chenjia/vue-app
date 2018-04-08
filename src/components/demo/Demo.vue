<template>
	<div class="red" style="margin-top:100px;">
		<!-- <header></header> -->
		<p @click="clickEvent()">hello,{{name}},I am {{age}} years old,
		ten years later,I am {{add}}</p>
		<!-- v-model="age" => 
		value="age" 
		@input="val => this.age = val" es6 转化为 
		function(val){
			this.age = val
		}
		 -->
		}
		<p><input type="text" v-model="age"></p>
		<p>{{add}}</p>
		<p>{{add}}</p>
		<p>{{add}}</p>
		<p>{{add}}</p>
	</div>
</template>

<script>
// import header from './xxx/Header.vue'
export default {
	name:'demo',
	components:{
		// header
	},
	data(){
		return {
			name:'world',
			age:18,
			ready:true
		}
	},
	computed:{
		add(){
			console.log('add()')
			return this.age + 10
		}
	},
	methods:{
		clickEvent(){
			this.age = 100
		}
	},
	watch:{
		age(newVal, oldVal){
			alert(newVal+":"+oldVal)
		}
	},
	created(){
		// alert(111)
	},
	mounted(){
		// alert(123)
	}
}
</script>
<style type="text/css">
	.red{
		color:red;
	}
</style>