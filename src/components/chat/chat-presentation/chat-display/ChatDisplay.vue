<template>
  <div class="chat-display">
    <span />
    <ac-message
      v-for="(message, index) in messages"
      :message="message.message"
      :received="message.received"
      :key="index"/>
  </div>
</template>

<script>
import Message from './Message';

export default {
  components: {
    'ac-message': Message,
  },
  props: ['messages'],
};
</script>

<style scoped>
.chat-display {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  display: grid;
  grid-template-rows: 1fr auto;
  -ms-grid-columns: 1fr auto;
}
</style>
