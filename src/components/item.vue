<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><router-link :to="{ name: 'home'}">Home</router-link></li>
      <li class="breadcrumb-item active">{{ item.title }}</li>
    </ol>
    <div class="row event">
      <div class="col-sm-12">
        <vue-markdown :source="item.description"></vue-markdown>
        <div>
          <span class="date">{{ item.created | moment }}</span>
        </div>
        <div class="link" v-if="item.link">
          <a :href="item.link" target="_blank">link</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Api from '../api';
  import moment from 'moment';
  import VueMarkdown from 'vue-markdown';

  export default {
    name: 'item',

    data () {
      return {
        item: [],
        error: false,
        loading: true
      }
    },

    components: {
      VueMarkdown
    },

    created () {
      Api.getItem(this.$route.params.id).then(response => {
        this.loading = false;
        this.item = response[0];
      }, error => {
        this.loading = false;
        this.error = true;
      });
    },

    filters: {
      moment: function (date) {
        moment.locale('en');
        return moment(date).format('dddd, DD.MM HH:mm');
      }
    }
  };
</script>

<style lang="scss">
  .event {
    margin-top: 20px;

    div {
      margin-top: 20px;
    }
  }
</style>
