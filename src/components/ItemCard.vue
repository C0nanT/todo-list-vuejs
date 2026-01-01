<script setup>
import { Pencil, Trash2 } from "lucide-vue-next";

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
			<button 
				class="btn btn-ghost btn-icon" 
				@click="$emit('edit', item)"
				title="Editar item"
			>
				<Pencil :size="18" />
			</button>
			<button 
				class="btn btn-danger btn-icon" 
				@click="$emit('remove', item.id)"
				title="Remover item"
			>
				<Trash2 :size="18" />
			</button>
		</div>
	</div>
</template>
