<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
    props: {
        receita: { type: Object as PropType<IReceita>, required: true }
    },
    data() {
        return {
            showIngredientes: false
        }
    }
}
</script>

<template>
    <article class="receita">
        <header class="receita__cabecalho">
            <img class="receita__imagem" :src="`/imagens/receitas/${receita.imagem}`" :alt="`Foto de ${receita.nome}`">
        </header>

        <section class="receita__corpo">
            <h2 class="paragrafo receita__nome">
                {{ receita.nome }}
            </h2>
            <button class="mostrar-btn" @click="showIngredientes = !showIngredientes">{{ showIngredientes ? 'Ocultar' : 'Mostrar' }} ingredientes <img :class="{ 'botao-icone-top': showIngredientes, 'botao-icone-baixo': !showIngredientes }" src="/imagens/icones/botoes/down.png" /></button>
            <lu v-if="showIngredientes" v-for="ingrediente in receita.ingredientes">
                <li>{{ ingrediente }}</li>
            </lu>
        </section>
    </article>
</template>

<style scoped>
.receita {
    display: flex;
    width: 17.625rem;
    max-width: 19.5rem;
    flex-direction: column;
    align-items: center;

    border-radius: 1rem;
    background: var(--Branco, #FFF);
    box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__corpo {
    padding: 2rem 1rem;
}

.mostrar-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #E65600;
    cursor: pointer;
    padding: 5px 15px 5px 15px;
    font-weight: bold;
}

.botao-icone-baixo {
    width: 14px;
    transition: transform 0.3s;
}

.botao-icone-top {
    width: 14px;
    transform: rotate(180deg);
    transition: transform 0.3s;
}

.receita__imagem {
    width: 100%;
    border-radius: 1rem 1rem 0rem 0rem;
    display: block;
}

.receita__nome {
    font-weight: 700;
    color: var(--cinza, #444);
}
</style>
