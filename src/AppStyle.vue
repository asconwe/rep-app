<template>
    <div class="app-style">
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style src="./assets/reset.css" />

<style>
html,
body,
.app-style,
#root {
  height: 100%;
}

.app-style * {
  box-sizing: border-box;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  line-height: 24px;
}
</style>
