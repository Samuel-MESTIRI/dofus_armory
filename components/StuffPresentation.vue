<template>
  <section :class="!searchMode ? 'col-6' : 'col-3'" class="box mx-2 mt-4 p-4">

    <StuffParameter :search-mode="searchMode" />

    <article class="row">

      <div :class="collumnSize" class="d-flex flex-column justify-content-between">
        <ItemLocation v-for="i in 6" :key="i" :item-width="75" :class="marginItem" />
      </div>

      <div :class="collumnSize" class="d-flex flex-column justify-content-between">
        <ItemLocation v-for="i in 5" :key="i" :item-width="85" :class="marginItem" />
      </div>

      <div v-if="!searchMode" class="col-6">
        <img src="~/assets/image-center.png"  alt="image du centre" width="100%">
      </div>
      
      <div :class="collumnSize" class="d-flex flex-column justify-content-between">
        <ItemLocation v-for="i in 5" :key="i" :item-width="85" :class="marginItem" />
      </div>
    </article>

  </section>
</template>

<script>
import StuffParameter from '~/components/StuffPresentation/StuffParameter'
import ItemLocation from '~/components/StuffPresentation/ItemLocation'

export default {
  components: {
    StuffParameter,
    ItemLocation
  },
  props: {
    searchMode: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    collumnSize() {
      return this.searchMode ? 'col-4 mb-3' : 'col-2'
    },
    marginItem() {
      return this.searchMode ? 'mb-3' : ''
    }
  }
}
</script>

<style scoped>
  .border-size-2 {
    border-width: 2px !important;
  }
</style>