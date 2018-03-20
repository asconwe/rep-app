<template>
  <div ref="container" class="container">
    <ac-chat-display ref="display" :messages="messages"/>
    <ac-message-input-style ref="input" >
      <div
        slot="input-box"
        v-contenteditable:composedMessage.dangerousHTML="true"
        @keydown.enter.exact.prevent="handleSubmit"
        class="input-box"/>
      <ac-send-button
        slot="send-button"
        class="send-button-position"
        @click="handleSubmit"
        :stateChange="action"/>
    </ac-message-input-style>
  </div>
</template>

<script>
import ChatDisplay from './chat-display/ChatDisplay';
import MessageInputStyle from './message-input/MessageInputStyle';
import SendButton from './message-input/SendButton';

export default {
  components: {
    'ac-chat-display': ChatDisplay,
    'ac-message-input-style': MessageInputStyle,
    'ac-send-button': SendButton,
  },
  props: {
    sendMessage: {
      type: Function,
      required: true,
    },
    messages: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      composedMessage: '',
      sent: false,
    };
  },
  computed: {
    action() {
      if (this.composedMessage.length === 0 || this.composedMessage === '<br>') {
        return 'empty';
      }
      if (this.sent) {
        return 'send';
      }
      return 'populate';
    },
  },
  updated() {
    // Set height of chat message display area and scroll to bottom
    const { container, display, input } = this.$refs;
    const displayHeight = container.clientHeight - input.$el.clientHeight;
    display.$el.setAttribute('style', `height: ${displayHeight}px`);
    display.$el.scrollTop = display.$el.scrollHeight;
  },
  mounted() {
    // Set height of chat message display area and scroll to bottom
    const { container, display, input } = this.$refs;
    const displayHeight = container.clientHeight - input.$el.clientHeight;
    display.$el.setAttribute('style', `height: ${displayHeight}px`);
    display.$el.scrollTop = display.$el.scrollHeight;
  },
  methods: {
    handleSubmit() {
      if (this.composedMessage.length > 0 && this.composedMessage !== '<br>') {
        this.sent = true;
        this.$nextTick()
          .then(() => {
            this.sendMessage(this.composedMessage);
            this.composedMessage = '';
            this.sent = false;
          });
      }
    },
  },
};
</script>

<style>
.container {
  position: absolute;
  height: 100%;
  width: 100%;
}

.input-box {
  width: 100%;
  padding: 8px;
  min-height: 40px;
  white-space: pre-wrap;
  vertical-align: text-bottom;
  word-wrap: break-word;
}
</style>
