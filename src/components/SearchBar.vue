<script setup>
  import useNote from '../composables/useNote'
  import { ref, nextTick } from 'vue'
  const searching = ref(false)
  const searchEl = ref(null)
  const searchActive = () => {
    searching.value = true
    nextTick(() => searchEl.value.focus())
  }

  const {searchTerm}  =  useNote()

  const reset = () => {
    searching.value = false
    searchTerm.value = ''
  }

</script>
<template>
  <div class="topbar left-topbar" :class="{ 'search-active': searching }">
    <h2>All notes</h2>
    <button class="btn btn-search" @click="searchActive">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
        viewBox="0 0 16 16">
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </button>
    <button class="btn search btn-back" @click="reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left"
        viewBox="0 0 16 16">
        <path fill-rule="evenodd"
          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
      </svg>
    </button>
    <input type="text" placeholder="Search" class="search-input search" ref="searchEl" v-model="searchTerm" />
  </div>
</template>

<style lang="scss" scoped></style>
