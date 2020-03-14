<template>
  <section class="col-7 box ml-2 mt-4 p-4">

    <input class="rounded border border-grey p-3 w-100 mb-4" type="text" maxlength="100" placeholder="Le super item..."> 

    <SearchFilter />  

    <SearchListItems />
    
  </section>
</template>

<script>
import SearchFilter from '~/components/SearchPage/SearchFilter'
import SearchListItems from '~/components/SearchPage/SearchListItems'
export default {
  name: 'searchPage',
  components: {
    SearchFilter,
    SearchListItems
  }
}
</script>

<style scoped>
</style>