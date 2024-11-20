<script setup>
  import useNote from "@/composables/useNote";
  import NoteItemVue from "./NoteItem.vue";


  const { allNotes, activeNote } = useNote()


</script>
<template>
  <nav v-if="allNotes.length">
    <!-- <div class="activeNote">activeNote : {{ activeNote }}</div> -->
    <ul class="note-list">
      <NoteItemVue v-for="note in allNotes" :note="note" :active="activeNote && activeNote.id === note.id"
        :key="note.id" />
    </ul>
  </nav>
  <div class="no-notes-message" v-else>
    No notes
  </div>
</template>


<style lang="scss" scoped></style>
