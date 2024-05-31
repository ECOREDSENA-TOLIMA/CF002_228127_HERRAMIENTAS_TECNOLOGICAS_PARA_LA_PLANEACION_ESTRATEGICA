<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-down") La recolección de información y la elaboración de informes son fundamentales en cualquier proceso de gestión y toma de decisiones. Comprender y aplicar las técnicas adecuadas para obtener, priorizar y presentar la información es esencial para garantizar la precisión y relevancia de los datos recopilados. En este componente formativo, se explorarán diversas técnicas de recolección de información, la priorización eficaz de la misma y la creación de informes claros y completos. Además, se abordará la elaboración de un catálogo de servicios de TI. Para profundizar en estos temas, se presenta a continuación un video que ilustra cada uno de estos aspectos en detalle:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/0QVl2gwmcf0" title="Recolección de información y elaboración de informes" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
