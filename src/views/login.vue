<template>
  <div id="login">
    <div class="login__content">
      <div class="login__right"></div>

      <div class="login__left">
        <div class="left__content">
          <h4>تسجيل دخول</h4>
          <b-form>
            <b-form-group invalid-feedback="errrrrrror">
              <b-form-input
                v-model="form.email"
                v-validate="'required|min:3'"
                type="email"
                name="email"
                required
                placeholder="البريد الالكتروني"
              ></b-form-input>
            </b-form-group>

            <b-form-group>
              <b-form-input
                v-model="form.password"
                type="password"
                required
                placeholder="كلمة المرور"
              ></b-form-input>
            </b-form-group>
            <router-link :to="{name:`Layout`}">
              <b-button block type="submit">تسجيل دخول</b-button>
            </router-link>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      }
    };
  }
};
</script>

<style>
</style>