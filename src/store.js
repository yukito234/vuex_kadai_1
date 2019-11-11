import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{		
		todos:[],		
		currentRadio:"all",
	},
	getters:{
		computedTodos(state){
			if(state.currentRadio === "all"){
				return state.todos;				
			}			
			return state.todos.filter(element => {
				return element.status === state.currentRadio;
			});
		},
	},
	mutations:{
		taskAdd(state, task){
			const todo = {taskName:task, status:"doing"};
			state.todos.push(todo);
		},
		createId(state){
			state.todos.forEach((element, index) => {
				element.id = index + 1;});
		},
		statusChange(state, elementId){
			if(state.todos[elementId-1].status === "doing"){
				state.todos[elementId-1].status = "done";
			} else {
				state.todos[elementId-1].status = "doing";
			}
		},
		todoDelete(state, elementId){
			state.todos.splice(elementId-1, 1);	
		},
		radioChange(state, radio){
			state.currentRadio = radio;
		},
	},
});

export default store;