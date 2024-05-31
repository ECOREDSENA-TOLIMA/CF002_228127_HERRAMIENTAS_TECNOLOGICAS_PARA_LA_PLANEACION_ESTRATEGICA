export default {
  global: {
    componenteFormativo: 'Recolección de información y elaboración de informes',
    descripcionCurso:
      'La información se erige como uno de los ejes fundamentales de la gestión administrativa. Su papel es de vital importancia en todas las áreas de la organización, pues gracias a ella es posible ubicarse en el tiempo y en el espacio, bien sea para medir su evolución o para compararse con otros agentes del sector.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        titulo: 'Técnicas de recolección de la información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Criterios de selección',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Observación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Entrevista',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Encuesta',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Análisis de contenido',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de priorización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Informes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Catálogo de servicios de TI',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_228127_DU.pdf',
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
  complementario: [
    {
      tema: 'Técnicas de recolección de la información',
      referencia:
        'Math2me. (2015). Tabulación de datos cualitativos [video]. YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=6oLDbenzHrQ',
    },
    {
      tema: 'Técnicas de recolección de la información',
      referencia:
        'Centro de Escritura Javeriano. (2020). Normas APA, séptima edición. Pontificia Universidad Javeriana, seccional Cali. ',
      tipo: 'Adaptación/guía',
      link:
        'https://www.javerianacali.edu.co/centro-escritura/recursos/manual-apa-7a-edicion',
    },
  ],
  glosario: [
    {
      termino: 'Informe',
      significado: 'Documento elaborado con el fin de compartir información.',
    },
    {
      termino: 'ITIL',
      significado:
        'Biblioteca de infraestructura de tecnologías de información se define como el conjunto de buenas prácticas que ayudan a mejorar la prestación de un servicio, en particular un servicio de TI.',
    },
    {
      termino: 'Liquidez',
      significado:
        'Capacidad de cubrir las obligaciones de corto plazo con efectivo o sus equivalentes.',
    },
    {
      termino: 'Muestra',
      significado: 'Conjunto de población sobre la que se extraerán los datos.',
    },
    {
      termino: 'Población',
      significado: 'Totalidad de individuos objeto de estudio.',
    },
    {
      termino: 'Ponderación',
      significado:
        'Asignación de valor haciendo uso de una escala compartida con los demás elementos.',
    },
    {
      termino: 'Refinanciación',
      significado:
        'Renegociar las condiciones de un crédito, generalmente para solicitar cuotas más bajas a costa de un mayor tiempo de pago.',
    },
  ],
  referencias: [
    {
      referencia:
        'Emanuelli, P., Egidos, D., Ortúzar, I., Blanco, C., Cárcar, F., Dorado, C., Ulla, C y García, D. (2012). Herramientas de metodología para investigar en comunicación. Técnicas de recolección y análisis de la información. Primera edición. Editorial Copy-Rápido. ',
      link:
        'https://filadd.com/doc/tomo2-1-manual-herramientas-de-metodol-para',
    },
    {
      referencia:
        'ManageEngine. (2020). Una guía extensa sobre cómo crear un catálogo de servicios de TI. ManageEngine. ',
      link:
        'https://www.manageengine.com/latam/service-desk/itsm/guia-catalogo-de-servicios-ti.html',
    },
    {
      referencia:
        'Qualtrics. (2020). Cómo calcular el tamaño de una muestra: asegúrese de que el muestreo sea correcto. Qualtrics. ',
      link:
        'https://www.qualtrics.com/es-la/gestion-de-la-experiencia/investigacion/calcular-tomano-muestra/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilán Lozano',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Santiago Muñoz de la Rosa',
          cargo: 'Experto Temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'María Fernanda Chacón Castro',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital - Centro de diseño y metrología',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
