<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1.
        Enfoque diferencial
    figure.mb-4
      img(src="@/assets/curso/temas/t2/img1.png" alt="")
    p.mb-4.
      La comunicación pública busca que todas las personas puedan acceder, comprender y utilizar la información que producen las entidades. Sin embargo, las características y condiciones de la ciudadanía son diversas, por lo que una misma estrategia de comunicación no siempre responde a las necesidades de todos los grupos de población.
    .row.justify-content-center.mb-0
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0.
            En este contexto, el enfoque diferencial brinda orientaciones para reconocer esas diferencias y promover procesos de comunicación más pertinentes, accesibles e incluyentes. Su aplicación favorece una relación más cercana entre las entidades y la ciudadanía, al facilitar el acceso a la información y fortalecer el ejercicio de los derechos.

    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        2.1 Concepto
    .row.align-items-stretch.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure.h-100.mb-0
          img.h-100.w-100(src="@/assets/curso/temas/t2/img2.png" alt="" style="object-fit: cover")
      .col-lg-8
        .row.align-items-start.mb-3
          .col-auto.d-none.d-md-block
            img.tema1-definicion__icono(src="@/assets/curso/temas/t2/img3.svg" alt="")
          .col
            p.mb-0.
              El reconocimiento de la diversidad es fundamental para fortalecer la comunicación entre las entidades y la ciudadanía. No basta con identificar que las personas son diferentes; también es necesario comprender que algunas poblaciones requieren formas particulares de atención, orientación y comunicación para acceder a los servicios y ejercer plenamente sus derechos.
        p.mb-4.
          En este sentido, el enfoque diferencial permite comprender las realidades de las personas a partir de sus contextos, condiciones y necesidades. Reconoce que no todas las ciudadanías viven las mismas situaciones ni enfrentan las mismas barreras. Por ejemplo, una persona con discapacidad, una víctima del conflicto armado, una comunidad étnica o una persona migrante pueden requerir ajustes en el lenguaje, los formatos, los canales o la forma en que se comunica la información para facilitar su acceso y comprensión.
        .cajon.color-secundario.p-4
          p.mb-0.
            Aplicar el enfoque diferencial en las comunicaciones públicas significa reconocer las diferencias y evitar que se conviertan en obstáculos, la intención no es crear privilegios, sino que se generen condiciones más justas para que la información pueda ser comprendida y utilizada desde una mirada de la pertinencia, el respeto y la inclusión. No se trata solamente de lo que la entidad necesita decir, sino desde lo que la ciudadanía necesita comprender.
    p.mb-4.
      La aplicación del enfoque diferencial transforma la manera en que las entidades diseñan y comunican la información. Mientras una comunicación sin este enfoque suele asumir que todas las personas tienen las mismas condiciones para acceder y comprender los mensajes, una comunicación con enfoque diferencial reconoce las distintas necesidades de la ciudadanía y realiza los ajustes necesarios para facilitar el acceso, la comprensión y el ejercicio de los derechos. La siguiente tabla presenta algunas diferencias entre ambas formas de comunicar:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5.
        Tabla 2.
      span.
        Comparación entre la comunicación con y sin enfoque diferencial
    .tabla-a.color-acento-contenido.tema1-tabla.mb-0
      table
        thead
          tr
            th.
              Sin enfoque diferencial
            th.
              Con enfoque diferencial
        tbody
          tr
            td.
              Se crea un mensaje para el público sin considerar las condiciones de las personas.
            td.
              Se realizan los ajustes en el lenguaje o canal según las necesidades de la población.
          tr
            td.
              Se asume de que, si yo entendí el mensaje, todos lo pueden entender.
            td.
              Se reconoce que existen muchas formas de acceder e interpretar la información.
          tr
            td.
              Se le da prioridad a la información desde la entidad.
            td.
              Se organiza el mensaje pensando en quien lo va a recibir.

    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        2.2 Características
    p.mb-4.
      Las características del enfoque diferencial permiten comprender cómo este orienta la comunicación pública para responder a las diferentes necesidades de la ciudadanía. Entre las principales se encuentran:
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Reconocimiento")
            .col-12
              p.mb-0.
                Consiste en identificar que la ciudadanía no es homogénea y que cada persona presenta condiciones, contextos y características particulares. Estas pueden ser sociales, culturales, territoriales, etarias, físicas, cognitivas o comunicativas, y pueden influir en la manera como accede, comprende y utiliza la información.
          .row(titulo="Pertinencia")
            .col-12
              p.mb-0.
                Implica adaptar la comunicación al contexto y a las necesidades de la población destinataria. Para ello, se seleccionan el lenguaje, el formato y el canal más adecuados, manteniendo el contenido institucional, pero presentándolo de manera que resulte clara, comprensible y útil para quienes reciben la información.
          .row(titulo="Accesibilidad")
            .col-12
              p.mb-0.
                Busca que todas las personas puedan encontrar, comprender y utilizar la información en igualdad de condiciones. Para ello, contempla aspectos como el uso de un lenguaje claro, el diseño accesible de los documentos, los apoyos visuales, los subtítulos, los audios, la atención personalizada, los formatos alternativos y otros recursos que faciliten el acceso a la información.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-0
          img(src="@/assets/curso/temas/t2/img4.png" alt="")
    p.mb-0.
      A modo de síntesis, el enfoque diferencial permite que la comunicación se consolide desde miradas más cercanas a las ciudadanías; reconocer las condiciones particulares de las personas, puede reducir barreras, evitar exclusiones y fortalecer el acceso a la información.
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({}),
}
</script>
