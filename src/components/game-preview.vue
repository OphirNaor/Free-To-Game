<template>
<section class="game-preview flex column space-between">
    <img :src="game.thumbnail" alt="game">
    <div class="game-info">
        <p> {{game.title}}</p>

    <router-link :to="'/game/'+game.id" class="info-btn">View</router-link>
    </div>
</section>
</template>


<script>
export default {
    name: "game-preview",
  props: {
    game: Object,
  },
}
</script>

