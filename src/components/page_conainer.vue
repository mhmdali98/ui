<template>
  <div id="page">
    <div class="page__head">
      <!-- <h5>{{title}}</h5> -->
      <b-breadcrumb :items="breadItems"></b-breadcrumb>
      <router-link :to="to">
        <Icon v-if="icon" :icon="icon"></Icon>
      </router-link>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["to", "title", "icon"],
  data() {
    return {};
  },
  computed: {
    breadItems() {
      return this.$store.state.breadItems;
    }
  }
};
</script>
<style lang="scss" scoped>
#page {
  margin: 0 24px;
  background: var(--grey-1);
  flex: 1;
  .breadcrumb {
    margin-bottom: 0;
    background: none;
  }
  .page__head {
    display: flex;
    justify-content: space-between;
    text-align: right;
    border-bottom: 1px solid var(--gray-2);
    height: 60px;
    align-items: center;

    h5 {
      color: var(--dark);
      margin: 0;
      font-weight: 400;
      font-size: 20px;
    }
    a {
      margin-right: auto;
    }
  }
}
</style>