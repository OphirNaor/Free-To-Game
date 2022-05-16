
<template>
    <app-header/>
      <game-app/>
      <router-view></router-view>

</template>







<script >
import AppHeader from './components/app-header.vue';
import gameApp from './views/game-app.vue';
  export default {
  name: "App",
  data() {
    return {
    };
  },
  created() {

  },
  components: {
    AppHeader,
    gameApp,
  },
  computed: {
 
  },
  methods: {},
  mounted() {},
};
</script>




