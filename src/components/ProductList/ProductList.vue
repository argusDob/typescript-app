<template>
  <div class="product-list">
    <transition-group name="fade" tag="div" class="product-list__items">
      <div v-for="product in products" :key="product.id" class="product-item">
        <div class="product-list__title">
          <h2 role="button" tabindex="0" @click="openModal(product)">
            {{ product.title }}
          </h2>
          <PrimaryButton type="danger" @click="handleClick(product.id)"
            >Delete</PrimaryButton
          >
        </div>
        <transition name="fade" mode="out-in">
          <GenericModal
            :is-open="modalOpen"
            @update:is-open="modalOpen = $event"
          >
            <template #title>
              <ProductItem :product="product" />
            </template>
          </GenericModal>
        </transition>
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import GenericModal from "../GenericModal/GenericModal.vue";
import PrimaryButton from "../PrimaryButton/PrimaryButton.vue";
import ProductItem from "../ProductItem/ProductItem.vue";

import { Product } from "@/types";

const props = withDefaults(
  defineProps<{
    products: Product[];
    orderId?: string;
  }>(),
  {
    orderId: "",
  }
);

const emit = defineEmits(["deleteOrder"]);

const modalOpen = ref(false);
const selectedProduct = ref<Product | null>(null);

const openModal = (product: Product) => {
  selectedProduct.value = product;
  modalOpen.value = true;
};

const handleClick = (productId: string) => {
  emit("deleteOrder", { productId: productId, orderId: props.orderId });
};
</script>

<style scoped>
@import "../../assets/CSS/transitions.css";
@import "./ProductList.css";
</style>
