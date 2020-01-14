<template>
  <v-menu bottom offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>{{translate}}</v-icon>
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="locale in $i18n.locales"
        :key="locale.code"
        @click="setLocale(locale.code)"
      >
        <v-list-item-title>{{ locale.display }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
import { mdiTranslate } from "@mdi/js";

export default {
  data: () => ({
    translate: mdiTranslate
  }),
  methods: {
    setLocale(code) {
      this.$store.commit("setLocale", code);
      this.$router.push({
        name: this.$route.name,
        params: { lang: code }
      });
    }
  }
};
</script>
