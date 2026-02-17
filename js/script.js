$(document).ready(function() {
  $(".item").click(function(){
    $(this).next(".aside_depth02").stop().slideToggle(300);
    $(".aside_depth02").not($(this).next()).slideUp();
  })
});