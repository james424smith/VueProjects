<template>
  <v-container>
    <v-card id="container-shadow">
      <v-card-title class="justify-center" id="title">
        <h1>Top books of all time</h1>
      </v-card-title>
      <v-card-text>
        <v-col v-if="!getAllBooks" cols="12">
          <v-text-field
            ref="search"
            v-model="search"
            full-width
            hide-details
            label="Search"
            single-line
          ></v-text-field>
        </v-col>

        <v-divider v-if="!getAllBooks"></v-divider>

        <v-list>
          <div v-for="(book, i) in booklist" :key="i">
            <div v-if="!selected.includes(book)" :key="book.title">
              <div v-if="i%2 == true">
                <listItem class="list-item odd" three-line v-bind:book="book" :id="i" />
              </div>
              <div v-else>
                <listItem class="list-item even" three-line v-bind:book="book" :id="i" />
              </div>
            </div>
          </div>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import listItem from "~/components/listItem";

export default {
  components: {
    listItem,
  },
  async asyncData({ $axios }) {
    const result = await $axios.$get("http://localhost:3000/books");
    return { books: result.books };
  },
  data() {
    return {
      books: [],
      loading: false,
      search: "",
      selected: [],
    };
  },
  computed: {
    getAllBooks() {
      return this.selected.length === this.books.length;
    },
    booklist() {
      const search = this.search.toLowerCase();

      if (!search) return this.books;

      return this.books.filter((book) => {
        const text = book.title.toLowerCase() + book.synopsis.toLowerCase();

        return text.indexOf(search) > -1;
      });
    },
    selections() {
      const selections = [];

      for (const selection of this.selected) {
        selections.push(selection);
      }

      return selections;
    },
  },
};
</script>
