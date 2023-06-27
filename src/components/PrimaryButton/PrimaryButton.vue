<template>
  <button :class="buttonClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface PrimaryButtonProps {
  type: "success" | "warning" | "danger";
}

const props = withDefaults(defineProps<PrimaryButtonProps>(), {
  type: "success",
});

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};

const buttonClass = computed(() => `primary-button ${props.type}`);
</script>

<style scoped>
@import "./PrimaryButton.css";
</style>
