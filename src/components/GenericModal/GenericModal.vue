<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <span class="modal-close"  role="button" tabindex="0" @click="closeModal">&times;</span>
      <div class="modal-header">
        <slot name="title"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {
    isOpen: false,
  }
);

const emit = defineEmits(["update:isOpen"]);

const closeModal = () => {
  emit("update:isOpen", false);
};
</script>

<style scoped>
@import "./GenericModal.css";
</style>
