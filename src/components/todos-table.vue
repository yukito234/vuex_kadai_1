<template>
	<div>
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>コメント</th>
					<th>状態</th>
					<th></th>
					<th></th>
				</tr>
			</thead>
			<tbody id="todo-list">
				<tr v-for="element in filteredTodos" v-bind:key="element.id">
					<td>{{element.id}}</td>
					<td>{{element.taskName}}</td>
					<td>
						<button v-on:click="statusChangeTell(element.id)">{{element.status}}</button>
					</td>
					<td>
						<button v-on:click="deleteTell(element.id)">delete</button>
					</td>
				</tr>
			</tbody>
		</table>
    </div>
</template>

<script>
	export default {		
		methods:{
			statusChangeTell(elementId){
				this.$store.commit('statusChange', elementId);
			},			
			deleteTell(elementId){				
				this.$store.commit('todoDelete', elementId);
				this.$store.commit('createId');
			},
		},
		computed:{
			filteredTodos(){
				return this.$store.getters.computedTodos;
			},
		},	
	}
</script>

