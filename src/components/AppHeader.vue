<script setup>
defineProps({
	title: {
		type: String,
		default: "Vue Mastery",
	},
	subtitle: {
		type: String,
		default: "Explorando o poder da reatividade e templates",
	},
});

defineEmits(["add"]);
</script>

<template>
	<header>
		<h1>{{ title }}</h1>
		<p class="subtitle">{{ subtitle }}</p>

		<div class="header-actions">
			<button class="btn btn-primary" @click="$emit('add')">
				<span>+</span> Adicionar
			</button>
		</div>
	</header>
</template>
