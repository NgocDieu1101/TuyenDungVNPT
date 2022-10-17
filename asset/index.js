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

$('#demo').pagination({
  dataSource: [1, 2, 3, 4, 5, 6, 7, ... , 195],
  callback: function(data, pagination){
    // template method of yourself
    var html = template(data);
    dataContainer.html(html);
  }
})
  
$('#demo').pagination({

  // Data source
  // Array | String | Function | Object
  dataSource: '',
  
  // String | Function
  locator: 'data',
  
  // Total entries, must be specified when the pagination is asynchronous
  totalNumber: 1,
  
  // Default page
  pageNumber: 1,
  
  // entries of per page
  pageSize: 10,
  
  // Page range (pages on both sides of the current page)
  pageRange: 2,
  
  // Whether to display the 'Previous' button
  showPrevious: true,
  
  // Whether to display the 'Next' button
  showNext: true,
  
  // Whether to display the page buttons
  showPageNumbers: true,
  
  showNavigator: false,
  
  // Whether to display the 'Go' input
  showGoInput: false,
  
  // Whether to display the 'Go' button
  showGoButton: false,
  
  // Page link
  pageLink: '',
  
  // 'Previous' text
  prevText: '&laquo;',
  
  // 'Next' text
  nextText: '&raquo;',
  
  // Ellipsis text
  ellipsisText: '...',
  
  // 'Go' button text
  goButtonText: 'Go',
  
  // Additional className for Pagination element
  //className: '',
  
  classPrefix: 'paginationjs',
  
  // Default active class
  activeClassName: 'active',
  
  // Default disable class
  disableClassName: 'disabled',
  
  //ulClassName: '',
  
  // Whether to insert inline style
  inlineStyle: true,
  
  formatNavigator: '<%= currentPage %> / <%= totalPage %>',
  
  formatGoInput: '<%= input %>',
  
  formatGoButton: '<%= button %>',
  
  // Pagination element's position in the container
  position: 'bottom',
  
  // Auto hide previous button when current page is the first page
  autoHidePrevious: false,
  
  // Auto hide next button when current page is the last page
  autoHideNext: false,
  
  //header: '',
  
  //footer: '',
  
  // Aliases for custom pagination parameters
  //alias: {},
  
  // Whether to trigger pagination at initialization
  triggerPagingOnInit: true,
  
  // Whether to hide pagination when less than one page
  hideWhenLessThanOnePage: false,
  
  showFirstOnEllipsisShow: true,
  
  showLastOnEllipsisShow: true,
  
  // Pagging callback
  callback: function(){}
  
  })

