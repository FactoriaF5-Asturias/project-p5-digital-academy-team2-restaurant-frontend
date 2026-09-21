<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

const route = useRoute();

const isAdminRoute = computed(() => route.path.startsWith("/admin"));
</script>

<template>
  <Header v-if="!isAdminRoute" />

  <RouterView />

  <Footer v-if="!isAdminRoute" />
</template>