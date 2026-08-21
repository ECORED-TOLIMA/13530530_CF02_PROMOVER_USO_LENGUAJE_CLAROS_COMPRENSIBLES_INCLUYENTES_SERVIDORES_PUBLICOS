<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 El componente trabaja la importancia del comunicar de forma clara, comprensible e incluyente en el relacionamiento de las entidades públicas y sus funcionarios con las ciudadanías. Para ello, se parte del reconocimiento de la diversidad, entendida desde sus conceptos, características, tipos, enfoques y expresiones en el país, como la diversidad étnica, de género, sexual, etaria, discapacidad, víctimas y población migrante.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/st/img1.png" alt="")

      .col-lg-8
        p.mb-4 Partiendo de esto, se busca integrar el enfoque diferencial, que permite revisar y ajustar las comunicaciones según las necesidades y contextos de las personas. Igualmente, se analiza la discriminación; especialmente, el uso del lenguaje discriminatorio en el quehacer cotidiano de los servidores públicos, con el propósito de identificar expresiones que pueden ir en vías de excluir, afectar o limitar la participación ciudadana.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 El componente continúa con el desarrollo de la inclusión, sus principios, tipos y normatividad vigente; así como, el fundamento para promover una atención respetuosa y pertinente para todos los usuarios de la entidad. Por último y no menos importante, se trabajan los indicadores y el plan de mejoramiento, herramientas que permiten verificar el uso de lenguajes claros, comprensibles e inclusivos, y de ser necesario proponer acciones preventivas, correctivas y de mejora en las comunicaciones institucionales.

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg" alt="En la síntesis se presenta un mapa conceptual que organiza los principales temas relacionados con la aplicación de los lenguajes claros, comprensibles e incluyentes en la comunicación pública. Inicia con la diversidad y sus principales componentes, continúa con el enfoque diferencial como estrategia para reconocer las necesidades particulares de la ciudadanía y aborda la discriminación y la inclusión como elementos que orientan una comunicación respetuosa y libre de barreras. Posteriormente, incorpora los indicadores como herramientas para evaluar la aplicación de estos principios en la comunicación institucional y finaliza con las acciones preventivas, correctivas y de mejora, orientadas al fortalecimiento continuo de los procesos comunicativos dirigidos a la ciudadanía.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
