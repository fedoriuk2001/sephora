$(document).ready(function() {
    $(".selected-site").on("click", function(){
        $(".ui-dialog").toggle();
        $(".ui-widget-overlay").toggle();
        window.scrollTo(0, 0);
    });

    $(".ui-dialog-titlebar-close").on("click", function(){
        $(".ui-dialog").toggle();
        $(".ui-widget-overlay").toggle(); 
        $(".refinement-menu").css({ "display": "none" }); 
    });

    $(".accordion-title").on("click" ,function(){
        $(".accordion-content").toggle();
        $(".accordion-item").addClass('is-active'); 
        return false;
    });

    $(".filter-by-btn").on("click", function(){
        if($('.filters-mobile').hasClass('displayno')){
          $(".filters-mobile").removeClass('displayno');
        }else{
          $(".filters-mobile").removeClass('displayno');
        }
    });

    $(".close-icon").on("click", function(){
        if($('.filters-mobile').hasClass('displayno')){
          $(".filters-mobile").removeClass('displayno');
        }else{
          $(".filters-mobile").addClass('displayno');
        }
        $(".refinement-menu").css({ "display": "none" }); 
    });

    $('.open-close-main').on("click", function(){
        if($('.opened-closed-element').hasClass('filters-open')){
          $(".opened-closed-element").removeClass('filters-open');
        }else{
          $(".opened-closed-element").addClass('filters-open');
        }
    });

    $('.header-search').on("click", function(){
        if($('.search-popin-overlay').hasClass('active')){
            $(".search-popin-overlay").removeClass('active');
          }else{
            $(".search-popin-overlay").addClass('active');
          }
    });
    
    $('.header-search').on("click", function(){
        if($('.search-popin').hasClass('active')){
            $(".search-popin").removeClass('active');
          }else{
            $(".search-popin").addClass('active');
          }
    });
    
    $('.clickfunctionforsearch').on("click", function(){
      if($('.search-popin').hasClass('active')){
          $(".search-popin").removeClass('active');
        }else{
          $(".search-popin").addClass('active');
        }
      });

      $('.clickfunctionforsearch').on("click", function(){
        if($('.search-popin-overlay').hasClass('active')){
            $(".search-popin-overlay").removeClass('active');
          }else{
            $(".search-popin-overlay").addClass('active');
          }
      });

    $('.close-search-popin').on("click", function(){
        if($('.search-popin').hasClass('active')){
            $(".search-popin").removeClass('active');
          }else{
            $(".search-popin").removeClass('active');
          }
    });
    
    $('.close-search-popin').on("click", function(){
        if($('.search-popin-overlay').hasClass('active')){
            $(".search-popin-overlay").removeClass('active');
          }else{
            $(".search-popin-overlay").removeClass('active');
          }
    });
    
    $(window).scroll(
        {
            previousTop: 0
        },
        function () {
        var currentTop = $(window).scrollTop();
        if (currentTop < this.previousTop) {
            $("#navigation").addClass('slideInDown');
            $("#navigation").addClass('sticky-top-nav');
            $("#navigation").removeClass('slideOutUp');
            $(".desktop-header").addClass('slideInDown');
            $(".desktop-header").addClass('sticky-top');
            $(".desktop-header").removeClass('slideOutUp');
        } else {
            $("#navigation").addClass('slideOutUp');
            $("#navigation").removeClass('sticky-top-nav');
            $("#navigation").removeClass('slideInDown');
            $(".desktop-header").addClass('slideOutUp');
            $(".desktop-header").removeClass('sticky-top');
            $(".desktop-header").removeClass('slideInDown');
        }
        this.previousTop = currentTop;
    });

})
