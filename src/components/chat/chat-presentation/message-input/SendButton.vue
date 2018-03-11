<template>
    <button class="send-button" @click.prevent="handleSubmit">SEND</button>
</template>

<script>
export default {
  props: ['handleSubmit'],
};
</script>

<style scoped>
.send-button {
  padding: 8px;
  border: none;
}
</style>
