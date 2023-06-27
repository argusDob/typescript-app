<template>
  <div class="input-text">
    <label class="input-text__label" :for="id">{{ label }}</label>
    <input
      class="input-text__input"
      :id="id"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="updateValue"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}>();

const emit = defineEmits(["update"]);

let value = ref("");

const updateValue = (event: Event) => {
  value.value = (event.target as HTMLInputElement).value;
  emit("update", value.value);
};
</script>

<style scoped>
@import "./InputText.css";
</style>
