<template>
  <div>
    <Navbar />  
    <div class="row">
      <MainCharacteristic />  
      <StuffPresentation />
      <OtherCharacteristic />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import MainCharacteristic from '~/components/MainCharacteristic'
import StuffPresentation from '~/components/StuffPresentation'
import OtherCharacteristic from '~/components/OtherCharacteristic'
export default {
  components: {
    Navbar,
    MainCharacteristic,
    StuffPresentation,
    OtherCharacteristic
  }
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
