<template>
  <PageContainer to="users" icon="chevron-left" title="اضافة مستخدم">
    <div class="add_user">
      <b-container fluid>
        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-small">Small:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-small" size="sm" placeholder="اسم المستخدم"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-default">Default:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-default" placeholder="Enter your name"></b-form-input>
          </b-col>
        </b-row>

        <b-row class="my-1">
          <b-col sm="2">
            <label for="input-large">Large:</label>
          </b-col>
          <b-col sm="10">
            <b-form-input id="input-large" size="lg" placeholder="Enter your name"></b-form-input>
          </b-col>
        </b-row>
        <b-row>
          <b-col lg="4" class="pb-2">
            <b-button size="sm">Small Button</b-button>
          </b-col>
          <b-col lg="4" class="pb-2">
            <b-button>Default Button</b-button>
          </b-col>
          <b-col lg="4" class="pb-2">
            <b-button size="lg">Large Button</b-button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </PageContainer>
</template>

<script>
export default {
  methods: {
    log: function() {
      console.log();
    },
    setBreadItems() {
      this.$store.commit("setBreadItems", [
        {
          text: "المستخدمين",
          to: { name: "Users" }
        },
        {
          text: "اضافة مستخدم",
          active: true
        }
      ]);
    }
  },

  created() {
    this.setBreadItems();
  },

  data() {
    return {
      state: false,
      form: {},
      inputs: [
        {
          name: "userName",
          type: "text",
          placeholder: "اسم المستخدم",
          validate: {
            required: true,
            min: 3
          }
        },
        {
          name: "password",
          type: "password",
          placeholder: "كلمة المرور"
        },
        {
          name: "firstName",
          type: "text",
          placeholder: "الاسم الاول",
          validate: {
            required: true,
            min: 3
          }
        },

        {
          name: "midName",
          type: "text",
          placeholder: "الاسم الثاني",
          validate: {
            required: true,
            min: 3
          }
        },
        {
          name: "lastName",
          type: "text",
          placeholder: "الاسم الاخير"
        },
        {
          name: "nickName",
          type: "text",
          placeholder: "اللقب"
        },
        {
          name: "phoneNumber",
          type: "text",
          placeholder: "رقم الهاتف"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.add_user {
  padding: 30px;
}
.form-group {
  margin-bottom: 25px;
}
// .form-control {
//   background: var(--light-100);
//   border: none;
//   height: 50px;
// }
.add-user__head {
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  text-align: right;
  border-bottom: 1px solid var(--gray-2);
  height: 70px;
  align-items: center;

  h5 {
    color: var(--primary);
    margin: 0;
    font-weight: 300;
    font-size: 20px;
  }
}
</style>