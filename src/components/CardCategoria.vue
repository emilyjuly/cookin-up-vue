<script lang="ts">
import type { PropType } from "vue";
import type ICategoria from "@/interfaces/ICategoria";
import Tag from "@/components/Tag.vue"
import IngredienteSelecionavel from "@/components/IngredienteSelecionavel.vue";

export default {
    components: { IngredienteSelecionavel, Tag },
    props: {
        categoria: { type: Object as PropType<ICategoria>, required: true },
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/imagens/icones/categorias_ingredientes/${categoria.imagem}`" alt="" class="categoria__imagem">
            <h2 class="paragrafo-lg categoria__nome">{{ categoria.nome }}</h2>
        </header>

        <ul class="categoria__ingredientes">
            <li v-for="ingrediente in categoria.ingredientes" :key="ingrediente">
                <IngredienteSelecionavel :ingrediente="ingrediente" @remover-ingrediente="$emit('removerIngrediente', $event)" @adicionar-ingrediente="$emit('adicionarIngrediente', $event)" />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.categoria {
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0 rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.categoria__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.categoria__imagem {
    width: 2.5rem;
}

.categoria__nome {
    text-align: center;
    color: #263238;
    font-weight: 700;
}

.categoria__ingredientes {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>