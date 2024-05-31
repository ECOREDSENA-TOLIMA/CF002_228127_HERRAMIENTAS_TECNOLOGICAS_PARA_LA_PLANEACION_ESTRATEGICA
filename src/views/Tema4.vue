<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Catálogo de servicios de TI

    p.mb-3(data-aos="flip-left") Las organizaciones, empresas o compañías de cualquier sector económico han depositado su confianza en los servicios de TI, toda vez que facilitan la creación de valor y proporcionan una ventaja competitiva. Es por eso que la pandemia y la pospandemia generada por el COVID 19 abren una oportunidad para que se creen y utilicen nuevos servicios orientados a la productividad y a la innovación de las tareas. En ese sentido, a medida que crece la transformación digital, los servicios deben ser usables para que los usuarios finales o clientes puedan acceder a una interfaz organizada y de fácil acceso que incluya la documentación idónea.  Entonces, ¿qué se ocasiona si no se generan buenas prácticas a nivel empresarial?
    p.mb-5(data-aos="flip-left") Si no se generan buenas prácticas en la presentación de los servicios tecnológicos a los usuarios finales, ya sea por falta de una interfaz completa o por simple logística y organización de la empresa, se presentará un riesgo que afectará los desempeños.

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down-left")
      .col-md-11.col-12    
        .bloque-texto-g.color-primario.p-3.p-sm-3.p-md-3
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-01.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h3.mb-0 ¿Cuál es el riesgo?
              br
              br
            p.mb-0 Que la cantidad de solicitudes que lleguen a la mesa de servicios de TI no puedan ser atendidas, además que lleguen solicitudes que exigen más información sobre las ofertas de servicios. Por ello, la carga operativa que recae sobre los técnicos de TI se elevará y no se les permitirá enfocarse en otras funciones críticas de TI.

    p.mb-3(data-aos="fade-down") De esta manera, las divisiones de tecnología tienen un papel muy importante no solo para generar la estabilidad de infraestructura tecnológica, sino que se vuelven un eje estratégico en la misión y visión de las compañías.
    p.mb-3(data-aos="fade-down") Entonces, comprenda qué es y cómo se compone un catálogo de servicios y sus beneficios acerca de este concepto. 
    p.mb-5(data-aos="fade-down") Primero, entienda que una solicitud de servicio es una solicitud formal que un usuario final o cliente envía a la mesa de servicio de TI para iniciar una acción de servicio de TI. Por lo tanto, la gestión de solicitudes de servicio es una función principal de las unidades o áreas de tecnologías de cualquier compañía. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4(data-aos="fade-down")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 La biblioteca de infraestructura de tecnologías de información (ITIL, por sus siglas en inglés) la define como "una práctica para soportar la calidad de los servicios acordados al manejar las solicitudes iniciadas por el usuario de una manera eficiente e intuitiva".
          .bloque-texto-d__autor 
            .h6.mb-0 - Citado en #[em ManageEngine], 2020
              i.fas.fa-quote-right

    p.mb-3(data-aos="fade-down") Dentro de los tipos de solicitud de servicio se puede encontrar:
    ul.lista-ul.mb-2(data-aos="fade-down")
      li.mb-0
        i.fas.fa-angle-right
        | Solicitud de información como los límites de almacenamiento en la nube.
      li.mb-0
        i.fas.fa-angle-right
        | Solicitud de acceso a un documento, servicio, plataforma o red.
      li.mb-0
        i.fas.fa-angle-right
        | Solicitud de un recurso, en los casos cuando se necesitan periféricos <em>hardware</em> como una PC, #[i laptop], teclado o también puede ser #[i software].

    p.mb-3(data-aos="fade-down") Las solicitudes de servicio deben cumplirse en función de flujos de trabajo ya definidos, que pueden variar su complejidad, por lo que es importante que dichos flujos de trabajo deben estandarizarse y probarse para prestar los servicios dentro de los niveles de servicio acordados o SLA (#[em ManageEngine], 2020).
    p.mb-5(data-aos="fade-down") A continuación, se presenta un ejemplo del flujo de trabajo de la gestión de solicitudes de servicio. 

    .row.justify-content-center.mb-5
      .col-12.col-md-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>Ejemplo de flujo de trabajo de gestión de solicitudes</i>
      .col-12.col-md-10(data-aos="fade-right")
        figure 
          img(src='@/assets/curso/temas/tema4/tema4-02.svg', alt='Figura 5. Ejemplo de flujo de trabajo de gestión de solicitudes inicia con el portal de autoservicio, realizar una solicitud de servicio, enviar para aprobación, asignar técnicos, aplicar SLA, ejecutar tareas, entregar servicio y enviar respuestas.')
        figcaption.mt-3 Nota. Tomado de #[em ManageEngine] (2020).

    p.mb-5(data-aos="fade-down") Es muy importante que se relacione este flujo de trabajo con la gestión de las solicitudes y el rol que toma el catálogo de servicios frente a cada fase, según lo indica #[em ManageEngine] (2020):
    
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.herramientas-3.p-0
        h5.text-center.titulo-herramientas-3 Flujo de trabajo de la gestión de solicitudes de servicio
        .row.m-3
          .col-12.herramientas-3.tarjeta--tabla.p-1
            p El usuario final inicia sesión en su portal de autoservicio.
      .col-md-6.col-lg.herramientas-4.tarjeta--tabla.p-0
        h5.text-center.titulo-herramientas-4 Rol del catálogo de servicios
        .row.m-3
          .col-12.tarjeta--tabla.p-1
            p El catálogo de servicios debe estar disponible en el sitio web para el usuario final, mostrando una lista de las ofertas de servicio disponibles.
     
    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.herramientas-3.p-0
        h5.text-center.titulo-herramientas-3 Flujo de trabajo de la gestión de solicitudes de servicio
        .row.m-3
          .col-12.herramientas-3.tarjeta--tabla.p-1
            p El usuario realiza una solicitud de servicio.

      .col-md-6.col-lg.herramientas-4.tarjeta--tabla.p-0
        h5.text-center.titulo-herramientas-4 Rol del catálogo de servicios
        .row.m-3
          .col-12.tarjeta--tabla.p-1
            p El usuario final navega por el catálogo de servicios para conocer sus atributos o características (descripción, costos, SLA, etc.) y completa un formulario web.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.herramientas-3.p-0
        h5.text-center.titulo-herramientas-3 Flujo de trabajo de la gestión de solicitudes de servicio
        .row.m-3
          .col-12.herramientas-3.tarjeta--tabla.p-1
            p.mb-0 - La solicitud se envía al equipo de soporte pertinente y los mecanismos de aprobación entran en acción.
            p.mb-0 - El representante de soporte puede solicitar más información al solicitante.
            p.mb-0 - Se realizan las tareas predefinidas para el cumplimiento del servicio.

      .col-md-6.col-lg.herramientas-4.tarjeta--tabla.p-0
        h5.text-center.titulo-herramientas-4 Rol del catálogo de servicios
        .row.m-3
          .col-12.tarjeta--tabla.p-1
            p Estos procesos en el flujo de trabajo hacen parte de la interfaz de servicios técnicos del catálogo, en el que se presenta una guía para prestar los servicios de manera eficiente.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-6.col-lg.tarjeta--tabla.herramientas-3.p-0
        h5.text-center.titulo-herramientas-3 Flujo de trabajo de la gestión de solicitudes de servicio
        .row.m-3
          .col-12.herramientas-3.tarjeta--tabla.p-1
            p Una vez que se cumple la solicitud se cierra el #[em ticket], el cual maneja el caso y se envía una encuesta corta al solicitante para evaluar la satisfacción del cliente.

      .col-md-6.col-lg.herramientas-4.tarjeta--tabla.p-0
        h5.text-center.titulo-herramientas-4 Rol del catálogo de servicios
        .row.m-3
          .col-12.tarjeta--tabla.p-1
            p Los datos obtenidos de las encuestas se utilizan para evaluar las ofertas de servicios en el catálogo y contribuyen a la mejora continua del servicio.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Catálogo de servicios 

    p.mb-5(data-aos="fade-down") Un catálogo de servicios de TI se presenta como una fuente de información confiable sobre todos los servicios de TI que ofrece la unidad de tecnologías de una organización. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-10
        .bloque-texto-d.color-primario.p-4(data-aos="fade-down")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 ITIL define un catálogo de servicios como una base de datos centralizada que contiene información acertada sobre las ofertas de servicios de TI activas, es decir, es un mostrador o vitrina desde el cual los usuarios finales (internos o externos) solicitan servicios y productos desde la mesa de servicios de TI.
            i.fas.fa-quote-right

    p.mb-3(data-aos="fade-down") Entonces, #[b ¿cuáles son los componentes de un catálogo de servicios y sus beneficios?]
    p.mb-3(data-aos="fade-down") El catálogo de servicios proporciona claridad a los usuarios finales sobre los servicios ofrecidos y generalmente incluye la siguiente información:
    ul.lista-ul.mb-4(data-aos="fade-down")
      li.mb-0
        i.fas.fa-angle-right
        | Categoría del servicio.
      li.mb-0
        i.fas.fa-angle-right
        | Descripción del servicio.
      li.mb-0
        i.fas.fa-angle-right
        | Disponibilidad del servicio.
      li.mb-0
        i.fas.fa-angle-right
        | SLA específicos del servicio.
      li.mb-0
        i.fas.fa-angle-right
        | Propietario del servicio.
      li.mb-0
        i.fas.fa-angle-right
        | Costos del servicio (si procede).

    p.mb-3(data-aos="fade-down") En esencia, el catálogo de servicios es parecido a un menú de un restaurante o una lista de productos en un sitio web de comercio electrónico. Sin esto, los clientes no podrían hacer un pedido, por lo tanto, su objetivo es generar beneficios para los usuarios finales y las organizaciones. Entre los más representativos se tienen los siguientes:

    
    .row.mb-5
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-03.svg', alt='')
        h4.pt-3 Agiliza la comunicación
        p Un catálogo de servicios diseñado acertadamente actúa como el único punto de contacto, para que los usuarios finales vean la lista de servicios disponibles y sus características.
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-04.svg', alt='')
        h4.pt-3 Estandariza la prestación de servicios
        p Al entregar una lista de servicios selecta y definir los parámetros de entrega asociados.
      .col-md-4.col-12.mb-4.mb-md-0(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema4/tema4-05.svg', alt='')
        h4.pt-3 Optimiza los costos
        p Se tiene el control de la oferta de servicios, su demanda y uso, por lo que las compañías pueden utilizar el catálogo de servicios como una herramienta para identificar las ofertas de alto valor que son críticas para el negocio.

</template>

<script>
export default {
  name: 'Tema4',
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
