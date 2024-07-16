<script lang="ts">
import { obterReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceita';
import BotaoPrincipal from './BotaoPrincipal.vue';
import CardReceita from './CardReceita.vue';

export default {
    data() {
        return {
            receitasEncontradas: [] as IReceita[]
        };
    },
    async created() {
        const receitas = await obterReceitas();
        console.log(receitas)

        this.receitasEncontradas = receitas;
    },
    components: { BotaoPrincipal, CardReceita },
    emits: ['editarReceitas']
}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas">Receitas</h1>

        <div v-if="receitasEncontradas.length" class="receitas-wrapper">
            <ul class="receitas">
                <li v-for="receita of receitasEncontradas" :key="receita.nome">
                    <CardReceita :receita="receita" />
                </li>
            </ul>
        </div>
        <BotaoPrincipal texto="Editar lista" @click="$emit('editarReceitas')" />
    </section>
</template>

<style scoped>
.mostrar-receitas {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.titulo-receitas {
    color: var(--verde-medio, #3D6D4A);
    margin-bottom: 1.5rem;
}

.receitas-wrapper {
    margin-bottom: 3.5rem;
}

.receitas {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

@media only screen and (max-width: 767px) {
    .receitas-wrapper {
        margin-bottom: 2rem;
    }
}
</style>
