<template>
  <div ref="container" class="container">
    <ac-chat-display ref="display" :messages="messages"/>
    <ac-message-input ref="input" >
      <ac-input-box slot="input-box">
        <slot />
      </ac-input-box>
      <ac-send-button slot="send-button" class="send-button-position" :handleSubmit="sendMessage"/>
    </ac-message-input>
  </div>
</template>

<script>
import ChatDisplay from './chat-display/ChatDisplay';
import MessageInput from './message-input/MessageInput';
import InputBox from './message-input/InputBox';
import SendButton from './message-input/SendButton';

export default {
  components: {
    'ac-chat-display': ChatDisplay,
    'ac-message-input': MessageInput,
    'ac-input-box': InputBox,
    'ac-send-button': SendButton,
  },
  props: ['sendMessage', 'messages', 'message'],
  updated() {
    const { container, display, input } = this.$refs;
    const displayHeight = container.clientHeight - input.$el.clientHeight;
    display.$el.setAttribute('style', `height: ${displayHeight}px`);
    display.$el.scrollTop = display.$el.clientHeight;
  },
  mounted() {
    const { container, display, input } = this.$refs;
    const displayHeight = container.clientHeight - input.$el.clientHeight;
    display.$el.setAttribute('style', `height: ${displayHeight}px`);
    display.$el.scrollTop = display.$el.clientHeight;
  },
};
</script>

<style>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
