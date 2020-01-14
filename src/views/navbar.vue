<template>
  <div id="navbar">
    <div class="right">
      <h4>المستخدمين</h4>
    </div>

    <div class="left"></div>
  </div>
</template>

<script>
export default {
  methods: {
    toggle() {
      this.$store.commit("navbarToggle");
    }
  }
};
</script>
<style lang="scss" >
#navbar {
  border-bottom: 1px solid var(--gray-2);
  height: 60px;
  display: flex;
  background: var(--grey-1);
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  .right {
    display: flex;
  }
}
</style>