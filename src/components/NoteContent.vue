<script setup>
    import markdownit from 'markdown-it'
    import { computed, ref } from 'vue'

    import ToolBarVue from "./ToolBar.vue";
    import useNote from '@/composables/useNote'
    import { vueDebounce } from 'vue-debounce'
    const { createNote, activeNote, updateNote, removeNote } = useNote()


    const vDebounce = vueDebounce({ lock: true })


    const removeActiveNote = () => {
        if (confirm('Are you suer?')) {
            removeNote()
        }
    }

    const md = markdownit()
    const preview = computed(() => {
        if (!activeNote.value.body) {
            return ''
        }
        return md.render(activeNote.value.body)
    })

    const writable = ref(true)

</script>
<template>
    <main class="note">
        <!-- <ToolBarVue @new-note="createNote" @remove-note="removeNote" /> -->
        <ToolBarVue @new-note="createNote" @remove-note="removeActiveNote" @toggle-prev="writable = !writable" :disabled="!activeNote" />

        <div class="content" v-if="activeNote">
            <!-- <input type="text" class="content-title" @keyup="updateNote" v-model="activeNote.title" placeholder="Untitled" /> -->
            <!-- <textarea class="content-body" @keyup="updateNote" v-model="activeNote.body">Note content</textarea> -->
            <input type="text" class="content-title" :readonly="!writable" v-debounce:500ms="updateNote" v-model="activeNote.title"
                placeholder="Untitled" />
            <textarea class="content-body" v-show="writable" v-debounce:500ms="updateNote"
                v-model="activeNote.body">Note content</textarea>
            <div v-html="preview" v-show="!writable"></div>
        </div>
    </main>
</template>



<style lang="scss" scoped></style>
