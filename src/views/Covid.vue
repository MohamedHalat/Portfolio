<template>
  <div>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Country Data</h5>
        <p class="card-text">
          <p-datatable :value="countryData" :paginator="true" :rows="20">
            <p-column field="country" header="Country" sortable></p-column>
            <p-column field="cases" header="Cases" sortable></p-column>
            <p-column field="deaths" header="Deaths" sortable></p-column>
            <p-column field="active" header="Active Cases" sortable></p-column>
          </p-datatable>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

export default {
  name: "Covid",
  components: {
    "p-datatable": DataTable,
    "p-column": Column,
  },
  data() {
    return {
      countryData: [],
    };
  },
  methods: {
    getCovidData() {
      axios.get("https://disease.sh/v3/covid-19/countries").then((res) => {
        console.log(res);
        this.countryData = res.data;
      });
    },
  },
  mounted() {
    this.getCovidData();
  },
};
</script>
<style scoped>
</style>