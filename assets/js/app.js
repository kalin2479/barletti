$( document ).ready(function() {
  $( "#boxBtnMenu" ).on( "click", menuClick);
});
function menuClick(){
  if ($(this).hasClass("active")){
    $(this).removeClass("active");
    $(".boxNav").removeClass("active");
    $(".boxDetail").removeClass("moveLeft");
    $(".footer").removeClass("moveLeft");
  }else{
    $(this).addClass("active");
    $(".boxNav").addClass("active");
    $(".boxDetail").addClass("moveLeft");
    $(".footer").addClass("moveLeft");
  }

}
