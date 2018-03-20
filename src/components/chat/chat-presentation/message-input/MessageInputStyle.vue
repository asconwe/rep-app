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
  padding-right: 40px;
  min-height: 42px;
}

.input-box-position {
  float: left;
  margin-left: 0;
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

.send-button-position {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100px;
  height: auto;
}
</style>
