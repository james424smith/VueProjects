<template>
  <v-container class="main-content">
    <v-card class="detail-content">
      <v-card-title class="header">
        <div class="detail-title">
          <h1>{{result.title}}</h1>
          <p class="detail-author">{{result.author}}</p>
        </div>

        <div class="detail-upvote">
          <div v-if="result.upvoted == true">
            <span class="rating">{{"Upvoted " + result.upvotes + " times"}}</span>
            <button class="btn-upvoted">Upvoted</button>
          </div>
          <div v-else>
            <span class="rating">{{"Upvoted " + result.upvotes + " times"}}</span>
            <button class="btn-nonvoted">Upvote</button>
          </div>
        </div>
      </v-card-title>

      <div class="detail-cover">
        <img v-bind:src="result.cover" alt="alt" />
      </div>

      <v-card-text class="detail-synopsis">
        <h1>Synopsis</h1>
        <div class="synopsis-content">{{result.synopsis}}</div>
        <p class="detail-rating">Ratings: {{result.rating + "/10"}}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  async asyncData({ $axios, route, params }) {
    console.log("asyncData");
    const result = await $axios.$get(
      "http://localhost:3000/books/" + params.slug
    );
    console.log(params.slug);
    return { result };
  },
  data() {
    return {
      slug: "",
      result: [],
      id: this.id,
    };
  },
  props: {},
  computed: {
    getDetail() {
      return this.result;
    },
  },
};
</script>