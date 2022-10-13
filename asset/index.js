const splide = new Splide( '.splide', {
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    arrows: false,
    pagination: false,
    perPage: 3,
    autoScroll: {
      speed: 1,
    },
  } );
splide.mount( window.splide.Extensions );