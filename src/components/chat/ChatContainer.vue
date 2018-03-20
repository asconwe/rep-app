<template>
  <div>
    <ac-chat :send-message="sendMessage" :messages="messages" />
  </div>
</template>

<script>
import io from 'socket.io-client';
import Chat from '@/components/chat/chat-presentation/Chat';

export default {
  components: {
    'ac-chat': Chat,
  },
  props: {
    socketUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      socket: io(this.socketUrl),
      messages: [],
    };
  },
  methods: {
    sendMessage(composedMessage) {
      const newMessages = this.messages.concat({
        message: composedMessage,
        received: false,
      });
      this.socket.emit('chat message', composedMessage);
      this.messages = newMessages;
    },
  },
};
</script>
