function openImageOverlay() {
	$('.feature').click(function(){
      var graphic_path = $(this).attr('src');    
      $('html').append("<div id='overlay'><img src=" + graphic_path + "><p class='overlay-close'>Close</p></div>");
      //$('body').addClass('no-scroll');

      closeOverlay();
    });	
} 


function closeOverlay() {
  $('#overlay').click(function() {
    $('#overlay').remove();
    //$('body').removeClass('no-scroll');
  });
}



$(function initialize() {

	openImageOverlay();
	



});