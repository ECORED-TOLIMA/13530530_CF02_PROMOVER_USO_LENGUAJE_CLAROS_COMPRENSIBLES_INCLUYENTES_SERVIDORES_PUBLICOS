<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    figure.mb-4
      img(src="@/assets/curso/temas/intro/img1.png" alt="")

    p.mb-4 El lenguaje inclusivo y no discriminatorio es aquel que reconoce, visibiliza y valora la diversidad humana a través de las palabras. En la comunicación pública, este lenguaje permite que la información institucional no excluya, invisibilice ni reproduzca estereotipos sobre las personas o grupos sociales.

    .tarjeta.tarjeta--gris.intro-contexto.p-4.mb-4
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0.d-none.d-lg-block
          figure.intro-contexto__imagen
            img(src="@/assets/curso/temas/intro/img2.svg" alt="")
        .col-lg-8
          h4 Contexto formativo
          .intro-contexto__linea.mb-4
          p.mb-4 Como punto de partida para el desarrollo de este contenido, se recomienda consultar la #[strong Guía de buenas prácticas en lenguaje claro e incluyente para el Relacionamiento con la Ciudadanía] del Ministerio de Educación Nacional. Su lectura permitirá contextualizar los conceptos y fortalecer la comprensión de los temas que se abordarán en este componente formativo.
          a.boton.color-acento-botones(
            href="https://www.mineducacion.gov.co/1780/articles-423521_recurso_3.pdf"
            target="_blank"
            rel="noopener noreferrer"
          )
            span Enlace web
            i.fas.fa-external-link-alt

    p.mb-4 Este componente formativo permite comprender que el lenguaje no solo sirve para entregar información, también influye en la forma como las personas se sienten reconocidas, orientadas y atendidas. En la comunicación pública, una palabra, una respuesta o una explicación pueden acercar a la ciudadanía, pero también pueden generar distancia cuando no consideran la diversidad de quienes reciben el mensaje.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0 Por eso, este componente invita a comprender la comunicación desde el respeto, la claridad y la comprensión de los diferentes contextos ciudadanos. A lo largo del desarrollo se abordarán temas como la diversidad, el enfoque diferencial, la discriminación, la inclusión y el uso de lenguajes claros, comprensibles e inclusivos en el relacionamiento con las ciudadanías.

    .row.align-items-center.justify-content-center.mb-4
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.intro-icono(src="@/assets/curso/temas/intro/img3.svg" alt="")
      .col-lg-9
        p.mb-0 El recorrido se apoyará en conceptos, ejemplos y situaciones propias del quehacer institucional. También se revisarán indicadores y acciones de mejoramiento que ayudan a verificar si la información pública responde a las necesidades de las personas y si la atención que se brinda es pertinente, respetuosa e incluyente.

    p.mb-4 Por lo anterior y para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:

    .row.justify-content-center.align-items-center.mb-0
      .col-12
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="Video introductorio del componente formativo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>
