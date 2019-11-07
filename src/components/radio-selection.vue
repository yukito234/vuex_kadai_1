<template>
	<div>			
		<label v-for="radioElement in getRadioBtn" v-bind:key="radioElement.value">
			<input type="radio" v-model="radioType" v-bind:value="radioElement.value">{{ radioElement.label }}
		</label>
    </div>
</template>

<script>
	export default {
		computed:{
			getRadioBtn(){	
				return this.$store.state.radioTypes;
			},
			radioType:{
				get(){
					return this.$store.state.currentRadio;
				},
				set(value){
					this.$store.commit('radioChange', value);					
				}
			},
		},
	}
</script>