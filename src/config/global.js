export default {
  global: {
    componenteFormativo: 'Trazo y corte',
    descripcionCurso:
      'En toda la cadena de aprisionamiento de prendas de vestir la actividad de trazo y corte tiene un valor fundamental, los conocimientos básicos de este proceso y el buen manejo de los materiales y demás recursos permitirán que los proyectos tengan un excelente desarrollo. Por eso, en este componente se realizará un recorrido por las generalidades, tipos, planeación y herramientas de trazo y corte, como también se abordarán elementos de salud ocupacional y normas de seguridad industrial.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Trazo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Sistemas para elaborar trazos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Elementos y equipos para trazar',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Área de la sección de trazo y corte',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Ingreso, recepción, almacenamiento y reposo de telas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Planeación del área de trazo y corte',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Almacenamiento',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Reposo de telas',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Planeación del área de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Extendida',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Técnicas de extendida',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Tipos de extendidos',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Corte',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Control de calidad en el corte',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Recomendaciones para el área de trazo y corte',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Seguridad y salud en el trabajo - área de trazo y corte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normas de seguridad industrial',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
  referencias: [
    {
      referencia: 'Audaces. (2015). Sala de corte [video]. YouTube.',
      link: 'https://youtu.be/tJyb68g_H0M',
    },
    {
      referencia:
        'Cámara de Comercio de Medellín para Antioquia. (2017). Clúster Textil / Confección, Diseño y Moda.  Manual de uso. Primera edición.',
    },
    {
      referencia:
        'Ceb Metalmecánica SAS. (2018). Instructivo extendedora de tela [video]. YouTube.',
      link: 'https://youtu.be/NYypQR3FceU',
    },
    {
      referencia:
        'FKlatinoamérica. (2017). Tendedora de tela automática [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=J0Zq8rHcPeQ&ab_channel=FKlatinoamerica',
    },
    {
      referencia:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=48365',
    },
    {
      referencia:
        'MinSalud. (2017). Programa de elementos de protección personal, uso y mantenimiento. MinSalud.',
    },
    {
      referencia: 'PIZANTEX. (2014). Procesos de trazo y corte. PIZANTEX.',
    },
    {
      referencia:
        'Resolución 6045 de 2014. [El Ministro del Trabajo]. Por la cual se adopta el Plan Nacional de Seguridad y Salud en el Trabajo 2013-2021. Diciembre 30 de 2014.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/45099/Resolucion06045_Mintrabajo_2.pdf/2135dd03-f30f-caa7-111f-e9f21f898f61',
    },
    {
      referencia:
        'Rivero, E. (2017). Curso de Corte y confección: seguridad e higiene en el trabajo [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=mbJvti9qHOU&ab_channel=ErnestoRivero',
    },
    {
      referencia:
        'SENA. (s.f.). Almacenamiento de telas. Centro en Manufactura Textil y Cuero - Regional Distrito Capital.',
    },
    {
      referencia:
        'SENA. (s.f.).  Confecciones Industriales. Aspectos generales del departamento de control de calidad. Subdirección técnico-pedagógica.',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4251/3816_aspectos_generales_del_control_de_calidad.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). Características del material desde trazo y corte [video]. YouTube.',
      link: 'https://youtu.be/Ul-AmX5ioxQ',
    },
    {
      referencia:
        'SENA Red Producción de Contenidos Grupo. (2021).  Ejemplo de tipos de tendido con diferentes características del material [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=AQuKp0yivEw&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
  ],
  glosario: [
    {
      termino: 'Mipymes',
      significado:
        'Es el acrónimo o sigla que se utiliza para nombrar o referirse a las micro, pequeñas y/o medianas empresas.',
    },
    {
      termino: 'Piquete',
      significado:
        'Perforación en los costados de los moldes o patrones, que sirven como guías para ensamblar piezas o puntos de referencia para posicionar sobrepuestos.',
    },
    {
      termino: 'Prendas de segunda',
      significado:
        'Se les denomina así a esas prendas que no cumplen con el 100% de especificaciones esperadas por el cliente.',
    },
    {
      termino: 'Simetría',
      significado:
        'Relación de relación, forma, tamaño, líneas o figuras, con puntos de referencia nombrados como patrones.',
    },
    {
      termino: 'Software',
      significado:
        'Parte intangible de un sistema o sistemas, que mediante rutinas permite realizar tareas.',
    },
    {
      termino: 'TIC',
      significado: 'Tecnologías de la Información y la Comunicación.',
    },
    {
      termino: 'Tiempo estándar',
      significado:
        'Cantidad de tiempo que se utiliza realizando una actividad en condiciones de ejecución normales.',
    },
    {
      termino: 'Tolerancia',
      significado:
        'Cantidad de unidad de medida permisible para exceder la especificación o norma, por exceso o por defecto.',
    },
    {
      termino: 'Urdimbre',
      significado:
        'Conjunto de hilos que se colocan en el telar paralelamente unos a otros para formar una tela.',
    },
  ],
  complementario: [
    {
      texto:
        'SENA. (s.f.). Almacenamiento de telas. Centro en Manufactura Textil y Cuero - Regional Distrito Capital.',
      tipo: 'PDF ',
      descarga: '/downloads/Anexo2_Almacenamiento_de_telas_y_sus_cuidados.pdf',
    },
    {
      texto:
        'SENA. (s.f.).  Confecciones Industriales. Aspectos generales del departamento de control de calidad. Subdirección técnico-pedagógica.',
      tipo: 'Libro',
      link:
        'https://repositorio.sena.edu.co/bitstream/handle/11404/4251/3816_aspectos_generales_del_control_de_calidad.pdf?sequence=1&isAllowed=y',
    },
    {
      texto:
        'Rivero, E. (2017). Curso de Corte y confección: seguridad e higiene en el trabajo [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=mbJvti9qHOU&ab_channel=ErnestoRivero',
    },
    {
      texto:
        'SENA Red Producción de Contenidos Grupo. (2021).  Ejemplo de tipos de tendido con diferentes características del material [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=AQuKp0yivEw&ab_channel=RedProducci%C3%B3ndeContenidosGrupoGesti%C3%B3nCurricularSENA',
    },
    {
      texto: 'Audaces. (2015). Sala de corte [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/tJyb68g_H0M',
    },
    {
      texto:
        'Ceb Metalmecánica SAS. (2018). Instructivo extendedora de tela [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/NYypQR3FceU',
    },
    {
      texto:
        'Ley 1562 de 2012. Por la cual se modifica el Sistema de Riesgos Laborales y se dictan otras disposiciones en materia de Salud Ocupacional. Julio 11 de 2012.',
      tipo: 'ley',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=48365',
    },
    {
      texto:
        'Resolución 6045 de 2014. [El Ministro del Trabajo]. Por la cual se adopta el Plan Nacional de Seguridad y Salud en el Trabajo 2013-2021. Diciembre 30 de 2014.',
      tipo: 'Resolución',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/45099/Resolucion06045_Mintrabajo_2.pdf/2135dd03-f30f-caa7-111f-e9f21f898f61',
    },
    {
      texto:
        'MinSalud. (2017). Programa de elementos de protección personal, uso y mantenimiento. MinSalud.',
      tipo: 'pdf',
      descarga: '/downloads/Anexo3_Elementos_de_protección_Personal.pdf',
    },
    {
      texto: 'PIZANTEX. (2014). Procesos de trazo y corte. PIZANTEX.',
      tipo: 'PDF ',
      link: '/downloads/Anexo1_pisantex_trazo_y_corte.pdf',
    },
    {
      texto:
        'FKlatinoamérica. (2017). Tendedora de tela automática [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=J0Zq8rHcPeQ&ab_channel=FKlatinoamerica',
    },
    {
      texto:
        'SENA Red Producción de Contenidos Grupo Gestión Curricular. (2021). Características del material desde trazo y corte [video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/Ul-AmX5ioxQ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
