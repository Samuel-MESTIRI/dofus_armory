<template>
  <div>
    <div class="mb-3">
      <button v-for="i in 7" :key="i" class="equipement-button bg-white rounded mx-2">
        <img src="~/assets/test-item.png" alt="item" width="100%">
      </button>
    </div>
    
    <div class="mb-4">
      <button 
        v-for="(caracFilter, i) in filter.characteristic" 
        :key="i" 
        class="bg-white rounded mx-2 mb-2"
        :class="caracFilter.checked ? 'button-active': ''"
        @click="checkCharacFilter(caracFilter.name)"
      >
        <div class="d-flex">
          <div :class="'icon-carac '+caracFilter.iconName+' position-relative top-3'"></div>
          <div>{{ caracFilter.name }}</div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: {
        name: '',
        type: {},
        characteristic: [
          { name: 'vita', checked: false, iconName: 'vita-2' },
          { name: 'intelligence', checked: false, iconName: 'intelligence' },
          { name: 'change', checked: false, iconName: 'chance' },
          { name: 'force', checked: false, iconName: 'force' },
          { name: 'agilite', checked: false, iconName: 'agilite' },
          { name: 'puissance', checked: false, iconName: 'puissance' },
          { name: 'resIntelligence', checked: false, iconName: 'intelligence' },
          { name: 'resChance', checked: false, iconName: 'chance' },
          { name: 'resForce', checked: false, iconName: 'force' },
          { name: 'resAgilite', checked: false, iconName: 'agilité' },
          { name: 'resNeutre', checked: false, iconName: 'neutre' },
          { name: 'pa', checked: false, iconName: 'pa' },
          { name: 'pm', checked: false, iconName: 'pm' },
          { name: 'po', checked: false, iconName: 'po' },
          { name: 'invocation', checked: false, iconName: 'invocation' }
        ]
      }
    }
  },
  methods: {
    checkCharacFilter(name) {
      const characIndex = this.filter.characteristic.findIndex(el => el.name === name)
      this.filter.characteristic[characIndex].checked = !this.filter.characteristic[characIndex].checked
    }
  }
}
</script>


<style scoped>
  button {
    border: none;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  }
  button:hover {
    filter: brightness(95%);
  }
  button:focus {
    border: none;
    outline: none;
  }
  .equipement-button {
    width: 60px;
    height: 60px;
  }
  .button-active {
    color: white;
    background-color: rgba(75, 181, 67, 0.6) !important;
  }
</style>