<template>
	<div>
		<h2>新規タスクの追加</h2>
		<input type="text" v-model="taskInput">
		<button  v-on:click="add">追加</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				taskInput: "",
			};
		},
		methods:{
			add(){				
				this.$store.commit('taskAdd',this.taskInput);
				this.$store.commit('createId');
			},
		},
	}
</script>