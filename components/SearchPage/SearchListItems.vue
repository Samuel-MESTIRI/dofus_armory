<template>
  <div class="list-items">
    <div v-for="(item, i) in allItems" :key="i" class="d-inline-block box item-choice m-2 p-2">
      <img :src="item.imgUrl" :alt="item.name" width="60px">
      {{ item.name + ' - ' + item.level }}
      <div v-for="(stat, i) in item.statistics" :key="i">Et une charac</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allItems() {
      return this.$store.getters['items/getSortItems'].equipments
    }
  },
  mounted() {
    console.log(this.allItems)
  }
}
</script>

<style scoped>
  .box {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  }
  .item-choice {
    width: calc(50% - 16px);
  }
  .list-items {
    max-height: 50vh;
    overflow-y: auto;
  }
</style>