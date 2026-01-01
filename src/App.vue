<script setup>
import { ref } from "vue";
import AppHeader from "./components/AppHeader.vue";
import ItemCard from "./components/ItemCard.vue";
import ItemModal from "./components/ItemModal.vue";

// State
const items = ref([
	{
		id: 1,
		name: "Componentização",
		description: "Aprender a dividir a interface em pedaços menores.",
	},
	{
		id: 2,
		name: "Props",
		description: "Passar dados do pai para o filho.",
	},
	{
		id: 3,
		name: "Emit",
		description: "Enviar eventos do filho para o pai.",
	},
]);

const isModalOpen = ref(false);
const itemToEdit = ref(null);

// Actions
const openModal = (item = null) => {
	itemToEdit.value = item;
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
};

const saveItem = (formData) => {
	if (itemToEdit.value) {
		const index = items.value.findIndex((i) => i.id === formData.id);
		if (index !== -1) {
			items.value[index] = formData;
		}
	} else {
		items.value.push(formData);
	}
	closeModal();
};

const removeItem = (id) => {
	items.value = items.value.filter((item) => item.id !== id);
};
</script>

<template>
	<div id="app">
		<AppHeader @add="openModal" />

		<main>
			<div v-if="items.length > 0" class="items-list">
				<h3>Total de itens: {{ items.length }}</h3>
				
				<ItemCard 
					v-for="item in items" 
					:key="item.id" 
					:item="item"
					@edit="openModal"
					@remove="removeItem"
				/>
			</div>

			<div v-else class="empty-state">
				<p>Nenhum item encontrado. Adicione um novo para começar!</p>
			</div>
		</main>

		<ItemModal 
			:is-open="isModalOpen"
			:item-to-edit="itemToEdit"
			@close="closeModal"
			@save="saveItem"
		/>
	</div>
</template>

