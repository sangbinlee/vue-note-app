<script setup>
  import useNote from '@/composables/useNote'
  import { computed } from 'vue'

  const props = defineProps({
    note: Object,
    active: Boolean
  })

  const { setActiveNoteId } = useNote()

  const title = computed(() => props.note.title.substring(0, Math.min(120, props.note.title.length)))
  const id = computed(() => props.note.id)

  const body = computed(() => {
    if (!props.note.body) {
      return 'No additional text'
    } else {
      return props.note.body.substring(0, Math.min(150, props.note.body.length))
    }
  })

  const isToday = (date) => {
    const today = new Date()
    return date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
  }

  const date = computed(() => {
    const date = new Date(props.note.updated)
    if (isToday(date)) {
      const hours = date.getHours().toString().padStart(2, 0)
      const minutes = date.getMinutes().toString().padStart(2, 0)
      return `${hours}:${minutes}`
    }
    else {
      const year = date.getFullYear().toString().substring(2)
      const month = date.getMonth()
      const day = date.getDay()
      return '${day}/${month}/${year}'
    }
  })
</script>
<template>
  <li class="note-item" :class="{ 'active': active }" @click="setActiveNoteId(note.id)">
    <div class="note-item-header">
      <strong>{{ id }} {{ title }}</strong>
      <time :datetime="date">{{ date }}</time>
    </div>
    <div class="note-item-body">
      {{ body }}
    </div>
  </li>
</template>


<style lang="scss" scoped></style>