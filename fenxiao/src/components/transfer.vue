<template>
  <div>
    <v-welcome></v-welcome>
  </div>
</template>

<script>
  import welcome from './welcome-animate'

  export default {
    name: "transfer",
    components: {
      "v-welcome": welcome
    },
    mounted:function () {
      setTimeout(()=>{
        this.$router.push({ path: '/index' })
      },200)
    }
  }
</script>

<style scoped>

</style>
