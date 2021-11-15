$(".selected-site").click(function(){
    $(".ui-dialog").toggle();
    $(".ui-widget-overlay").toggle(); 
    window.scrollTo(0, 0);
});

$(".ui-dialog-titlebar-close").click(function(){
    $(".ui-dialog").toggle();
    $(".ui-widget-overlay").toggle(); 
});

$(".accordion-title").click(function(){
    $(".accordion-content").toggle();
    $(".accordion-item").addClass('is-active'); 
    return false;
});

$(".filter-by-btn").click(function(){
    $(".refinements-mobile").toggle(); 
});

$(".close-icon").click(function(){
    $(".refinements-mobile").toggle(); 
});

$('.open-close-main').click(function(){
    if($('.opened-closed-element').hasClass('refinements-open')){
        $(".opened-closed-element").removeClass('refinements-open');
      }else{
        $(".opened-closed-element").addClass('refinements-open');
      }
});
