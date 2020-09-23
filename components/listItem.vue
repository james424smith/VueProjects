<template>
  <div class="book-container">
    <div class="book-content">
      <NuxtLink :to="'/books/' + book.slug" class="book-title">
        <h3>{{id+1}}{{". " + book.title}}</h3>
      </NuxtLink>
      <span class="rating">({{book.rating}}/10)</span>
      <p class="author">{{book.author}}</p>
      <div class="book-synopsis">{{book.synopsis.substring(0, 200) + "..."}}</div>
      <div class="upvote">
        <div v-if="book.upvoted == true">
          <button class="btn-upvoted">Upvoted</button>
          <span class="rating">{{"Upvoted " + book.upvotes + " times"}}</span>
        </div>
        <div v-else>
          <button class="btn-nonvoted">Upvote</button>
          <span class="rating">{{"Upvoted " + book.upvotes + " times"}}</span>
        </div>
      </div>
    </div>

    <NuxtLink :to="'/books/' + book.slug" class="cover">
      <v-img class="book-cover" v-bind:src="book.cover" alt="alt" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "listItem",
  data() {
    return {};
  },
  props: {
    book: {
      title: String,
      rating: String,
      author: String,
      slug: String,
      synopsis: String,
      upvoted: Boolean,
      upvotes: String,
      cover: {
        url: String,
      },
    },
    id: Number,
  },
  metaInfo() {
    return {
      book: [
        {
          title: this.book.title,
          rating: this.book.rating,
          author: this.book.author,
          synopsis: thissynopsis,
          upvoted: this.book.upvoted,
          upvotes: this.book.upvotes,
        },
      ],
      id: this.id,
    };
  },
};
</script>

<style>
</style>