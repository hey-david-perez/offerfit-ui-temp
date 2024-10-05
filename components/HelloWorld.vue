<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div class="bg-red-500">
    <h1 class="text-4xl font-bold">Hello World!</h1>
    <pre class="text-lg">{{ myLayer }}</pre>
  </div>
</template>
