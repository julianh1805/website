<template>
  <div id="qualites">
    <div class="container">
      <div class="grid">
        <div class="qlte-1">
          <p>1</p>
        </div>
        <div class="qlte-2">
          <p>2</p>
        </div>
        <div class="qlte-3">
          <p>3</p>
        </div>
        <div class="qlte-4">
           <p>4</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qualites',
}
</script>

<style lang="scss">
   #qualites{
     .container{
       margin: $container-spacement;
       .grid{
         width: 100%;
         margin: 0 auto;
         display: grid;
         grid-gap: 4rem;
         grid-template-columns: repeat(4, 1fr);
       }
     }
   }
</style>
