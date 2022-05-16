<template>
<section class="game-app">
    <game-list :games="games"/>

</section>
</template>


<script>
import { GameService } from '../services/game-service'
import gameList from '../components/game-list.vue'
export default {
    name: "game-app",


     data() {
        return {
            games: [],
        }
    },

 methods: {
   
 },

   components: {
    gameList
  },

     async created() {
        const games = await GameService.query()
        this.games = games
    },
}
</script>