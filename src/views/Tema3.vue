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

    p.mb-3(data-aos="flip-left") La clasificación de los informes varía en función de los criterios utilizados, a continuación se presentan aquellos de mayor aplicación:

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-8(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Tipos de informes</i>
      .col-12.col-md-10.col-lg-8(data-aos="fade-right")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure 
              img(src='@/assets/curso/temas/tema3/tema3-01.svg', alt='')
          .tarjeta.color-acento-botones.p-3(x="5%" y="43%" numero="+")
            p Es un documento conciso cuya extensión no supera las 10 páginas. Puede funcionar como resumen de un informe largo; su propósito es presentar la mayor cantidad de información relevante en una breve cantidad de páginas. Se utiliza en ámbitos corporativos de alto nivel, por ejemplo, en juntas directivas, donde se les informa a los participantes de mayor rango, los aspectos importantes de la ejecución administrativa, para sustentar la posterior toma de decisiones.
          .tarjeta.color-acento-botones.p-3(x="5%" y="60%" numero="+")
            p Su extensión supera las 10 páginas y no cuentan con un límite definido, por lo que el autor puede detallar todas las situaciones evidenciadas. Es el tipo de informe idóneo para problemáticas muy complejas o que comprenden muchas ideas útiles para el lector.
          .tarjeta.color-acento-botones.p-3(x="100%" y="43%" numero="+")
            p Este tipo de informe se dirigen al público en general, presentan temáticas de amplio espectro y entendimiento por la población. Tienen un lenguaje sencillo para facilitar la comprensión de los lectores.
          .tarjeta.color-acento-botones.p-3(x="100%" y="60%" numero="+")
            p Documentos más complejos que demandan conocimiento previo en la disciplina que abordan. Generalmente, presentan tecnicismos que limitan el entendimiento a un nicho concreto de lectores, usualmente son el resultado de trabajos de investigación.
          .tarjeta.color-acento-botones.p-3(x="100%" y="77.5%" numero="+")
            p Se centran en temáticas específicas asociadas a una problemática. Es uno de los más utilizados en el contexto administrativo, puesto que facilita la implementación de comparativas a partir de escenarios, lo que aporta para la toma de decisiones.
          .tarjeta.color-acento-botones.p-3(x="100%" y="94%" numero="+")
            p Funciona como un punto intermedio entre un informe técnico y uno divulgativo. Se abordan temáticas específicas, pero dirigidas a un público más amplio, por lo cual se trata de simplificar aspectos no tan relevantes para facilitar el entendimiento.







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
