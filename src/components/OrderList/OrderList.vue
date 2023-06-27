<template>
  <div>
    <h2>Order List</h2>
    <InputText
      id="test"
      label="Search:"
      placeholder="Search"
      type="text"
      @update="handleUpdate"
    />
    <transition-group name="fade" tag="div" class="order-list">
      <div v-for="order in filteredOrders" :key="order.id">
        <OrderItem
          :order="order"
          @removeProduct="handleRemoveProduct"
          @removeOrder="handleRemoveOrder"
          @addProduct="addProduct"
        />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";

import OrderItem from "../OrderItem/OrderItem.vue";
import InputText from "../InputText/InputText.vue";

import { Order, Product } from "@/types";
import { ORDER_LIST, PRODUCT_LIST } from "@/data";

interface EnrichedOrder extends Order {
  products: Product[];
}

interface RemoveProductPayload {
  productId: string;
  orderId: string;
}

const enrichedOrders = ref<EnrichedOrder[]>([]);
const inputValue = ref("");

const filteredOrders = computed(() => {
  if (!inputValue.value) {
    return enrichedOrders.value;
  }

  const lowerCasedInput = inputValue.value.toLowerCase();

  return enrichedOrders.value.filter((order) => {
    const orderMatch = order.id.toLowerCase().includes(lowerCasedInput);
    const productMatch = order.products.some(
      (product) =>
        product.title.toLowerCase().includes(lowerCasedInput) ||
        product.category.toLowerCase().includes(lowerCasedInput) ||
        product.id.toLowerCase().includes(lowerCasedInput)
    );

    return orderMatch || productMatch;
  });
});

const handleUpdate = (newValue: string) => {
  inputValue.value = newValue;
};

const handleRemoveProduct = ({ orderId, productId }: RemoveProductPayload) => {
    enrichedOrders.value = enrichedOrders.value.map((order) => {
      if (order.id === orderId) {
        order.products = order.products.filter(
          (product) => product.id !== productId
        );
      }
      return order;
    });

    cleanupOrders(orderId);
  };

  const handleRemoveOrder = (orderId: string) => {
    enrichedOrders.value = enrichedOrders.value.filter(
      (order) => order.id !== orderId
    );

    cleanupOrders(orderId);
  };

  const cleanupOrders = (orderId: string) => {
    const orderIndex = enrichedOrders.value.findIndex(
      (order) => order.id === orderId
    );
    if (orderIndex !== -1) {
      enrichedOrders.value[orderIndex].products = enrichedOrders.value[
        orderIndex
      ].products.filter((product) => product.quantity > 0);
    }
  };

const addProduct = (orderId: string) => {
  const order = enrichedOrders.value.find((order) => order.id === orderId);
  if (order) {
    const productIds = order.productIds.filter(
      (productId) => !order.products.find((product) => product.id === productId)
    );

    const availableProducts = PRODUCT_LIST.filter((product) =>
      productIds.includes(product.id)
    );

    if (availableProducts.length > 0) {
      const randomProduct =
        availableProducts[Math.floor(Math.random() * availableProducts.length)];
      order.products.push(randomProduct);
    }
  }
};

onMounted(() => {
  enrichedOrders.value = ORDER_LIST.map((order) => ({
    ...order,
    products: [],
  }));
});
</script>

<style scoped>
@import "../../assets/CSS/transitions.css";
@import "./OrderList.css";
</style>
