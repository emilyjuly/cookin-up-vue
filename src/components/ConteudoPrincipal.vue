<script lang="ts">
import SelecionarIngredientes from "@/components/SelecionarIngredientes.vue";
import { obterIngredientes } from "@/http";
import Tag from "@/components/Tag.vue";
import SuaLista from "@/components/SuaLista.vue";
import BotaoPrincipal from "@/components/BotaoPrincipal.vue";
import MostrarReceitas from "@/components/MostrarReceitas.vue";
import MostrarTodasAsReceitas from "@/components/MostrarTodasAsReceitas.vue"

type Pagina = 'SelecionarIngredientes' | 'MostrarReceitas' | 'MostrarTodasAsReceitas'

export default {
    components: { MostrarReceitas, MostrarTodasAsReceitas, BotaoPrincipal, SuaLista, Tag, SelecionarIngredientes },
    data() {
        return {
            ingredientes: obterIngredientes().ingredientes,
            conteudo: 'SelecionarIngredientes' as Pagina
        }
    },
    methods: {
        adicionarIngrediente(ingrediente: string) {
            this.ingredientes.push(ingrediente)
        },
        removerIngrediente(ingrediente: string) {
            this.ingredientes = this.ingredientes.filter(item => item !== ingrediente)
        },
        navegar(pagina: Pagina) {
            this.conteudo = pagina
        }
    }
}
</script>

<template>
    <main class="conteudo-principal">
        <SuaLista :ingredientes="ingredientes" />
        <BotaoPrincipal texto="Buscar receitas" @click="navegar('MostrarReceitas')" v-if="conteudo === 'SelecionarIngredientes' && ingredientes.length > 0" />
        <KeepAlive include="SelecionarIngredientes">
            <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'" @remover-ingrediente="removerIngrediente($event)" @adicionar-ingrediente="adicionarIngrediente($event)" />

            <MostrarReceitas v-else-if="conteudo === 'MostrarReceitas'" @editar-receitas="navegar('SelecionarIngredientes')" :ingredientes="ingredientes" />

            <MostrarTodasAsReceitas v-else-if="conteudo === 'MostrarTodasAsReceitas'" @editar-receitas="navegar('SelecionarIngredientes')" />
        </KeepAlive>
        <BotaoPrincipal texto="Ver todas as receitas" @click="navegar('MostrarTodasAsReceitas')" v-if="conteudo === 'SelecionarIngredientes'" />
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0 0;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>