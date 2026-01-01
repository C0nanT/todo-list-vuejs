<script setup>
defineProps({
	item: {
		type: Object,
		required: true,
	},
});

defineEmits(["edit", "remove"]);
</script>

<template>
	<div class="item-card">
		<div class="item-info">
			<h3 class="item-name">{{ item.name }}</h3>
			<p class="item-desc">{{ item.description }}</p>
		</div>
		<div class="item-actions">
			<button class="btn btn-ghost" @click="$emit('edit', item)">
				Editar
			</button>
			<button class="btn btn-danger" @click="$emit('remove', item.id)">
				Remover
			</button>
		</div>
	</div>
</template>
