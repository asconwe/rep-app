<template>
  <div class="inner-input-box-clone" ref="clone">{{message}}</div>
</template>

<script>
export default {
  props: ['applyCloneHeight', 'message'],
  updated () {
    this.applyCloneHeight(this.$refs.clone.clientHeight)
  }
}
</script>

<style scoped>

</style>
