<template>
  <section class="col-7 box ml-2 mt-4 p-4">
    <input class="rounded border border-grey p-3 w-100 mb-4" type="text" maxlength="100" placeholder="Le super item..."> 

    <div class="d-flex justify-content-between">
      <!-- <button>
        <img src="~/assets/test-item.png" alt="item" width="100%">
      </button> -->
      <button class="equipement-button bg-white rounded">
        <img src="~/assets/test-item.png" alt="item" width="100%">
      </button>
    </div>
    


  </section>
</template>

<script>
export default {
  name: 'searchPage'
}
</script>

<style scoped>
  .equipement-button {
    width: 60px;
    height: 60px;
    border: blue 2px solid;
  }
  .equipement-button:hover {
    color: white;
    background-color: blue !important;
  }
</style>