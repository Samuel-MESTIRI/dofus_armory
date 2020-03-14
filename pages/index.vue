<template>
  <div>
    <Navbar />  
    <button @click="searchMode = !searchMode">CHANGE</button>
    <div class="row">
      <div class="offset-1"></div>
      <MainCharacteristic v-if="!searchMode" />  
      <StuffPresentation :search-mode="searchMode" />
      <OtherCharacteristic v-if="!searchMode" />
      <SearchPage v-if="searchMode" />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MainCharacteristic from '~/components/MainCharacteristic'
import StuffPresentation from '~/components/StuffPresentation'
import OtherCharacteristic from '~/components/OtherCharacteristic'
import SearchPage from '~/components/SearchPage'

export default {
  components: {
    Navbar,
    MainCharacteristic,
    StuffPresentation,
    OtherCharacteristic,
    SearchPage
  },
  data() {
    return {
      searchMode: false
    }
  },
  async mounted() {
    // this.allItems = await this.getWeapons()
    // console.log('la reponse laa:', this.allItems)
    // console.log(this.$store.getters['items/getHello'])
    // this.$store.dispatch('items/addMore')
    // console.log(this.$store.getters['items/getHello'])


    await this.getAllData()
    console.log(this.$store.state.items)
  },
  methods: {
    getAllData() {
      Promise.all([
        this.$axios.$get('https://fr.dofus.dofapi.fr/equipments'),
        this.$axios.$get('https://fr.dofus.dofapi.fr/weapons'),
        this.$axios.$get('https://fr.dofus.dofapi.fr/sets'),
        this.$axios.$get('https://fr.dofus.dofapi.fr/pets'),
        this.$axios.$get('https://fr.dofus.dofapi.fr/mounts'),
      ]).then((response) => {
        const items = {
          equipments: response[0],
          weapons: response[1],
          sets: response[2],
          pets: response[3],
          mounts: response[4],
        }
        this.$store.commit('items/loadItems', items)
      });
    }
  },
}
</script>

<style>
  body {
    font-family: Raleway;
  }
  .bg-blue {
    background-color: #0066FF;
  }
  .text-blue {
    color: #0066FF;
  }
  .box {
    background-color: white;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
</style>
