<template>
  <Main>
    <Navbar slot="navbar" />
    <Sidebar slot="sidebar"></Sidebar>
  </Main>
</template>

<script>
import Navbar from "@/views/navbar";
import Sidebar from "@/views/sidebar";
import Main from "@/views/main";
export default {
  components: {
    Sidebar,
    Main,
    Navbar
  }
};
</script>
