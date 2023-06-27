<template>
  <OrderList />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OrderList from "./components/OrderList/OrderList.vue";

export default defineComponent({
  components: {
    OrderList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  height: 100vh;
}

@media (min-width: 768px) {
  #app {
    width: 750px;
  }
}
@media (min-width: 992px) {
  #app {
    width: 970px;
  }
}
@media (min-width: 1200px) {
  #app {
    width: 1170px;
  }
}
</style>
