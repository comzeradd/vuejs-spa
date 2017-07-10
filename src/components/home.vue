<template>
  <div>
    <div v-if="loading" class="graph-spinner text-center">
      <div class="three-quarters" id="spinner-people">loading...</div>
    </div>
    <div class="card-deck">
      <router-link :to='"/item/" + item.id' class="card" v-for="item in items" :key="item.id">
        <div class="card-block">
          <h4 class="card-title">{{ item.title }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import Api from '../api';

  export default {
    name: 'home',

    data () {
      return {
        items: [],
        loading: true
      }
    },

    created () {
      this.fetchItems();
    },

    methods: {
      fetchItems: function() {
        Api.getItems().then(response => {
          this.loading = false;
          this.items = response.data;
        }, error => {
          this.loading = false;
        });
      }
    }
  };
</script>
