<template>
  <div class="product-item">
    <p><strong>SKU:</strong> {{ product.sku }}</p>
    <p><strong>Title:</strong> {{ product.title }}</p>
    <p><strong>Quantity:</strong> {{ product.quantity }}</p>
    <p v-if="hideCategoryAndPrice"><strong>Price:</strong> {{ product.price }}</p>
    <p v-if="hideCategoryAndPrice"><strong>Category:</strong> {{ product.category }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface ProductData {
  sku: string;
  title: string;
  quantity: number;
  price: number;
  category: string;
}

const props = defineProps<{ product: ProductData }>();

const hideCategoryAndPrice = computed(() => {
  return false;
});
</script>

<style scoped>
@import "./ProductItem.css";
</style>
