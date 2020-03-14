<template>
  <section class="col-2 box ml-2 mt-4 p-4">
    <article>
      <h3 class="h5 mb-4">Caractérisque principale</h3>

      <div v-for="i in 5" :key="i" class="d-flex justify-content-between border">
        <div class="d-flex">
          <div class="icon-carac vita-2 position-relative top-3"></div>
          <div>Vital</div>
        </div>
        <div>250</div>
      </div>

    </article>
  </section>
</template>