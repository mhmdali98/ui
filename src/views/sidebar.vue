<template>
  <div id="sidebar" :class="state">
    <router-link to="/" class="logo">
      العقد
      <span>الالتكتروني</span>
    </router-link>
    <ul>
      <Link
        v-for="link in links"
        :title="link.title"
        :icon="link.icon"
        :to="link.to"
        :exact="link.exact"
        :key="link.to"
      />
    </ul>
  </div>
</template>

<script>
import Link from "@/components/sidebar_link";
export default {
  computed: {
    state: function() {
      return this.$store.state.navbar_toggle ? "show" : "";
    }
  },
  data() {
    return {
      links: [
        {
          title: "الرئيسية",
          icon: "dashboard-speed-streamline",
          to: "Home",
          exact: true
        },
        {
          title: "المستخدمين",
          icon: "man-people-streamline-user",
          to: "Users",
          exact: false
        },
        {
          title: "العقود",
          icon: "receipt-shopping-streamline",
          to: "Contracts",
          exact: false
        }
      ]
    };
  },
  components: {
    Link
  }
};
</script>
<style lang="scss" >
#sidebar {
  width: 0;
  height: 100%;
  background: var(--sidebar);
  transition: 0.4s ease-in-out;
  // width: 250px;
  &.show {
    width: 150px;
    .logo {
      opacity: 1;
      span {
        display: inline-block;
      }
    }
  }
  .logo {
    font-size: 14px;
    opacity: 0;
    margin: 0 auto;
    display: block;
    overflow: hidden;
    opacity: 0;
    color: #fff;
    line-height: 60px;
    height: 60px;
    transition: opacity 0.4s;
    transition-delay: 0.4s;
    //background: darken(#1f1e2c, 3);
    text-align: center;
    margin-bottom: 0;
    font-weight: 600;
    border-bottom: 1px solid rgba(#fff, 0.03);
    &:hover {
      text-decoration: none;
    }
    span {
      color: var(--primary);
      font-weight: 600;
      display: none;
    }
  }

  ul {
    text-align: center;
    // margin-top: 25px;
  }
}
</style>