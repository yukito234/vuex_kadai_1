<template>
	<div>
		<todos-header></todos-header>
		<radio-selection></radio-selection>
		<todos-table></todos-table>
		<todo-addition></todo-addition>
	</div>
</template>

<script>
	import todosHeader from './todos-header.vue';
	import radioSelection from './radio-selection.vue';
	import todosTable from './todos-table.vue';
	import todoAddition from './todo-addition.vue';

	export default {
		components:{
			'todos-header':todosHeader,
			'radio-selection':radioSelection,
			'todos-table':todosTable,
			'todo-addition':todoAddition,
		},
	}
</script>