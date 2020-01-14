 <template>
  <PageContainer to="add-user" icon="plus-round" />
</template>

<script>
export default {
  methods: {
    setBreadItems() {
      this.$store.commit("setBreadItems", [
        {
          text: "المستخدمين",
          active: true
        }
      ]);
    }
  },
  created() {
    this.setBreadItems();
  }
};
</script>
<style lang="scss" scoped>
</style>