<script setup>
    import useTheme from '../composables/useTheme'
    import IconPencilVue from "./icons/IconPencil.vue";
    import IconEyeVue from "./icons/IconEye.vue";
    import IconBoldVue from "./icons/IconBold.vue";
    import IconItalic from "./icons/IconItalic.vue";
    import IconHeader3 from "./icons/IconHeader3.vue";
    import IconQuote from "./icons/IconQuote.vue";
    import IconCode from "./icons/IconCode.vue";
    import IconUl from "./icons/IconUl.vue";
    import IconOl from "./icons/IconOl.vue";
    import IconCheckList from "./icons/IconCheckList.vue";
    import IconLink from "./icons/IconLink.vue";
    import IconImage from "./icons/IconImage.vue";
    import IconSun from "./icons/IconSun.vue";
    import IconMoon from "./icons/IconMoon.vue";
    import IconTrash from "./icons/IconTrash.vue";


    const emit = defineEmits(['new-note', 'remove-note', 'toggle-prev'])




    defineProps({
        disabled: Boolean,
    })

    const { toggleTheme } = useTheme()
</script>
<template>
    <div class="topbar right-topbar">
        <div class="button-group">
            <div>
                <button class="btn" @click="emit('new-note')">
                    <IconPencilVue />
                </button>
                <button :disabled="disabled" class="btn" @click="emit('toggle-prev')">
                    <IconEyeVue />
                </button>
            </div>
            <div class="divider"></div>
            <div>
                <button :disabled="disabled" class="btn">
                    <IconBoldVue />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconItalic />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconHeader3 />
                </button>
            </div>
            <div class="divider"></div>
            <div>
                <button :disabled="disabled" class="btn">
                    <IconQuote />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconCode />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconUl />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconOl />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconCheckList />
                </button>
            </div>
            <div class="divider"></div>
            <div>
                <button :disabled="disabled" class="btn">
                    <IconLink />
                </button>
                <button :disabled="disabled" class="btn">
                    <IconImage />
                </button>
            </div>
            <div class="divider"></div>
            <div>
                <button :disabled="disabled" class="btn btn-remove" @click="emit('remove-note')">
                    <icon-trash />
                </button>
            </div>
        </div>
        <button class="btn-switch-theme" @click="toggleTheme">
            <span class="switch-circle">
                <span class="switch-icon">
                    <IconSun />
                    <IconMoon />
                </span>
            </span>
        </button>
    </div>
</template>

<style scoped>
    .btn-remove {
        color: red;
    }
</style>
