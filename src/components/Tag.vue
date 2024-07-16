<script lang="ts">
import type IIngrediente from '@/interfaces/IIngrediente';
import type { PropType } from 'vue';


export default {
    props: {
        texto: String,
        ativa: Boolean
    }
}
</script>

<template>
    <span :class="['tag', { ativa }]">
        {{ texto }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.tag.ativa {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>