<template>
  <div>
    <ac-chat :send-message="sendMessage" :messages="messages" :message="message">
      <div
        v-contenteditable="message"
        @keydown.enter.exact.prevent="sendMessage"
        class="input-box"/>
    </ac-chat>
  </div>
</template>

<script>
import io from 'socket.io-client';
import ChatVue from '@/components/chat/chat-presentation/Chat';

export default {
  components: {
    'ac-chat': ChatVue,
  },
  props: ['socketUrl', 'name'],
  data() {
    return {
      message: '',
      socket: io(this.socketUrl),
      messages: [],
    };
  },
  methods: {
    sendMessage() {
      const newMessages = this.messages.concat({ message: this.message, received: false });
      this.socket.emit('chat message', this.message);
      this.message = '';
      this.messages = newMessages;
    },
    // TODO
    // Map ctl.enter, meta.enter, and alt.enter to shif.enter
    // dispatchShiftEnter method
  },
};
</script>
