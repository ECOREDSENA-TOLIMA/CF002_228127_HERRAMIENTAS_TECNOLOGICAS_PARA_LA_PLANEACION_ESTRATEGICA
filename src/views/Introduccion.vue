<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5(data-aos="fade-down") Cordial bienvenida a este componente formativo en el que se tratará la recolección de información y elaboración de informes. Para conocer la importancia del tema y los diferentes temas que se incluirán se invita a ver el siguiente video:

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
