<template>
  <div>
    <h1>Dashboard</h1>
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head';

useHead({
  title: 'Dashboard',
});
</script>
