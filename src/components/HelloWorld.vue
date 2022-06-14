<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button class="btn" type="button" @click="count++">
    count is: {{ count }}
  </button>
</template>

<style scoped>
.my-button {
  @apply border-none rounded-lg bg-blue-500 text-white hover:(bg-green rounded-lg cursor-pointer) p-2;
}
</style>
