<template>
    <header class="banner">
        <div class="apresentacao">
            <p class="cabecalho-lg frase-cabecalho">
                <span class="texto-laranja">Um banquete de ideias para</span>
                despertar o chef que há em você!
            </p>

            <p class="subtitulo-lg">
                Explore novas receitas todos os dias com os ingredientes que estão ao seu alcance!
            </p>
        </div>

        <img src="../assets/images/foto-banner.svg" alt="Um pote com frutas dentro." class="foto-banner">
    </header>
</template>

<style scoped>
.banner {
    padding: 4rem 7.5rem;
    color: #263238;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 3.25rem;
}

.frase-cabecalho {
    margin-bottom: 2rem;
}

.texto-laranja {
    color: #E65600;
}

.foto-banner {
    width: 35rem;
}

@media only screen and (max-width: 1300px) {
    .banner {
        padding: 4rem 3.75rem;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
}

@media only screen and (max-width: 767px) {
    .banner {
        padding: 4rem 1.5rem;
    }

    .foto-banner {
        width: min(100%, 21.25rem);
    }
}
</style>