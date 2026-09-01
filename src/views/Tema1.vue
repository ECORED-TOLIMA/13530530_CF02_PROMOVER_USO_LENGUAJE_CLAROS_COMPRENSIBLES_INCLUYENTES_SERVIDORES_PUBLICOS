<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1.
        Diversidad
    .row.align-items-center.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure.mb-0
          img(src="@/assets/curso/temas/t1/img1.png" alt="")
      .col-lg-8
        p.mb-4.
          La comunicación que realizan las entidades públicas tiene como propósito informar, orientar y facilitar la relación con la ciudadanía. Sin embargo, este propósito solo se cumple cuando la información logra llegar a las personas de manera comprensible, oportuna y pertinente. Para ello, es necesario reconocer que la ciudadanía no constituye un grupo homogéneo, sino que está conformada por personas y comunidades con diferentes realidades, experiencias, condiciones de vida y formas de interactuar con la información.
        .cajon.color-primario.p-4
          p.mb-0.
            En este contexto, la diversidad se convierte en un aspecto esencial para planear y desarrollar los procesos de comunicación institucional. Tenerla presente permite identificar posibles barreras en el acceso a la información, seleccionar los canales más adecuados, emplear un lenguaje respetuoso y comprensible, y promover una participación más amplia de la ciudadanía. De esta manera, la comunicación deja de centrarse únicamente en transmitir mensajes y pasa a enfocarse en facilitar la comprensión, fortalecer la confianza y garantizar que la información pueda ser utilizada por quienes la reciben.
    p.mb-0.
      Este componente presenta los principales elementos relacionados con la diversidad en la comunicación pública, incluyendo su concepto, características, tipos, enfoques y algunas recomendaciones para comunicarse con diferentes poblaciones presentes en el contexto colombiano.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        1.1 Concepto
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image':`url(${require_src('@/assets/curso/temas/t1/img2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.
          La diversidad está presente en la vida diaria y en la forma como las personas se relacionan con el Estado. Cada ciudadanía tiene una historia, una cultura, una manera de comunicarse, unas condiciones de vida y unas necesidades particulares. Todo esto influye en la forma como una persona entiende la información, accede a un servicio o participa en un espacio público.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0.
            Por esta razón, la comunicación institucional no puede partir de la idea de que todas las personas reciben y comprenden los mensajes de la misma manera. Comunicar de forma incluyente implica detenerse a revisar a quién va dirigida la información, en qué contexto se encuentra esa persona o comunidad, qué barreras puede enfrentar y qué apoyos podrían facilitarle el acceso a la información.

    .row.align-items-center.justify-content-center.mb-0
      .col-auto.mb-4.mb-md-0.d-none.d-lg-block
        img.tema1-definicion__icono(src="@/assets/curso/temas/t1/img3.svg" alt="")
      .col-lg-9
        p.mb-0 Reconocer la diversidad permite que la comunicación pública sea más cercana, respetuosa y pertinente. También ayuda a usar lenguajes claros, comprensibles e inclusivos para nombrar, explicar, orientar y atender a las ciudadanías sin desconocer sus realidades ni sus formas de habitar el mundo.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        1.2 Características
    p.mb-4.
      La diversidad se manifiesta a través de un conjunto de características que permiten comprender su importancia en la comunicación pública. Se caracteriza por ser plural, al reconocer las diferentes formas de pensar, ser, vivir, comunicarse y participar presentes en la sociedad. También es dinámica, ya que las realidades y necesidades de las personas y los grupos cambian con el tiempo y de acuerdo con sus contextos sociales, económicos, culturales y territoriales.

    .row.g-0.align-items-stretch.tema1-apertura.mb-4
      .col-lg-5
        figure.tema1-apertura__imagen.mb-0
          img(src="@/assets/curso/temas/t1/img4.png" alt="")
      .col-lg-7
        .bgwhite__contenido.p-4
          .row
            .col-2.d-none.d-lg-block
              img.tema1-apertura__icono.mb-4(src="@/assets/curso/temas/t1/img5.svg" alt="")
            .col-12
              p.mb-0.
                En la comunicación institucional, la diversidad se refleja en la manera como las entidades atienden a la ciudadanía, construyen sus mensajes y promueven condiciones para el acceso a la información. Asimismo, requiere un reconocimiento que vaya más allá de aceptar la existencia de diferencias; implica evitar que estas se conviertan en barreras para la comprensión, la participación o el acceso a los servicios. De esta forma, una comunicación que reconoce la diversidad contribuye a fortalecer la confianza entre las entidades y la ciudadanía.

    p.mb-4.
      Las principales características de la diversidad y la forma en que se reflejan en la comunicación pública, se resumen a continuación:

    .row.align-items-center.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Plural").
            Reconoce las diferentes formas de identidad, cultura, modos de vida y comunicación presentes en la sociedad, evitando asumir que todas las personas comparten las mismas experiencias o necesidades.
          p.mb-0(numero="2" titulo="Dinámica").
            Considera que las realidades de las personas y las comunidades cambian con el tiempo y según sus contextos sociales, culturales, económicos y territoriales, por lo que la comunicación debe actualizarse y adaptarse.
          p.mb-0(numero="3" titulo="Relacional").
            Se aplica en la interacción permanente entre las entidades y la ciudadanía, promoviendo un diálogo basado en el respeto, la escucha y la participación.
          p.mb-0(numero="4" titulo="Contextual").
            Tiene en cuenta las condiciones de vida, el entorno y las circunstancias de las personas destinatarias para que la información sea pertinente y útil.
          p.mb-0(numero="5" titulo="Incluyente").
            Orienta la eliminación de barreras, estereotipos y expresiones discriminatorias, favoreciendo que todas las personas puedan acceder y comprender la información en igualdad de condiciones.
          p.mb-0(numero="6" titulo="Comunicativa").
            Promueve el uso de mensajes claros, respetuosos, comprensibles y pertinentes, así como la selección de canales y formatos adecuados para las características de la ciudadanía.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-0
          img(src="@/assets/curso/temas/t1/img6.png" alt="")
    .row.justify-content-center.align-items-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0 La comprensión de estas características permite que la diversidad no se toque como un tema aislado y que este presente en cada mensaje, trámite, respuesta; campaña o estrategia comunicativa que una entidad genera para la ciudadanía.

    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        1.3 Tipos
    .bloque-texto-g.color-primario.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        role="img"
        :style="{'background-image': `url(${require_src('@/assets/curso/temas/t1/img7.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0.
          Identificar los tipos de diversidad ayuda a reconocer que las personas requieren de distintas maneras de comunicación, atención y acceso a la información; no se busca clasificar a las ciudadanías, sino que busca facilitar una mirada más amplia y respetuosa de sus realidades.
    p.mb-4.
      Cada tipo de diversidad plantea aspectos que las entidades deben considerar al momento de diseñar y difundir sus comunicaciones. En la siguiente tabla se describen los principales tipos de diversidad y se presentan ejemplos de cómo pueden incorporarse en la comunicación institucional:
    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5.
        Tabla 1.
      span.
        Tipos de diversidad
    .tabla-a.color-acento-contenido.tema1-tabla.mb-4
      table
        thead
          tr
            th.
              Tipo
            th.
              Descripción
            th.
              Ejemplo en comunicación
        tbody
          tr
            td.
              Diversidad cultural.
            td.
              Se basa en prácticas, costumbres, valores y formas de comprender el mundo.
            td.
              Se debe tener en cuenta los contextos culturales de a quién va dirigida la comunicación.
          tr
            td.
              Diversidad étnica.
            td.
              Reconoce la presencia de las comunidades y pueblos, a través de sus lenguas, identidades y tradiciones.
            td.
              La entidad deberá considerar traducciones o mediación en las comunicaciones cuando se haga necesario.
          tr
            td.
              Diversidad de género y sexual.
            td.
              Propende al respeto de las identidades y expresiones de género o las orientaciones sexuales.
            td.
              Para evitar supuestos sobre las personas, es necesario usar expresiones respetuosas y sobre la base de la humanidad.
          tr
            td.
              Diversidad funcional o discapacidad.
            td.
              Las discapacidades se dan de forma física, sensorial, cognitiva o psicosociales.
            td.
              La entidad debería usar formatos accesibles, textos claros, subtitulados o apoyos visuales.
          tr
            td.
              Diversidad territorial.
            td.
              Tiene que ver con los lugares donde habitan las personas.
            td.
              Pensar en qué comunicación usar según si las personas habitan en la zona urbana o rural, tener en cuenta la conectividad y el uso de herramientas tecnológicas.
          tr
            td.
              Diversidad social.
            td.
              Tiene que ver con las condiciones laborales, familiares, educativas y económicas de las personas.
            td.
              La entidad debe evitar mensajes que tengan suposiciones de igualdad de recursos, tiempo disponible o conectividad.
    p.mb-4.
      Para complementar lo anterior, la siguiente imagen ilustra, mediante situaciones cotidianas, algunos de los principales tipos de diversidad presentes en la comunicación pública y que fueron relacionados previamente. Cada representación permite comprender la importancia de reconocer las características, contextos y necesidades de las personas para promover una comunicación institucional más respetuosa, accesible e incluyente:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5.
            Figura 1.
          span.
            Ejemplos de los principales tipos de diversidad en la comunicación pública
    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          img.d-none.d-md-block(src="@/assets/curso/temas/t1/img8.svg" alt="Ilustración con ejemplos de diversidad cultural, étnica, de género y sexual, funcional o discapacidad, territorial y social.")
          img.d-block.d-md-none(src="@/assets/curso/temas/t1/img8_1.svg" alt="Ilustración con ejemplos de diversidad cultural, étnica, de género y sexual, funcional o discapacidad, territorial y social.")

    .BG03.px-5.mb-4
      p.mb-4.
        Finalmente, el reconocimiento personal y laboral de los tipos de diversidad permite la construcción de mensajes más ajustados y pertinentes. Ejemplo de ello es que, si la institución crea campañas o mensajes solo para redes sociales, no va a poder llegar esa información a las personas con bajo acceso a la internet. Si se crean comunicaciones públicas con los lenguajes técnicos que normalmente se crean en las instituciones, difícilmente los lectores podrán comprender la comunicación. Unas recomendaciones son: los ajustes de accesibilidad pueden limitar la participación de las personas con alguna condición de discapacidad.
      p.mb-0.
        La diversidad debe considerarse en todas las etapas del proceso de comunicación:

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img9.svg" alt="")
          .tarjeta.color-primario.p-4
            .text-center
              h5.mt-4 Antes
              p.mb-0.
                Identificar a quién va dirigido el mensaje, reconocer las características de la población destinataria y prever las posibles barreras para el acceso y la comprensión de la información.
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img10.svg" alt="")
          .tarjeta.color-primario.p-4
            .text-center
              h5.mt-4 Durante
              p.mb-0.
                Utilizar un lenguaje claro, respetuoso e incluyente, así como seleccionar los canales, formatos y recursos más adecuados para la población a la que se dirige la comunicación.
      .col-lg-4.col-md-6.mb-4
        .tarjeta-avatar
          img(src="@/assets/curso/temas/t1/img11.svg" alt="")
          .tarjeta.color-primario.p-4
            .text-center
              h5.mt-4 Después
              p.mb-0.
                Verificar si el mensaje fue comprendido, si la información llegó a la población prevista y si el proceso de comunicación cumplió el propósito esperado, con el fin de realizar los ajustes necesarios.

    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        1.4 Enfoques
    p.mb-4.
      Los enfoques permiten mirar la diversidad desde una perspectiva más amplia y no desde una mirada única. Porque no se trata solo de reconocer las diferencias, sino de comprender la manera como estas crean necesidades particulares de comunicación, atención o acceso. Es así como los enfoques ayudan a las entidades a comunicarse desde una comprensión más cercana con las ciudadanías.
    p.mb-4.
      A continuación, se relacionan los enfoques más importantes:
    SlyderF.mb-5(columnas="col-md-6 col-xl-4")
      .tarjeta.BGTARG.p-3.p-lg-5
        .row.justify-content-center.mb-3.mt-4
          .col-8
            img(src="@/assets/curso/temas/t1/img12.svg" alt="")

        h5.text-center Enfoque de derechos
        p.mb-5 La información debe facilitar el ejercicio de derechos y la participación.

      .tarjeta.BGTARG.p-3.p-lg-5
        .row.justify-content-center.mb-3.mt-4
          .col-8
            img(src="@/assets/curso/temas/t1/img13.svg" alt="")

        h5.text-center Enfoque diferencial
        p.mb-5 Algunas personas requieren ajustes de acuerdo a sus condiciones.

      .tarjeta.BGTARG.p-3.p-lg-5
        .row.justify-content-center.mb-3.mt-4
          .col-8
            img(src="@/assets/curso/temas/t1/img14.svg" alt="")

        h5.text-center Enfoque territorial
        p.mb-5 El lugar donde viven las personas influye en el acceso a la información.

      .tarjeta.BGTARG.p-3.p-lg-5
        .row.justify-content-center.mb-3.mt-4
          .col-8
            img(src="@/assets/curso/temas/t1/img15.svg" alt="")

        h5.text-center Enfoque intercultural
        p.mb-5 Las prácticas, lengua y referentes culturales influyen en la comprensión.

      .tarjeta.BGTARG.p-3.p-lg-5
        .row.justify-content-center.mb-3.mt-4
          .col-8
            img(src="@/assets/curso/temas/t1/img16.svg" alt="")

        h5.text-center Enfoque inclusivo
        p.mb-5 La comunicación debe evitar exclusiones y reconocer la dignidad de las personas.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0.
            Los enfoques ayudan a mirar la diversidad con mayor cuidado. No se trata solo de reconocer que las personas son diferentes, sino de comprender qué condiciones pueden influir en la manera como reciben, entienden y usan la información.
    .BG03.px-5
      p.mb-4
        | Desde el 
        strong enfoque de derechos,
        |  la comunicación debe facilitar que todas las personas accedan a la información, la comprendan y puedan usarla para participar o ejercer sus derechos. 
        strong El enfoque diferencial,
        |  por su parte, permite identificar cuándo una persona o grupo requiere ajustes en el lenguaje, el canal, el formato o la atención que recibe.

      .row.align-items-center.mb-0
        .col-lg-5.mb-4.mb-lg-0
          figure.mb-0
            img(src="@/assets/curso/temas/t1/img17.png" alt="")
        .col-lg-7
          p.mb-4
            | También es importante tener en cuenta el 
            strong enfoque territorial,
            |  porque el lugar donde viven las personas puede influir en la conectividad, los medios disponibles y el acceso a los servicios. El 
            strong enfoque intercultural
            |  permite reconocer que algunas comunidades tienen lenguas, prácticas, saberes y formas propias de organización que deben ser consideradas al momento de comunicar.
          p.mb-4
            | Finalmente, el 
            strong enfoque inclusivo
            |  invita a revisar que los mensajes no refuercen estereotipos, no excluyan a ningún grupo y reconozcan la dignidad de las personas.
          .row.p-3
            .col-auto.d-none.d-lg-block
              img.tema1-definicion__icono(src="@/assets/curso/temas/t1/img18.svg" alt="")
            .col
              .cajon.color-primario.p-4
                p.mb-0 Aplicar estos enfoques permite que la comunicación institucional sea más cercana, respetuosa y pertinente para las ciudadanías.

    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2.
        1.5 Diversidad del país
    figure.mb-4
      img(src="@/assets/curso/temas/t1/img19.png" alt="")

    p.mb-4.
      La diversidad en Colombia cuenta con múltiples ciudadanías que interactúan con las entidades públicas. Entre ellas están las poblaciones étnicas, comunidades rurales y urbanas, personas de diferentes edades, identidades de género, orientaciones sexuales, condiciones de discapacidad, migrantes y víctimas del conflicto armado. Esta realidad exige que la comunicación institucional sea cuidadosa, respetuosa y cercana.

    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-secundario.p-4
          p.mb-0.
            Reconocer la diversidad del país a través del lenguaje permite que la comunicación institucional sea más pertinente. Esto no significa construir un mensaje diferente para cada persona, sino verificar que la información sea comprendida, que contemple un trato respetuoso y si los canales responden a las condiciones de quien recibe el mensaje.

    p.mb-4.
      A continuación, se resumen algunas recomendaciones comunicativas de acuerdo con las diferentes poblaciones:

    .row.align-items-center.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1
        LineaTiempoD.color-acento-botones
          p.mb-0(numero="1" titulo="Comunidades étnicas").
            Reconocer sus lenguas, prácticas culturales y formas propias de organización.
          p.mb-0(numero="2" titulo="Diversidad de género y sexual").
            Usar expresiones respetuosas, sin burlas, estereotipos ni suposiciones.
          p.mb-0(numero="3" titulo="Niñas, niños y adolescentes").
            Usar un lenguaje claro y adecuado a su edad.
          p.mb-0(numero="4" titulo="Personas mayores").
            Evitar expresiones infantilizantes; comunicar con respeto y claridad.
          p.mb-0(numero="5" titulo="Personas con discapacidad").
            Disponer de formatos accesibles y apoyos para facilitar la comprensión.
          p.mb-0(numero="6" titulo="Población migrante").
            Evitar estigmas, brindar información clara sobre rutas, servicios y derechos.
          p.mb-0(numero="7" titulo="Víctimas del conflicto armado").
            Evitar revictimizar, usar lenguaje cuidadoso, digno y sensible.
      .col-lg-5.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure.mb-0
          img(src="@/assets/curso/temas/t1/img20.png" alt="")

    p.mb-4.
      Las recomendaciones para una comunicación respetuosa e incluyente pueden aplicarse en situaciones cotidianas de atención a la ciudadanía. A través de los siguientes casos ilustrativos se presentan ejemplos de cómo el lenguaje claro, el respeto por la diversidad y la eliminación de barreras favorecen una comunicación más cercana, accesible y pertinente para las diferentes poblaciones:

    SlyderB.mb-4.p-5.tarjeta.color-secundario(:datos="datosSlyder")
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'La nueva norma: comunicación respetuosa e inclusiva',
        texto:
          '<strong>Historia 1</strong><br><br>Comunidades étnicas: respeto cultural y lingüístico.',
        imagen: '@/assets/curso/temas/t1/img21.png',
      },
      {
        titulo: 'La nueva norma: comunicación respetuosa e inclusiva',
        texto:
          '<strong>Historia 2</strong><br><br>Diversidad de género y sexual: expresiones respetuosas.',
        imagen: '@/assets/curso/temas/t1/img22.png',
      },
      {
        titulo: 'La nueva norma: comunicación respetuosa e inclusiva',
        texto:
          '<strong>Historia 3</strong><br><br>Niñas, niños y adolescentes: lenguaje claro y adecuado a su edad.',
        imagen: '@/assets/curso/temas/t1/img23.png',
      },
      {
        titulo: 'La nueva norma: comunicación respetuosa e inclusiva',
        texto:
          '<strong>Historia 4</strong><br><br>Personas con discapacidad: formatos accesibles y apoyos para la comprensión.',
        imagen: '@/assets/curso/temas/t1/img24.png',
      },
      {
        titulo: 'La nueva norma: comunicación respetuosa e inclusiva',
        texto:
          '<strong>Historia 5</strong><br><br>Población migrante: información clara, sin estigmas y con enfoque de derechos.',
        imagen: '@/assets/curso/temas/t1/img25.png',
      },
    ],
  }),
}
</script>
