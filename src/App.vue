<script setup lang="ts">
  import ThemeProvider from '@/components/ThemeProvider.vue';
  import LeTipHeader from '@/components/LeTipHeader.vue';
</script>

<template>
  <ThemeProvider>
    <div class="app min-h-screen bg-background text-foreground">
      <LeTipHeader />
    </div>
  </ThemeProvider>
</template>

<style lang="scss">
  @use '@/assets/styles/main';

  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
</style>
