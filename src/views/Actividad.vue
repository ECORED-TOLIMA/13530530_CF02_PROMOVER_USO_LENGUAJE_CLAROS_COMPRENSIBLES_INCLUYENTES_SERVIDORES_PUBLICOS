<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad
      ActividadController(:cuestionario="cuestionario")
</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

const datosPreguntas = [
  {
    texto: '¿Qué permite reconocer la diversidad en la comunicación pública?',
    correcta: 'b',
    opciones: {
      a: 'Que todas las personas comprenden la información de la misma forma.',
      b: 'Que la ciudadanía tiene diferentes realidades, necesidades y formas de comunicarse.',
      c: 'Que los mensajes institucionales deben ser siempre técnicos.',
      d: 'Que la información solo debe publicarse en medios digitales.',
    },
    mensaje_correcto:
      '¡Muy bien! Reconocer la diversidad permite comprender que las ciudadanías tienen distintas realidades, contextos y formas de acceder a la información.',
    mensaje_incorrecto:
      'Es importante revisar el concepto de diversidad. La comunicación debe considerar diferentes necesidades y contextos.',
  },
  {
    texto: '¿Cuál de las siguientes opciones representa una práctica de comunicación incluyente?',
    correcta: 'c',
    opciones: {
      a: 'Usar el mismo mensaje para todas las personas, sin revisar sus condiciones.',
      b: 'Publicar la información solo en lenguaje técnico.',
      c: 'Ajustar el lenguaje, el canal o el formato según las necesidades de la población.',
      d: 'Evitar explicar los requisitos porque ya están en la norma.',
    },
    mensaje_correcto:
      '¡Muy bien! Una comunicación incluyente revisa el lenguaje, el canal y el formato para facilitar el acceso y la comprensión de la información.',
    mensaje_incorrecto:
      'La comunicación incluyente no consiste solo en publicar información. También implica revisar si las personas pueden comprenderla y usarla.',
  },
  {
    texto: '¿Qué busca el enfoque diferencial en el relacionamiento con las ciudadanías?',
    correcta: 'b',
    opciones: {
      a: 'Dar un trato privilegiado sin justificación.',
      b: 'Reconocer condiciones particulares para reducir barreras de acceso y comprensión.',
      c: 'Eliminar todos los procedimientos institucionales para simplificar la atención a la ciudadanía.',
      d: 'Comunicar únicamente a través de canales presenciales, sin utilizar otros medios de atención o información.',
    },
    mensaje_correcto:
      '¡Muy bien! El enfoque diferencial permite reconocer condiciones particulares y ajustar la comunicación para favorecer el acceso a la información.',
    mensaje_incorrecto:
      'El enfoque diferencial no crea privilegios. Su propósito es reducir barreras y promover condiciones más justas para comprender y usar la información.',
  },
  {
    texto: '¿Cuál expresión es más adecuada en una comunicación institucional?',
    correcta: 'c',
    opciones: {
      a: 'Los discapacitados.',
      b: 'Los inválidos.',
      c: 'Personas con discapacidad.',
      d: 'Personas normales.',
    },
    mensaje_correcto:
      '¡Muy bien! La expresión “personas con discapacidad” reconoce primero a la persona y evita reducirla a una condición.',
    mensaje_incorrecto:
      'Conviene revisar el uso de lenguaje no discriminatorio. Las expresiones institucionales deben reconocer la dignidad de las personas.',
  },
  {
    texto: '¿Cuándo puede aparecer la discriminación en la comunicación pública?',
    correcta: 'a',
    opciones: {
      a: 'Cuando se usan expresiones que excluyen, estigmatizan o reducen a una persona a una condición.',
      b: 'Cuando se utiliza un lenguaje claro para explicar un trámite o servicio de manera sencilla.',
      c: 'Cuando se revisa previamente si un mensaje resulta comprensible para la ciudadanía.',
      d: 'Cuando se ofrecen diferentes canales de orientación para facilitar el acceso a la información.',
    },
    mensaje_correcto:
      '¡Muy bien! La discriminación puede aparecer en palabras, imágenes, mensajes o formas de atención que excluyen o estigmatizan.',
    mensaje_incorrecto:
      'La discriminación en la comunicación se relaciona con expresiones o prácticas que generan exclusión, trato desigual o estereotipos.',
  },
  {
    texto: '¿Para qué sirven los indicadores en el uso de lenguajes claros, comprensibles e incluyentes?',
    correcta: 'b',
    opciones: {
      a: 'Sancionar a los ciudadanos que no comprendan los trámites.',
      b: 'Verificar avances, dificultades y oportunidades de mejora en la comunicación.',
      c: 'Reemplazar el uso de normas y leyes en la entidad.',
      d: 'Eliminar la atención presencial en las instituciones.',
    },
    mensaje_correcto:
      '¡Muy bien! Los indicadores son señales que te permiten medir, evaluar y mejorar la claridad y la inclusión en los mensajes públicos.',
    mensaje_incorrecto:
      'Recuerde que los indicadores son herramientas de medición que te ayudan a verificar la efectividad de la comunicación y tomar decisiones de mejora.',
  },
  {
    texto: '¿Cuál principio orienta una comunicación incluyente?',
    correcta: 'a',
    opciones: {
      a: 'Dignidad humana.',
      b: 'Exclusión comunicativa.',
      c: 'Uso obligatorio de tecnicismos.',
      d: 'Atención igual sin considerar diferencias.',
    },
    mensaje_correcto:
      '¡Muy bien! La dignidad humana orienta una comunicación respetuosa, cuidadosa y centrada en el valor de las personas.',
    mensaje_incorrecto:
      'Una comunicación incluyente se apoya en principios como dignidad, igualdad, no discriminación, accesibilidad y participación.',
  },
  {
    texto: '¿Qué significa inclusión en la comunicación institucional?',
    correcta: 'b',
    opciones: {
      a: 'Nombrar poblaciones sin revisar si comprenden la información.',
      b: 'Generar condiciones para que las personas accedan, comprendan y participen sin discriminación.',
      c: 'Usar únicamente comunicados extensos y formales.',
      d: 'Evitar reconocer la diversidad de la ciudadanía al elaborar los mensajes y la información institucional.',
    },
    mensaje_correcto:
      '¡Muy bien! La inclusión busca que las personas puedan acceder a la información, comprenderla y participar con respeto y dignidad.',
    mensaje_incorrecto:
      'La inclusión no se limita a mencionar grupos poblacionales. También implica eliminar barreras de acceso, comprensión y participación.',
  },
  {
    texto: '¿Cuál opción corresponde a una acción preventiva?',
    correcta: 'b',
    opciones: {
      a: 'Retirar una pieza comunicativa después de identificar una expresión discriminatoria.',
      b: 'Revisar los mensajes antes de publicarlos para evitar barreras o expresiones excluyentes.',
      c: 'Corregir un formulario después de recibir quejas ciudadanas.',
      d: 'Ajustar una respuesta institucional ya enviada.',
    },
    mensaje_correcto:
      '¡Muy bien! Una acción preventiva se realiza antes de que ocurra el problema, con el fin de evitar confusiones, barreras o exclusiones.',
    mensaje_incorrecto:
      'La acción preventiva busca anticiparse al problema. Se aplica antes de publicar, entregar o divulgar la información.',
  },
  {
    texto: '¿Qué diferencia una acción correctiva de una acción de mejora?',
    correcta: 'a',
    opciones: {
      a: 'La acción correctiva se aplica cuando ya existe una dificultad; la acción de mejora fortalece el proceso, aunque no haya error evidente.',
      b: 'La acción correctiva se implementa antes de identificar cualquier problema y la acción de mejora reemplaza por completo los procesos de comunicación institucional.',
      c: 'Ambas acciones tienen el mismo propósito y no se diferencian.',
      d: 'La acción de mejora solo se aplica cuando hay una sanción.',
    },
    mensaje_correcto:
      '¡Muy bien! La acción correctiva atiende un problema identificado; la acción de mejora busca fortalecer el proceso comunicativo de manera continua.',
    mensaje_incorrecto:
      'Conviene revisar el plan de mejoramiento. Las acciones correctivas solucionan dificultades identificadas, mientras las acciones de mejora fortalecen el proceso.',
  },
  {
    texto: '¿Cuál de los siguientes enfoques de la diversidad establece que el entorno geográfico influye en el acceso y uso de la información pública?',
    correcta: 'b',
    opciones: {
      a: 'Enfoque de derechos.',
      b: 'Enfoque territorial.',
      c: 'Enfoque de género.',
      d: 'Enfoque asistencial.',
    },
    mensaje_correcto:
      '¡Excelente! Ha identificado correctamente que el enfoque territorial reconoce las condiciones de conectividad y geografía de las personas.',
    mensaje_incorrecto:
      'Revise los enfoques de la diversidad. Recuerda que el aspecto del lugar de residencia y accesibilidad regional corresponde al enfoque territorial.',
  },
  {
    texto: '¿Qué recomendación comunicativa se debe aplicar al interactuar con personas mayores en la atención pública?',
    correcta: 'c',
    opciones: {
      a: "Usar términos infantilizantes como 'abuelitos' para generar confianza.",
      b: 'Asumir que no comprenden los trámites administrativos.',
      c: 'Evitar expresiones infantilizantes y comunicar con respeto y claridad.',
      d: 'Delegar la atención siempre a un familiar acompañante.',
    },
    mensaje_correcto:
      '¡Muy bien! Reconoce que el trato a personas mayores debe basarse en la dignidad y el respeto, evitando términos paternalistas.',
    mensaje_incorrecto:
      "Recuerde que usar términos como 'abuelitos' o infantilizar el trato constituye una forma de discriminación por edad en el servicio público.",
  },
  {
    texto: '¿Cuál es un ejemplo de discriminación indirecta en el ámbito comunicativo institucional?',
    correcta: 'b',
    opciones: {
      a: 'Negar explícitamente la atención a una persona por su origen nacional.',
      b: 'Publicar información sobre trámites únicamente en canales digitales para poblaciones con baja conectividad.',
      c: 'Usar un lenguaje claro y sencillo en la guía de servicio para que la información sea más comprensible y accesible para las personas.',
      d: 'Disponer de subtítulos en los videos institucionales.',
    },
    mensaje_correcto:
      '¡Correcto! La discriminación indirecta ocurre cuando una norma o medio neutro genera una barrera o desventaja a ciertos grupos vulnerables.',
    mensaje_incorrecto:
      'Revise los tipos de discriminación. La indirecta ocurre cuando un requerimiento o canal excluye sin ser una prohibición explícita.',
  },
  {
    texto: '¿En el marco normativo colombiano, qué norma regula la transparencia y el derecho fundamental de acceso a la información pública?',
    correcta: 'b',
    opciones: {
      a: 'Ley 1482 de 2011.',
      b: 'Ley 1712 de 2014.',
      c: 'Ley 1346 de 2009.',
      d: 'Decreto 2623 de 2009.',
    },
    mensaje_correcto:
      '¡Perfecto! La Ley 1712 de 2014 es la norma garante de la transparencia y del derecho de acceso a la información pública comprensible.',
    mensaje_incorrecto:
      'Se sugiere repasar el marco normativo. La Ley 1712 de 2014 es el referente central sobre transparencia y acceso a la información pública.',
  },
  {
    texto: '¿Qué característica debe cumplir un indicador para asegurar que los datos obtenidos sean útiles en la toma de decisiones?',
    correcta: 'b',
    opciones: {
      a: 'Debe ser ambiguo y de formulación extensa.',
      b: 'Debe ser claro, medible, relevante y fidedigno.',
      c: 'Debe medir aspectos subjetivos de opinión sin datos.',
      d: 'Debe cambiar constantemente sin permitir comparaciones.',
    },
    mensaje_correcto:
      '¡Muy bien! Un indicador efectivo requiere claridad, datos verificables y pertinencia para orientar mejoras reales en la comunicación.',
    mensaje_incorrecto:
      'Revise la sección de indicadores. Para ser útiles, deben ser claros, medibles, pertinentes, comparables y basados en evidencia.',
  },
  {
    texto: '¿Qué se busca garantizar al aplicar las directrices de accesibilidad <em>web</em> (Resolución 1519 de 2020 de MinTIC) en plataformas públicas?',
    correcta: 'b',
    opciones: {
      a: 'Que la <em>web</em> solo sea accesible desde computadores de escritorio.',
      b: 'Que todas las personas puedan acceder y comprender la información digital.',
      c: 'Que las páginas <em>web</em> tengan diseños con textos pequeños y complejos.',
      d: 'Que la información pública solo esté disponible en formato impreso.',
    },
    mensaje_correcto:
      '¡Excelente! La accesibilidad digital elimina barreras en sitios <em>web</em> para garantizar la inclusión de toda la ciudadanía.',
    mensaje_incorrecto:
      'Recuerde que la accesibilidad <em>web</em> busca que los entornos digitales sean usables e inclusivos para todas las personas, independientemente de sus capacidades.',
  },
  {
    texto: '¿Cuál es la forma recomendada para referirse a la población que ha tenido que abandonar su territorio por causa de situaciones del conflicto armado?',
    correcta: 'c',
    opciones: {
      a: 'Pobrecitos o desvalidos.',
      b: 'Etiquetarlos permanentemente solo como víctimas indefensas.',
      c: 'Personas víctimas del conflicto armado.',
      d: 'Afectados sin derecho a atención.',
    },
    mensaje_correcto:
      "¡Muy bien! Utilizar 'personas víctimas del conflicto' prioriza la condición de persona y evita la revictimización o estigmatización.",
    mensaje_incorrecto:
      'Repase las recomendaciones de lenguaje incluyente. Se debe resaltar la condición de persona y utilizar expresiones respetuosas y no revictimizantes.',
  },
  {
    texto: '¿Cuál de los siguientes principios de la inclusión se refiere a la posibilidad de que la ciudadanía no solo reciba datos, sino que interactúe, opine y ejerza sus derechos?',
    correcta: 'a',
    opciones: {
      a: 'Principio de participación.',
      b: 'Principio de restricción.',
      c: 'Principio de tecnicismo.',
      d: 'Principio de jerarquía.',
    },
    mensaje_correcto:
      '¡Correcto! El principio de participación asegura que la comunicación pública fomente un diálogo bidireccional y democrático con el ciudadano.',
    mensaje_incorrecto:
      'Revise los principios de inclusión. La participación implica abrir espacio para el diálogo, la retroalimentación y la voz de la ciudadanía.',
  },
  {
    texto: 'Si en la evaluación de respuestas institucionales se identifica que el 40% de los usuarios no comprende el lenguaje técnico usado, ¿qué acción del plan de mejoramiento procede?',
    correcta: 'b',
    opciones: {
      a: 'Acción preventiva.',
      b: 'Acción correctiva.',
      c: 'Acción de omisión.',
      d: 'Acción de archivo.',
    },
    mensaje_correcto:
      '¡Excelente respuesta! Al haberse detectado una falla real en la comprensión, corresponde aplicar una acción correctiva para simplificar los textos.',
    mensaje_incorrecto:
      'Recuerde que cuando la dificultad o falla ya ha sido detectada mediante medición, se aplican acciones correctivas para subsanar el problema.',
  },
  {
    texto: '¿Cuál es la meta fundamental del uso de lenguajes claros, comprensibles e incluyentes en el SENA y las entidades del Estado?',
    correcta: 'b',
    opciones: {
      a: 'Aumentar la complejidad de los procedimientos legales y administrativos para la ciudadanía.',
      b: 'Garantizar la transparencia, fortalecer la confianza y asegurar el ejercicio de derechos ciudadanas.',
      c: 'Limitar la comunicación únicamente a comunicados de prensa y boletines institucionales.',
      d: 'Estandarizar un único mensaje sin considerar la diversidad de las personas y sus necesidades.',
    },
    mensaje_correcto:
      '¡Felicitaciones! Ha comprendido la esencia del componente: la comunicación cercana, clara e incluyente fortalece la confianza y la democracia.',
    mensaje_incorrecto:
      'Se sugiere revisar la síntesis del componente. El objetivo final es garantizar el acceso a la información pública y acercar el Estado a la ciudadanía con respeto.',
  },
]

const preguntas = datosPreguntas.map((pregunta, indice) => ({
  id: indice + 1,
  texto: pregunta.texto,
  imagen: `@/assets/actividad/imagen${(indice % 10) + 1}.png`,
  barajarRespuestas: true,
  opciones: Object.entries(pregunta.opciones).map(([id, texto]) => ({
    id,
    texto,
    esCorrecta: id === pregunta.correcta,
  })),
  mensaje_correcto: pregunta.mensaje_correcto,
  mensaje_incorrecto: pregunta.mensaje_incorrecto,
}))

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Lenguaje inclusivo y mejora comunicativa',
      titulo:
        'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> identificar conceptos y situaciones relacionadas con diversidad, enfoque diferencial, discriminación, inclusión, indicadores y plan de mejoramiento, para fortalecer la comprensión sobre el uso de lenguajes claros, comprensibles e incluyentes en servidores públicos.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas,
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
