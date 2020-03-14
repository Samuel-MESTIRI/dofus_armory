<template>
  <article class="d-flex justify-content-between mb-4">
      <button class="btn btn-success p-0">perso</button>
      <input v-if="!searchMode" id="input-level" class="rounded border border-grey p-2" type="text" value="200" maxlength="3">
      <input v-if="!searchMode" id="input-name" class="rounded border border-grey p-2" type="text" maxlength="100">
      <button v-if="!searchMode" class="btn btn-success p-0">copier</button>
    </article>
</template>

<script>
export default {
  name: 'StuffParameter',
  props: {
    searchMode: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
  #input-level {
    width: 50px;
  }
  #input-name {
    width: 70%;
  }
</style>