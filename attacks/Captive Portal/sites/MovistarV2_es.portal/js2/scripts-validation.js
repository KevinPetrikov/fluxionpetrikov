function submitHandler(form) {
	if($('.error-especial').size()){
		$('.error-especial').hide();
	}
	form.submit();
}
	    
function showErrors(em, el) {
	/* MARCACIÓN PARA FORMULARIOS */
	if(typeof(dataLayer) != 'undefined'){
		for (var i = el.length - 1; i >= 0; i--) {
			var formGroup = $(el[i]['element']).parents('.form-group');
			if(formGroup.find('#'+$(el[i]['element']).attr('id')+'-error').is(':visible') != true){			
				var label = el[i]['message'];
				var action = formGroup.find('label').text();
				if(action == '') action = $(el[i]['element']).attr('name');
                var category = $(el[i]['element']).parents('form').attr('id');
				if(category == 'undefined' || typeof(category) == 'undefined') category = $(el[i]['element']).parents('form').attr('action');
				//console.log('showErrors - dataLayer.push({\'event\': \'eventga\',\'category\': \'Form:'+category+'\',\'action\': \''+action+'\',\'label\': \''+label+'\'});');
				dataLayer.push({'event': 'eventga','category': 'Form:'+category, 'action': action, 'label': label});
			}
		}
	}else{
		//console.log('showErrors - dataLayer not found');
	};
			
   this.defaultShowErrors();
   $( "<span class='clic'></span>" ).appendTo( ".error" );
 }
	    
function invalidHandler(event, validator) {
	if($('.error-especial').size()){
		$('.error-especial').hide();
	}                
}
	    
function errorPlacement(error, element) {
	if (element.attr("name") == "captcha" )  {
		error.prependTo(element.parent()).addClass('error-captcha');
	}else{
		error.prependTo(element.parent().parent().parent());
	}
}

function highlight(element) {
	$(element).parent().parent('div').removeClass('checked');
	$(element).parent().removeClass('check-box');
	$(element).addClass('error');
}
	    
function unhighlight(element) {
	$(element).parent().parent('div').addClass('checked');
	$(element).parent().addClass('check-box');
	$(element).removeClass('error');
}	

function numbersonly(myfield, e, dec) {
    var key;
    var keychar;
    if ($("#username").val().length <= 12) {
        if (window.event){
            key = window.event.keyCode;
        }else if (e){
            key = e.which;
        }else{
            return true;
		}
        keychar = String.fromCharCode(key);

        if ((key == null) || (key == 0) || (key == 8) ||
(key == 9) || (key == 13) || (key == 27)){
            return true;

		}else if ((("0123456789kK").indexOf(keychar) > -1)){
            return true;

 
      
		}else{
            return false;
		}
    }
    else return false;
}
		
$(document).ready(function() {
	//Rut el registro
    $("[name='rut']").Rut({ format_on: 'keyup' });
    //Rut en el login
    $("[name='username']").Rut({ format_on: 'keyup'  }); 
	// METODOS AÑADIDOS valida el rut
    $.validator.addMethod("rut", function(value, element) { return this.optional(element) || $.Rut.validar(value);
    }, "Este campo debe ser un rut valido");
    // valida que una cadena de txt sea igual a algo
    $.validator.addMethod("equals", function(value, element, string) { return value === string;
    }, $.validator.format("Texto no corresponde"));
    // valida numero de telefono movil
    $.validator.addMethod("movil", function(value, element) {
      return this.optional(element) || value.match(/^([0-9]{9})$/i);}, "El teléfono ingresado no es correcto");
    $.validator.addMethod("fijo", function(value, element) {return this.optional(element) || value.match(/^([0-9]{9})$/i);
      }, "El numero no es valido");
    // valida clave: minimo un numero y una letra , largo entre 8 y 12
    $.validator.addMethod("clave", function(value, element) {
      return this.optional(element) || value.match(/^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/i);}, "No cuenta con requerimientos minimos");
    // sólo texto
    $.validator.addMethod("textonly", function(value, element) {
        var valid = false;
        var check = /[^-\.a-zA-Z\s\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02AE-\u0027]/.test(value);
        if(check==false)
            var valid = true;
        return this.optional(element) || valid;}, "Ingrese sólo texto");
    // Validación de Latch
    $("#latch").validate({
		submitHandler: submitHandler,
		invalidHandler: invalidHandler,
		onkeyup: false,
		rules: {latchCode: {required: true}
		},
        messages: {	latchCode: {required: "Ingresa el código Latch",}
		},
        errorElement: "div",
        wrapper: "div", // a wrapper around the error message
        errorPlacement: function(error, element) {
            error.prependTo(element.parent()); },
        showErrors: function(em, el) {
			/* MARCACIÓN PARA FORMULARIOS */
			for (var i = el.length - 1; i >= 0; i--) {
				var formGroup = $(el[i]['element']).parents('.form-group');
				if(formGroup.find('#'+$(el[i]['element']).attr('id')+'-error').is(':visible') != true){
					if(typeof(dataLayer) != 'undefined'){
						var label = el[i]['message'];
						var action = formGroup.find('label').text();
						if(action == '') action = $(el[i]['element']).attr('name');
                        var category = $(el[i]['element']).parents('form').attr('id');
						if(category == 'undefined' || typeof(category) == 'undefined') category = $(el[i]['element']).parents('form').attr('action');
						dataLayer.push({'event': 'eventga','category': 'Form:'+category, 'action': action, 'label': label});
					} }
			};
			this.defaultShowErrors();
			$( "<span class='clic'></span>" ).appendTo( ".error" );
        } });
	// El funcionamiento de la x que cierra
    $('form').on('mousedown', '.clic', function() {
        var epa = $(this).parent();
        $(':focus').blur(function() { epa.fadeOut(); });
        epa.fadeOut();
    });
	if ($("#clave").size()) {
        $("#clave").passStrengthify({
            element: $('#ele'),
            levels: ['', 'Débil', 'Regular', 'Fuerte'],
            colours: ['#dde8ea', '#ec008c ', '#fdb714', '#238937 '],
            tests: [/.{1}/, /.*[A-Z]/, /.*\d/],
            minimum: 8,
            labels: { tooShort: 'Demasiado corta', passwordStrength: ''  }
        });}
		if ($("#claveNueva").size()) {
        $("#claveNueva").passStrengthify({
            element: $('#ele'),
            levels: ['', 'Débil', 'Regular', 'Fuerte'],
            colours: ['#dde8ea', '#ec008c ', '#fdb714', '#238937 '],
            tests: [/.{1}/, /.*[A-Z]/, /.*\d/],
            minimum: 8,
            labels: { tooShort: 'Demasiado corta', passwordStrength: '' }
        });}
    if ($("#pass").size()) {
        $("#pass").passStrengthify({
            element: $('#ele'),
            levels: ['', 'Débil', 'Regular', 'Fuerte'],
            colours: ['#dde8ea', '#ec008c ', '#fdb714',
                '#238937 '],
            tests: [/.{1}/, /.*[A-Z]/, /.*\d/],
            minimum: 8,
            labels: {tooShort: 'Demasiado corta', passwordStrength: ''} 
        });
    }
    $(".passStrengthify > div > span > span").css({
        "font-size": "11px",
        "margin-left": "0",
        "color": "#525252",
        "display": "inline-block",
        "margin-bottom": "5px"  });
    $(".passStrengthify > span").css({ "width": "31%" });
});
