<template>
  <div class="message-input">
    <div class="input-box-position">
      <slot name="input-box"/>
    </div>
    <div>
      <slot name="send-button" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .message-input {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: visible;
    border: solid 1px black;
    padding-right: 100px;
  }

  .input-box-position {
    float: left;
    margin-left: 0;
    width: 100%;
  }

  .send-button-position {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100px;
    height: auto;
  }
</style>
