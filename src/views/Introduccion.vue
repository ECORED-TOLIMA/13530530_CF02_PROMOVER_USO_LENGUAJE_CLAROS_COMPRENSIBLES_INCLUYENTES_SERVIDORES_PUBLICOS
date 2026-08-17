<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 El lenguaje inclusivo y no discriminatorio es aquel que reconoce, visibiliza y valora la diversidad humana a través de las palabras. En la comunicación pública, este lenguaje permite que la información institucional no excluya, invisibilice ni reproduzca estereotipos sobre las personas o grupos sociales.

    p.mb-4 Como punto de partida para el desarrollo de este contenido, se recomienda consultar la Guía de buenas prácticas en lenguaje claro e incluyente para el Relacionamiento con la Ciudadanía del Ministerio de Educación Nacional. Su lectura permitirá contextualizar los conceptos y fortalecer la comprensión de los temas que se abordarán en este componente formativo.

    p.mb-4 Este componente formativo permite comprender que el lenguaje no solo sirve para entregar información, también influye en la forma como las personas se sienten reconocidas, orientadas y atendidas. En la comunicación pública, una palabra, una respuesta o una explicación pueden acercar a la ciudadanía, pero también pueden generar distancia cuando no consideran la diversidad de quienes reciben el mensaje.

    p.mb-4 Por eso, este componente invita a comprender la comunicación desde el respeto, la claridad y la comprensión de los diferentes contextos ciudadanos. A lo largo del desarrollo se abordarán temas como la diversidad, el enfoque diferencial, la discriminación, la inclusión y el uso de lenguajes claros, comprensibles e inclusivos en el relacionamiento con las ciudadanías.

    p.mb-4 El recorrido se apoyará en conceptos, ejemplos y situaciones propias del quehacer institucional. También se revisarán indicadores y acciones de mejoramiento que ayudan a verificar si la información pública responde a las necesidades de las personas y si la atención que se brinda es pertinente, respetuosa e incluyente.

    p.mb-4 Por lo anterior y para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
