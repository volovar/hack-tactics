<template lang="pug">
.root
  .header
    h3 Tactics Coder
  .body
    slot
  .footer &copy;{{ year }} volovar.com
</template>

<script lang="ts" setup>
const year = 2023;
</script>

<style lang="postcss">
.root {
  display: flex;
  flex-direction: column;
  height: inherit;
}

.header {
  display: flex;
  padding: 0 1em;
}

.body {
  flex-grow: 1;
  overflow: auto;
}

.footer {
  padding: 0 1em;
}
</style>
