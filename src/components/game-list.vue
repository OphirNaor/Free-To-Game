<template>
<section class="game-list container">
    <game-preview v-for="game in games" :game="game" :key="game._id"/>
    <!-- <game-preview/>
    <game-preview/>
    <game-preview/> -->

</section>
</template>


<script>
import gamePreview from './game-preview.vue'
export default {
//   components: { gamePreview },
    name: "game-list",
  props: {
    games: Object,
  },



   components: {
    gamePreview
  },
}
</script>