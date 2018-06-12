<template>
  <div class="hello">
    <v-welcome></v-welcome>
  </div>
</template>

<script>
  import welcome from './welcome-animate'
export default {
  data () {
    return {
    }
  },
  components:{
    "v-welcome":welcome
  },
  mounted:function () {
    setTimeout(()=>{
      this.$router.push({ path: '/transfer' })
    },200)
  }
}
</script>

<style scoped>

</style>
