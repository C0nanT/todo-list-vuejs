<script setup>
import { reactive, watch, computed } from "vue";

const props = defineProps({
	isOpen: Boolean,
	itemToEdit: Object, // null if adding new
});

const emit = defineEmits(["close", "save"]);

const form = reactive({
	id: null,
	name: "",
	description: "",
});

const errors = reactive({
	name: "",
	description: "",
});

const touched = reactive({
	name: false,
	description: false,
});

// Watch for changes in itemToEdit to populate form
watch(
	() => props.itemToEdit,
	(newItem) => {
		errors.name = "";
		errors.description = "";
		touched.name = false;
		touched.description = false;
		if (newItem) {
			form.id = newItem.id;
			form.name = newItem.name;
			form.description = newItem.description;
		} else {
			form.id = Date.now();
			form.name = "";
			form.description = "";
		}
	},
	{ immediate: true }
);

const isFormValid = computed(() => {
	return form.name.length >= 3 && form.description.length >= 5;
});

const validateField = (field) => {
	if (field === 'name') {
		errors.name = form.name.length < 3 ? "O nome deve ter pelo menos 3 caracteres." : "";
	}
	if (field === 'description') {
		errors.description = form.description.length < 5 ? "A descrição deve ter pelo menos 5 caracteres." : "";
	}
};

// Real-time validation
watch(() => form.name, () => {
	if (touched.name) validateField('name');
});

watch(() => form.description, () => {
	if (touched.description) validateField('description');
});

const handleSave = () => {
	touched.name = true;
	touched.description = true;
	validateField('name');
	validateField('description');

	if (isFormValid.value) {
		emit("save", { ...form });
	}
};
</script>

<template>
	<div v-if="isOpen" class="modal-overlay" @click.self="$emit('close')">
		<div class="modal-content">
			<h2 class="modal-title">
				{{ itemToEdit ? "Editar Item" : "Novo Item" }}
			</h2>

			<div class="form-group">
				<label>Nome <small>(mín. 3 letras)</small></label>
				<input
					v-model="form.name"
					type="text"
					class="form-input"
					:class="{ 'input-error': errors.name }"
					placeholder="Ex: Aprender Vite"
					@blur="touched.name = true; validateField('name')"
				/>
				<span v-if="errors.name" class="error-message">{{ errors.name }}</span>
			</div>

			<div class="form-group">
				<label>Descrição <small>(mín. 5 letras)</small></label>
				<textarea
					v-model="form.description"
					class="form-input"
					:class="{ 'input-error': errors.description }"
					rows="3"
					placeholder="O que você vai fazer?"
					@blur="touched.description = true; validateField('description')"
				></textarea>
				<span v-if="errors.description" class="error-message">{{ errors.description }}</span>
			</div>

			<div class="modal-footer">
				<button class="btn btn-ghost" @click="$emit('close')">
					Cancelar
				</button>
				<button 
					class="btn btn-primary" 
					:disabled="!isFormValid"
					@click="handleSave"
				>
					{{ itemToEdit ? "Salvar Alterações" : "Adicionar Item" }}
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>
.input-error {
	border-color: #ff4d4f;
}
.error-message {
	color: #ff4d4f;
	font-size: 0.8rem;
	margin-top: 4px;
	display: block;
}
.btn-primary:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>
