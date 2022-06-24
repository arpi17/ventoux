<template>
  <div>
    <h1>Home Page</h1>
    <RouterLink to="/dashboard">Dashboard</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Ventoux',
});
</script>

<style scoped></style>
