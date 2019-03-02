$('document').ready(function(){

	if($('.collapse').size()){
	
			try {
				
				$('.collapse').collapse();
				
			}catch(err) {
			    //console.log( err.message );
			}
		
	}
	
  $('#menu-despliegue-op').click(function(){
    if (!$('.caret').hasClass('gira')) {
      $('.caret').addClass('gira');
    }
    if($('.dropdown').hasClass('open')){
      $('.dropdown-menu').hide();
      $('.caret').removeClass('gira');
    }else{
      $('.dropdown-menu').show();
    }
  });

    // $('#menu-despliegue-op').on({
    //   "shown.bs.dropdown": function() { this.closable = false; },
    //   "click":             function() { this.closable = false; },
    //   "hide.bs.dropdown":  function() { this.closable = false; },
    // });

      $('.cerrar-drop').click(function(){
        $('.dropdown-menu').hide();
        $('.caret').removeClass('gira');
      });

      if($('.dropdown-menu').css('display') == 'block'){
        $('#menu-despliegue-op').on('hide.bs.collapse', function (e) {
          e.preventDefault();
        });
      }
       $('[aria-controls="dropdown-menu"]').click(function(){
        $('.dropdown.publico').toggleClass('open');
      });  
//
      $('#boton-1').click(function(){
        $('.caja-oculta-1').slideDown();
        $('.caja-oculta-1').toggleClass("none block");
        $(this).toggleClass("none block");

        if($('.caja-oculta-1').hasClass("block")){

        };

      });

      $('#cerrar-caja-1').click(function(){
           $('.caja-oculta-1').slideUp();
        if($('.caja-oculta-1').hasClass("block")){
            $('.caja-oculta-1').toggleClass("none block");
            $('[name="boton-1"]').toggleClass("none block");
        };
      });

      
    

/*********************************/
      $('#boton-2').click(function(){
        $('.caja-oculta-2').slideDown();
        $('.caja-oculta-2').toggleClass("none block");
        $(this).toggleClass("none block");

        if($('.caja-oculta-1').hasClass("block")){

        };

      });

      $('#cerrar-caja-2').click(function(){
        $('.caja-oculta-2').slideUp();
        if($('.caja-oculta-2').hasClass("block")){
            $('.caja-oculta-2').toggleClass("none block");
            $('[name="boton-2"]').toggleClass("none block");
        };
      });
});

/*********************************/
$('#boton-3').click(function(){
  $('.caja-oculta-3').slideDown();
  $('.caja-oculta-3').toggleClass("none block");
  $(this).toggleClass("none block");

  if($('.caja-oculta-3').hasClass("block")){

  };

});

$('#cerrar-caja-3').click(function(){
  $('.caja-oculta-3').slideUp();
  if($('.caja-oculta-3').hasClass("block")){
      $('.caja-oculta-3').toggleClass("none block");
      $('[name="boton-3"]').toggleClass("none block");
  };
});

