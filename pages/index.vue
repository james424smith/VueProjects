<template>
  <p></p>
</template>

<script>
export default {
  middleware({ store, redirect }) {
    return redirect("/books");
  },
};
</script>
