<template>
  <div id="layout">
    <slot name="sidebar"></slot>
    <div class="main">
      <slot name="navbar"></slot>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss" scoped>
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
#layout {
  display: flex;
  height: 100vh;
  width: 100%;
}

#content {
  flex: 1;
  background: var(--grey-1);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
</style>