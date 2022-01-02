
/* SWIPER */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',

    pagination: {
        el: '.swiper-pagination'
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },

})

/* SCROLL REVEAL */
window.sr = ScrollReveal({reset: true})

sr.reveal(".body", {duration: 1100})

sr.reveal(".cabecalho", {duration: 1500})
sr.reveal(".sobre", {duration: 1500})
sr.reveal(".formacao", {duration: 1500})

sr.reveal(".experiencias", {
  duration: 1500, 
  rotate: {x:0, y:30, z:0}
})

sr.reveal(".competencias", {
  duration: 1500,
  rotate: {x:0, y:30, z:0}
})

sr.reveal(".especializacoes", {
  duration: 1500,
  rotate: {x:0, y:30, z:0}
})

sr.reveal(".projetos", {
  duration: 1500,
  rotate: {x:0, y:30, z:0}
})

sr.reveal(".rodape", {duration: 1500})