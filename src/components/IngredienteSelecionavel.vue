<script lang="ts">
import Tag from "@/components/Tag.vue";

export default {
    components: { Tag },
    props: {
        ingrediente: { type: String, required: true }
    },
    data() {
        return {
            selecionado: false
        }
    },
    methods: {
        aoClicar() {
            this.selecionado = !this.selecionado

            this.selecionado
                ?
                this.$emit('adicionarIngrediente', this.ingrediente)
                :
                this.$emit('removerIngrediente', this.ingrediente)
        }
    },
    emits: ['adicionarIngrediente', 'removerIngrediente']
}
</script>

<template>
    <button class="ingrediente" @click="aoClicar" :aria-pressed="selecionado">
        <Tag :texto="ingrediente" :ativa="selecionado" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>
