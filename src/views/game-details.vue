<template>
<section v-if="game" class="game-details">
    <h1>{{game.title}}</h1>

</section>
</template>


<script>
import { GameService } from '../services/game-service';
export default {
  components: {  },
    name: "game-details",
  props: {
    game: Object,
  },
     data() {
        return {
            game: {},
        }
    },

   created() {
        this.loadGame();
    },

     methods: {
        loadGame() {
            const id = this.$route.params.gameId
            GameService.getGameById(id)
                .then(game => {
                    this.game = game
                })

        }
    },

    //  async created() {
    //     const id = this.$route.params.gameId
    //     const game = await GameService.getGameById(id)
    //     console.log(game);
    //     this.game = game
    // },



//    components: {
//     gamePreview
//   },
}
</script>