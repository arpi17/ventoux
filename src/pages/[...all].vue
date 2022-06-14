<template>
  <div>
    <h1>Ooops... page not found</h1>
    <RouterLink to="/">Back to home</RouterLink>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: '404',
});
</script>
