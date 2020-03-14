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
