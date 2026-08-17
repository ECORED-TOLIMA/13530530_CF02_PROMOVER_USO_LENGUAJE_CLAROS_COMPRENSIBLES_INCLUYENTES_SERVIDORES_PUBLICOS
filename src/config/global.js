export default {
  global: {
    Name: 'Lenguaje inclusivo y mejora comunicativa',
    Description:
      'En este componente formativo se abordará el lenguaje inclusivo en el relacionamiento con las ciudadanías, teniendo en cuenta la diversidad, el enfoque diferencial, la inclusión y la prevención de expresiones discriminatorias. Además, se estudiará la verificación del uso de lenguajes claros, comprensibles e inclusivos mediante indicadores y acciones preventivas, correctivas y de mejora.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Diversidad',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Características', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Tipos', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Enfoques', hash: 't_1_4' },
          { numero: '1.5', titulo: 'Diversidad del país', hash: 't_1_5' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Enfoque diferencial',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Características', hash: 't_2_2' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Discriminación',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Tipos', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Características', hash: 't_3_3' },
          {
            numero: '3.4',
            titulo: 'Uso de lenguaje discriminatorio',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Inclusión',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Tipos', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Principios', hash: 't_4_3' },
          {
            numero: '4.4',
            titulo: 'Normatividad vigente',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Concepto', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Características', hash: 't_5_2' },
          {
            numero: '5.3',
            titulo: 'Formulación y medición',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo:
          'Plan de mejoramiento en el uso lenguajes claros, comprensibles e inclusivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Acciones preventivas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Acciones correctivas',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Acciones de mejora',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Accesibilidad',
      significado:
        'Posibilidad de que todas las personas puedan encontrar, entender y usar la información, sin que sus condiciones personales, físicas, tecnológicas o sociales se conviertan en barreras.',
    },
    {
      termino: 'Barreras comunicativas',
      significado:
        'Dificultades que impiden que una persona comprenda, use o acceda a la información que necesita.',
    },
    {
      termino: 'Ciudadanías',
      significado:
        'Forma de reconocer que la ciudadanía no es un solo grupo igual para todos, sino que está conformada por personas y comunidades con diferentes realidades, necesidades y formas de comunicarse.',
    },
    {
      termino: 'Comunicación inclusiva',
      significado:
        'Forma de comunicar que tiene en cuenta la diversidad de las personas, evita expresiones discriminatorias y busca que la información llegue de manera clara y respetuosa.',
    },
    {
      termino: 'Discapacidad',
      significado:
        'Situación que puede generar barreras cuando el entorno no ofrece apoyos adecuados para que una persona participe, se comunique o acceda a la información.',
    },
    {
      termino: 'Discriminación',
      significado:
        'Trato injusto o excluyente hacia una persona o grupo por su origen, edad, género, discapacidad, cultura, nacionalidad, condición social u otra característica.',
    },
    {
      termino: 'Diversidad',
      significado:
        'Reconocimiento de que las personas tienen diferentes formas de vivir, pensar, comunicarse, participar y relacionarse con la información.',
    },
    {
      termino: 'Enfoque diferencial',
      significado:
        'Manera de reconocer que algunas personas o grupos pueden necesitar apoyos, canales o formas de comunicación particulares para acceder a la información en igualdad de condiciones.',
    },
    {
      termino: 'Enfoque inclusivo',
      significado:
        'Forma de analizar la comunicación para evitar exclusiones y promover mensajes respetuosos, claros y útiles para diferentes personas.',
    },
    {
      termino: 'Indicador',
      significado:
        'Dato o señal que permite saber si una acción está funcionando, si debe ajustarse o si necesita mejorar.',
    },
    {
      termino: 'Inclusión',
      significado:
        'Proceso que busca que todas las personas puedan participar, acceder a servicios, recibir información y ser tratadas con respeto, sin ser excluidas por sus diferencias.',
    },
    {
      termino: 'Medición',
      significado:
        'Proceso de revisar datos o evidencias para saber cómo avanza una acción y qué decisiones pueden tomarse para mejorar.',
    },
    {
      termino: 'Servidor público',
      significado:
        'Persona que cumple funciones al servicio del estado y tiene la responsabilidad de atender, orientar o comunicarse con la ciudadanía.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alcaldía Mayor de Bogotá. (2019). Guía de lenguaje claro e incluyente del Distrito Capital. Secretaría General de la Alcaldía Mayor de Bogotá.',
      link:
        'https://secretariageneral.gov.co/sites/default/files/2023-03/guia-de-lenguaje-claro-incluyente-del-distrito-capital.pdf',
    },
    {
      referencia:
        'Congreso de Colombia. (2014). Ley 1712 de 2014. Por medio de la cual se crea la Ley de Transparencia y del Derecho de Acceso a la Información Pública Nacional y se dictan otras disposiciones. Diario Oficial No. 49.084.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2011). Guía de Lenguaje Ciudadano para la Administración Pública Colombiana. Función Pública.',
      link:
        'https://www1.funcionpublica.gov.co/documents/418537/4754239/00337_00053_16.%2BGuia%2Bde%2BLenguaje%2BCiudadano%2Bpara%2Bla%2BAdministracion%2BPublica%2BColombiana.pdf/47e84c12-b37a-4cfd-a18b-e47bd7e4a223?version=1.0',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2022). Protocolo de servicio al ciudadano. Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/documents/34645357/34703129/Protocolos_servicio_servicio_al_ciudadano_v8.pdf/c5827faa-d30f-4995-9e2c-f5f4c3e91cfe?t=1664555909377',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2015). Guía de lenguaje claro para servidores públicos de Colombia. Programa Nacional de Servicio al Ciudadano.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Programa%20Nacional%20del%20Servicio%20al%20Ciudadano/GUIA%20DEL%20LENGUAJE%20CLARO.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2025). Lenguaje claro para la apertura democrática: Guía práctica de comunicación. Dirección de Gobierno, Derechos Humanos y Paz.',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Gobierno_DDHH_Paz/Gob_Asuntos_Internacionales/Innovacion/Guia_Lenguaje_Claro_2025.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2025). Guía de buenas prácticas en lenguaje claro e incluyente para el Relacionamiento con la Ciudadanía. Subdirección de Relacionamiento con la Ciudadanía.',
      link: 'https://www.mineducacion.gov.co/1780/articles-423521_recurso_3.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Resolución MinTIC 1519 del 2020. Directrices de accesibilidad web. Gobierno Digital.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/articles-160770_Directrices_Accesibilidad_web.pdf',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020). Resolución 1519 de 2020. Por la cual se definen los estándares y directrices para publicar la información señalada en la Ley 1712 del 2014 y se definen los requisitos materia de acceso a la información pública, accesibilidad web, seguridad digital, y datos abiertos.',
      link:
        'https://normograma.mintic.gov.co/mintic/compilacion/docs/resolucion_mintic_1519_2020.htm',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez ',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jhacesiz Mary Hincapié',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Adriana María Bustamante',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Erika Alejandra Parra',
          cargo: 'Experta temática',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Hugo Armando López',
          cargo: 'Experta temátic0',
          centro: 'Centro Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Jaime Luis Tang Pinzón',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}