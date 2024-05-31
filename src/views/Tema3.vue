<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Informes

    p.mb-3(data-aos="flip-left") Una vez se han ejecutado las tareas propuestas se debe dar conclusión a las actividades a través de un reporte que presente de forma resumida la problemática, los planes de acción y los resultados alcanzados. Este documento conocido como informe funciona consolidando todos los aspectos relevantes para ser evaluado por los usuarios interesados.
    p.mb-3(data-aos="flip-left") Esta fase cierra el ciclo de la información, que inició con la recolección de datos, seguido de su análisis y conservación y finaliza con la generación de conclusiones, que llevarán a determinar un camino a seguir, bien sea implementando medidas correctivas o soportando la continuidad de las actividades que se consideren exitosas.
    p.mb-5(data-aos="flip-left") Los informes funcionan como compilatorios de todos los eventos y hechos relevantes que se dieron durante la operación de la empresa, aportando respuesta a los interrogantes que motivaron el trabajo, y concluyen con los resultados y las recomendaciones que de allí se derivan.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Tipos

    p.mb-3(data-aos="flip-left") La clasificación de los informes varía en función de los criterios utilizados, a continuación, se presentan aquellos de mayor aplicación:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Tipos de informes</i>
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure 
              img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='Figura 4. Tipos de informes según su extensión y su contenido. Según su extensión se divide en ejecutivo y largo, y según su contenido según divulgativo, científico, técnico y mixto.')
          .tarjeta.color-acento-botones.p-3(x="5%" y="43%" numero="+")
            p Es un documento conciso cuya extensión no supera las 10 páginas. Puede funcionar como resumen de un informe largo; su propósito es presentar la mayor cantidad de información relevante en una breve cantidad de páginas. Se utiliza en ámbitos corporativos de alto nivel, por ejemplo, en juntas directivas, donde se les informa a los participantes de mayor rango, los aspectos importantes de la ejecución administrativa, para sustentar la posterior toma de decisiones.
          .tarjeta.color-acento-botones.p-3(x="5%" y="60%" numero="+")
            p Su extensión supera las 10 páginas y no cuentan con un límite definido, por lo que el autor puede detallar todas las situaciones evidenciadas. Es el tipo de informe idóneo para problemáticas muy complejas o que comprenden muchas ideas útiles para el lector.
          .tarjeta.color-acento-botones.p-3(x="100%" y="43%" numero="+")
            p Este tipo de informe se dirige al público en general, presentan temáticas de amplio espectro y entendimiento por la población. Tienen un lenguaje sencillo para facilitar la comprensión de los lectores.
          .tarjeta.color-acento-botones.p-3(x="100%" y="60%" numero="+")
            p Documentos más complejos que demandan conocimiento previo en la disciplina que abordan. Generalmente, presentan tecnicismos que limitan el entendimiento a un nicho concreto de lectores, usualmente son el resultado de trabajos de investigación.
          .tarjeta.color-acento-botones.p-3(x="100%" y="77.5%" numero="+")
            p Se centran en temáticas específicas asociadas a una problemática. Es uno de los más utilizados en el contexto administrativo, puesto que facilita la implementación de comparativas a partir de escenarios, lo que aporta para la toma de decisiones.
          .tarjeta.color-acento-botones.p-3(x="100%" y="94%" numero="+")
            p Funciona como un punto intermedio entre un informe técnico y uno divulgativo. Se abordan temáticas específicas, pero dirigidas a un público más amplio, por lo cual se trata de simplificar aspectos no tan relevantes para facilitar el entendimiento.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Estructura según las normas técnicas

    p.mb-4(data-aos="flip-left") Los informes, al ser un documento de especial atención, deben cumplir con una serie de requerimientos para facilitar la comprensión y aprovechamiento de la información que en ellos se dispone. Se presentan dos de las normativas técnicas más utilizadas en Colombia:

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Estructura bajo las Normas APA
    
    p.mb-4(data-aos="flip-left") Las Normas APA son un estándar creado por la Asociación de Psicólogos Americanos o APA por sus siglas en inglés, centrado en el establecimiento de lineamientos específicos para la producción de documentos escritos a nivel internacional. Su uso es de amplio espectro, cubriendo desde trabajos académicos, de investigación o de naturaleza económica. Actualmente, cuentan con una gran popularidad, por lo que son consideradas como el marco más utilizado en una gran porción de los sectores académicos, económicos y sociales alrededor del mundo. En su manual de aplicación se detallan las características específicas de cada uno de los apartados del documento, lo que incluye portada, resumen, introducción, resultados, citas, referencias, entre otros.
    
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas Estructura bajo la Norma Técnica de Calidad (NTC 1486)
    
    p.mb-3(data-aos="flip-left") Al igual que en el caso anterior, se centra en las reglas para la presentación de trabajos escritos, tiene especial énfasis en trabajos de investigación y académicos; pero puede ser utilizada en cualquier ámbito. Son emitidas por el Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC.
    p.mb-4(data-aos="flip-left") Cada una de las secciones que comprende el informe tiene su propio apartado dentro de la norma técnica, lo que permite ser específico y preciso en su presentación. Algunos apartados allí descritos son la tapa, la portada, las listas especiales, el glosario, el resumen, la introducción, el capítulo, las conclusiones, las recomendaciones, la bibliografía, los índices, los anexos, entre otros.


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-11.col-lg-10.mb-4.mb-md-0(data-aos="fade-left")
        .tarjeta.color-acento-contenido.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/temas/documento.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4 Normas APA e INCONTEC
                  p.text-small Para conocer algunas de las generalidades de las Normas APA e INCONTEC se invita a consultar el siguiente PDF.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_2_cuadro_comparativo_entre_el _flujo_de_solicitudes_y_el_RO.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    p.mb-3(data-aos="flip-left") La elección de un sistema u otro dependerá de lo que se busca con la presentación del informe y el tipo de público al que va dirigido. En algunas ocasiones es exigencia de los superiores el uso del uno o del otro; sin embargo, cada uno tiene un enfoque que lo hace más viable según el escenario que se espera trasladar al documento. 





</template>

<script>
export default {
  name: 'Tema3',
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
