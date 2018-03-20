<template>
  <button @click="handleClick" :class="`send-button ${className}`">
    <transition :name="transition">
      <SendIcon v-if="showSendButton" class="send-icon-box" />
    </transition>
  </button>
</template>

<script>
import SendIcon from '@/components/chat/chat-presentation/message-input/SendIcon';

export default {
  name: 'SendButton',
  props: {
    stateChange: {
      type: String,
      default: 'empty',
      required: true,
      validator: value => value === 'send' || value === 'empty' || value === 'populate',
    },
    className: {
      type: String,
      default: 'send-button',
    },
  },
  components: { SendIcon },
  data() {
    return {
      showSendButton: false,
    };
  },
  computed: {
    transition() {
      if (this.stateChange === 'empty') {
        this.handleStateChange(this.stateChange);
        return 'fade';
      }
      if (this.stateChange === 'populate') {
        this.handleStateChange(this.stateChange);
        return 'slide-fade';
      }
      this.handleStateChange(this.stateChange);
      return 'slide-fade';
    },
  },
  methods: {
    handleStateChange(stateChange) {
      if (stateChange === 'empty') {
        this.$nextTick().then(() => {
          this.showSendButton = false;
        });
      }
      if (stateChange === 'populate') {
        this.showSendButton = true;
      }
      if (stateChange === 'send') {
        this.showSendButton = false;
      }
    },
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style>
.send-icon-box {
  width: 100%;
}

.send-button:active {
  color: grey;
}

.send-button {
  overflow: hidden;
  box-sizing: border-box;
  border: 0;
  margin: 0;
  padding: 7px 12px;
  width: 40px;
  height: 40px
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}

.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: rotate(-10deg) translate(30px, -1px);
  opacity: 0;
}
</style>
