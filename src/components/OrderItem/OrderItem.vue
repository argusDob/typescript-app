<template>
  <div class="order-item">
    <span
      class="order-item__remove"
      role="button"
      tabindex="0"
      @click="handleRemoveOrder(order.id)"
      >&times;</span
    >
    <div>
      <span><strong>Order reference:</strong></span>
      {{ order.id }} <br />
    </div>
    <Address>{{
      order.address.street + order.address.city + order.address.zip
    }}</Address>
    <ProductList
      :products="order.products || []"
      :orderId="order.id"
      @deleteOrder="handleDelete"
    />
    <div class="order-item__primary-button">
      <PrimaryButton type="success" @click="handleAddProduct(order.id)">Add Product</PrimaryButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import Address from "../Address/Address.vue";
import PrimaryButton from "../PrimaryButton/PrimaryButton.vue";
import ProductList from "../ProductList/ProductList.vue";

import { PropType } from "vue";
import { Order } from "@/types";

const props = defineProps({
  order: {
    type: Object as PropType<Order>,
    required: true,
  },
});

const emit = defineEmits(["removeProduct", "removeOrder", "addProduct"]);

const handleDelete = (orderRef: string) => {
  emit("removeProduct", orderRef);
};

const handleRemoveOrder = (orderRef: string) => {
  emit("removeOrder", orderRef);
};

const handleAddProduct = (orderRef: string) => {
  emit("addProduct", orderRef);
};
</script>

<style scoped>
@import "./OrderItem.css";
</style>
