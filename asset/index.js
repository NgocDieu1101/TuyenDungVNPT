//Phần chạy chữ 

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

// Hai nút icon chuyển đổi hình ảnh
$(document).on('ready', function () {
  $('.slider').slick({
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      prevArrow: '<div class="slick-prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>',
  });

  //Hiển thị và ẩn video
  var videoBanner = $('.background-video')
  var videoIframe = $('#videoHome')
  videoBanner.on('click', ()=> {
    if(videoBanner){
      videoBanner.addClass('hidden');
      videoIframe.addClass('show');
    }
  })
//   $('#demo').pagination({
//     dataSource: [1, 2, 3, 4, 5, 6, 7, ... 195],
//     callback: function(data, pagination) {
//         // template method of yourself
//         var html = template(data);
//         dataContainer.html(html);
//     }
// })
});

