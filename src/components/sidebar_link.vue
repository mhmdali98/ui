<template>
  <li>
    <router-link :to="{name:to}" active-class="active" class="sidebar_link" :exact="exact">
      <span :class="'icon-'+icon + ` sidebar_link_icon`"></span>
      <span class="sidebar_link_text">{{title}}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["title", "icon", "to", "exact"]
};
</script> 

<style lang="scss" >
.sidebar_link {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: center;
  color: #aba8cd;
  transition: 0.4s ease-in-out;
  border-right: 5px solid transparent;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  &.active {
    color: #fff;

    border-right: 5px solid #fff;
    .sidebar_link_icon {
      color: #fff;
    }
  }

  .sidebar_link_icon {
    font-size: 24px;
  }
  .sidebar_link_text {
    font-weight: 300;
  }
}
</style>