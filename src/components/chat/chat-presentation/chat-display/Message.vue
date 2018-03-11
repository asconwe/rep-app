<template>
<div class="message-outer">
  <div :class="`message ${this.received ? 'received' : 'sent'}`">
    {{message}}
  </div>
</div>
</template>

<script>
export default {
  props: ['received', 'message'],
};
</script>

<style scoped>
.message-outer {
  width: 100%;
  float: left;
}
.message {
  max-width: 75%;
  margin-bottom: 4px;
  padding: 4px;
  line-height: 16px;
  word-wrap: break-word;
}
.message.received {
  float: right;
}
.message.received::before {
  content: '-';
}
.message.sent {
  float: left;
}

.message.sent::after {
  content: '-';
}
</style>
