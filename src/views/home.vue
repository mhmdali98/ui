<template>
  <PageContainer to="add-user" title="الرئيسية">
    <div class="mycontent">
      <div class="hecont">
        <b-row class="text-center" style="background:#FFF;">
          <b-col md="3" lg="3" sm="6">
            <div class="status">
              <Icon
                icon="pencil-square-o"
                fz="30px"
                cursor="true"
                class="ico"
                size="44px"
                color="#30a5ff"
              ></Icon>
              <p>120</p>
              <span>العقود</span>
            </div>
          </b-col>

          <b-col md="3" lg="3" sm="6">
            <div class="status">
              <Icon icon="users" fz="30px" cursor="true" class="ico" size="44px" color="#1ebfae"></Icon>
              <p>24</p>
              <span>المستخدمون</span>
            </div>
          </b-col>

          <b-col md="3" lg="3" sm="6">
            <div class="status">
              <Icon icon="male" fz="30px" cursor="true" class="ico" size="44px" color="#ffb53e"></Icon>
              <p>4</p>
              <span>المدراء</span>
            </div>
          </b-col>

          <b-col md="3" lg="3" sm="6">
            <div class="status">
              <Icon icon="search" fz="30px" cursor="true" class="ico" size="44px" color="#f9243f"></Icon>
              <p>20k</p>
              <span>مرات البحث</span>
            </div>
          </b-col>
        </b-row>
      </div>

      <div class="mychart text-center">
        <h2>معدل العقود</h2>
        <VueApexCharts height="300" type="line" :options="options" :series="series"></VueApexCharts>
      </div>
    </div>
  </PageContainer>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  methods: {
    setBreadItems() {
      this.$store.commit("setBreadItems", [
        {
          text: "الرئيسية",
          active: true
        }
      ]);
    }
  },
  created() {
    this.setBreadItems();
  },

  components: {
    VueApexCharts
  },

  data: function() {
    return {
      options: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin: 0 !important;
}

.hecont {
  margin: 20px;
}

.logout {
  font-size: 12px;
  font-family: "Cairo", sans-serif !important;
}

.mychart {
  text-align: right;
  margin-bottom: 20px;
  margin-top: -15px;
  font-family: "Cairo", sans-serif !important;
  background: #fff;
}

.mychart h2 {
  margin-top: 20px;
  text-align: right;
  font-size: 20px;
  padding-top: 28px;
  font-weight: 300;
  padding-bottom: 28px;
  padding-right: 25px;
  border-bottom: 1px solid #ccc;
}

.status {
  margin: 30px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.status:first-child {
  border: 0px;
}

.status p {
  color: #373b45;
  font-size: 3em;
  font-family: "Cairo", sans-serif !important;
  margin-bottom: -5px;
}

.status:last-child {
  border: 0;
}

.status .ico {
  font-size: 2em;
}

.status .search {
  color: #f9243f;
}

.color-blue {
  color: #30a5ff;
}

.color-orangesearch {
  color: #ffb53e;
}

.color-teal {
  color: #1ebfae;
}

.status span {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.8em;
  color: #c5c7cc;
  font-family: "Cairo", sans-serif !important;
}

.navbar-dark .navbar-brand {
  font-family: "Cairo", sans-serif !important;
}
.navbar-brand span {
  color: #30a5ff;
}

.user-menu {
  display: inline-block;
  margin-top: 14px;
  margin-right: 10px;
  list-style: none;
  padding: 0;
}

.user-menu a {
  color: #fff;
}

.navbar {
  padding: 15px !important ;
  background: #484d53 !important;
}

.myside {
  font-family: "Cairo", sans-serif !important;
  display: block;
  padding: 0;
  display: none;
  box-shadow: none;
  background: #fff;
}

.myside ul {
  margin: 20px 0px;
  text-align: right;
}

.myside form {
  padding: 10px 0 0 0;
  margin: 10px 10px 20px 10px;
}

.nav > li {
  direction: rtl;
}

.breadcrumb {
  border-radius: 0;
  padding: 10px 15px 10px 15px;
  background: #e9ecf2;
  text-align: right;
  direction: rtl;
  margin: 0;
}

.bum {
  background: #e9ecf2;
  text-align: right;
  direction: rtl;
  border-radius: 0;
  font-family: "Cairo", sans-serif;
  padding: 10px 30px 10px 15px;
}

.bum i {
  color: #30a5ff;
}

.headercont {
  font-family: "Cairo", sans-serif;
  text-align: right;
  padding: 15px;
}

.headercont h1 {
  margin-top: 20px;
  text-align: right;
  border-bottom: 0;
  font-size: 30px;
  font-weight: 300;
}
</style>