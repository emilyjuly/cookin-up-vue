<script lang="ts">
export default {
    props: {
        texto: { type: String, required: true },
    }
}
</script>

<template>
    <button class="paragrafo-lg botao_principal">
        {{ texto }}
    </button>
</template>

<style scoped>
.botao_principal {
    width: 19.5rem;
    height: 3.5rem;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-weight: 700;
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    box-shadow: 4px 4px 15px 0 rgba(255, 115, 76, 0.25);
    cursor: pointer;
    transition: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
}

.botao_principal:hover {
    background: #D1451E;
}
</style>