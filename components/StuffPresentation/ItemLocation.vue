<template>
  <div>
    <img 
      class="border border-primary rounded border-size-2" 
      src="~/assets/test-item.png" 
      alt="super chapeau" 
      :width="itemWidth+'%'"
    >
  </div>
</template>

<script>
export default {
  name: 'ItemLocation',
  props: {
    itemWidth: {
      type: Number,
      required: true
    }
  }
}
</script>