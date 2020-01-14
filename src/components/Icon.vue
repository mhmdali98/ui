<template>
  <i :class="['icon',`icon-`+icon ]" :style="style"></i>
</template>
<script>
export default {
  props: ["icon", "size", "align", "color", "fz", "lh", "cursor"],
  data() {
    return {
      style: {
        fontSize: this.fz || "18px",
        color: this.color || "var(--gray-5)",
        width: this.size || "24px",
        height: this.size || "24px",
        lineHeight: this.lh || this.size || "24px",
        cursor: this.cursor ? "pointer" : "auto",
        textAlign: this.align || "center"
      }
    };
  }
};
</script>