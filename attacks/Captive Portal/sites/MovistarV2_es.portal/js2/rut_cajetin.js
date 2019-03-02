/* Copyright (c) 2009 Josï¿½ Joaquï¿½n Nï¿½ï¿½ez (josejnv@gmail.com) http://joaquinnunez.cl/blog/
 * Licensed under GPL (http://www.opensource.org/licenses/gpl-2.0.php)
 * Use only for non-commercial usage.
 *
 * Version : 0.5
 *
 * Requires: jQuery 1.2+
 */
 
(function($)
{
  jQuery.fn.Rut = function(options)
  {
    var defaults = {
      digito_verificador: null,
      on_error: function(){},
      on_success: function(){},
      validation: true,
      format: true,
      format_on: 'change'
    };

    var opts = $.extend(defaults, options);

    return this.each(function(){
    
      if(defaults.format)
      {
        jQuery(this).bind(defaults.format_on, function(){
          jQuery(this).val(jQuery.Rut.formatear(jQuery(this).val(),defaults.digito_verificador==null).toUpperCase());
        });
      }
      if(defaults.validation)
      {
        if(defaults.digito_verificador == null)
        {
          jQuery(this).bind('blur', function(){
            var rut = jQuery(this).val();
            if(jQuery(this).val() != "" && !jQuery.Rut.validar(rut))
            {
                defaults.on_error();
            }
            else if(jQuery(this).val() != "")
            {
                defaults.on_success();
            }
          });
        }
        else
        {
          var id = jQuery(this).attr("id");
          jQuery(defaults.digito_verificador).bind('blur', function(){
            var rut = jQuery("#"+id).val()+"-"+jQuery(this).val();
            if(jQuery(this).val() != "" && !jQuery.Rut.validar(rut))
            {
                defaults.on_error();
            }
            else if(jQuery(this).val() != "")
            {
                defaults.on_success();
            }
          });
        }
      }
    });
  }
})(jQuery);

/**
  Funciones
*/

function checkRutGenerico(campo, isEmpresa, svalor,id)
{	
	var tmpstr = "";
	var rut = campo;
	var i=0;
	var largo=0;
	var rutMax=rut;
	var j=0;
	var cnt=0;
	var dv="";
	var suma=0;
	var mul=0;
	var res=0;
	var dvi;
	

	
	if(campo.length == 0)
		return false;
	
	for ( i=0; i < rut.length ; i++ )
		if ( rut.charAt(i) != ' ' && rut.charAt(i) != '.' && rut.charAt(i) != '-' )
			tmpstr = tmpstr + rut.charAt(i);
	rut = tmpstr;
	largo = rut.length;
	tmpstr = "";
	for ( i=0; rut.charAt(i) == '0' ; i++ );
		for (; i < rut.length ; i++ )
			tmpstr = tmpstr + rut.charAt(i);
	rut = tmpstr;
	largo = rut.length;
		
	tmpstr="";
	for ( i=0; i < rutMax.length ; i++ )
		if ( rutMax.charAt(i) != ' ' && rutMax.charAt(i) != '.' && rutMax.charAt(i) != '-' )
		  tmpstr = tmpstr + rutMax.charAt(i);
	tmpstr = tmpstr.substring(0, tmpstr.length - 1);
	
	
	var invertido = "";
	for ( i=(largo-1),j=0; i>=0; i--,j++ )
		invertido = invertido + rut.charAt(i);
	var drut = "";
	drut = drut + invertido.charAt(0);
	drut = drut + '-';
	cnt = 0;
	for ( i=1; i<largo; i++)
	{
		if ( cnt == 3 )
		{
			drut = drut + '.';
			drut = drut + invertido.charAt(i);
			cnt = 1;
		}
		else
		{
			drut = drut + invertido.charAt(i);
			cnt++;
		}
	}
	invertido = "";
	for ( i=(drut.length-1),j=0; i>=0; i--,j++ )
	{
		if (drut.charAt(i)=='k')
			invertido = invertido + 'K';
		else
			invertido = invertido + drut.charAt(i);
	}
	

	switch(svalor) 
	{
		case 1:
		    document.getElementById("CustPermIDAux").value = invertido;
		    break;
		case 2:				
		    document.getElementById(id).value = invertido;
		    break;
	}
	
	
	return true;
}



function soloRUT(e,id)
{
	var tecla ;
	
	
	if(document.getElementById("username")){	
		tecla = event.keyCode;
	}else{
		tecla = e.which;
	}		
	
	if(tecla==8) return true;

	var patron =/^[0-9kK]+$/;  //acepta valores alfanumericos	
	var te = String.fromCharCode(tecla);

	if(!patron.test(te) && tecla==0){
		return true;
	}
	

	if (tecla == 13)
    {
		if(document.getElementById("chkEmpresas").checked)
		{
			if(!document.getElementById("CustPermIDAux").value == "")
			{
				document.getElementById(id).focus();
				if(!document.getElementById(id).value == "")
				{	
					document.getElementById("SignonPswdAux").focus();
				}
			}
		}
		else
		{
			if(!document.getElementById(id).value == "")
			{	
				document.getElementById("SignonPswdAux").focus();
			}
		}
    }//
	return patron.test(te);
}


jQuery.Rut = {

		 

  quitarFormato: function(rut)
        {
          var strRut = new String(rut);
          while( strRut.indexOf(".") != -1 )
          {
          strRut = strRut.replace(".","");
          }
          while( strRut.indexOf("-") != -1 )
          {
          strRut = strRut.replace("-","");
          }
          while( strRut.indexOf("-") != -1 )
          {
          strRut = strRut.replace("-","");
          }
          
          return strRut;
        },

  digitoValido: function(dv)
        { 
          if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' 
            && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' 
            && dv != 'k'  && dv != 'K')
          {   
            return false; 
          } 
          return true;
        },

  digitoCorrecto:   function(crut)
          { 
            var largo = crut.length;
            if ( largo < 2 )  
            {   
              return false; 
            }
            if(largo > 2)
            {
             var rut = crut.substring(0, largo - 1);
            }
            else
            {   
              var rut = crut.charAt(0);
            }
           var  dv = crut.charAt(largo-1);
            jQuery.Rut.digitoValido(dv);  
          
            if(rut == null || dv == null)
            {
              return 0;
            }

           var dvr = jQuery.Rut.getDigito(rut);

            if (dvr != dv.toLowerCase())  
            {   
              return false;
            }
            return true;
          },

          getDigito:    function(rut)
        {
          var dvr = '0';
          var suma = 0;
          var mul  = 2;
          for(var i=rut.length -1;i >= 0;i--) 
          { 
           var  suma = suma + rut.charAt(i) * mul;    
            if (mul == 7)
            {
            var  mul = 2;
            }   
            else
            {         
              mul++;
            } 
          }
          var res = suma % 11;  
          if (res==1)
          {
            return 'k';
          } 
          else if(res==0)
          {   
            return '0';
          } 
          else  
          {   
            return 11-res;
          }
        },

  validar:   function(texto)
        {
          texto = jQuery.Rut.quitarFormato(texto);
          var largo = texto.length;
        
          // rut muy corto
          if ( largo < 2 )  
          {
            return false; 
          }
    
          // verifica que los numeros correspondan a los de rut
          for (var i=0; i < largo ; i++ ) 
          {   
            // numero o letra que no corresponda a los del rut
            if(!jQuery.Rut.digitoValido(texto.charAt(i)))
            {     
              return false;
            }
          }
    
          var invertido = "";
          for(var i=(largo-1),j=0; i>=0; i--,j++)
          {
            invertido = invertido + texto.charAt(i);
          }
          var dtexto = "";
          dtexto = dtexto + invertido.charAt(0);
          dtexto = dtexto + '-';  
         var  cnt = 0;  
        
          for ( var i=1; i<largo; i++ ) 
          {
            if ( cnt == 3 )   
            {     
              dtexto = dtexto + '.';          
              dtexto = dtexto + invertido.charAt(i);      
              var cnt = 1;    
            }
            else    
            {       
              dtexto = dtexto + invertido.charAt(i);      
              cnt++;    
            } 
          } 
        
          invertido = ""; 
          for (var i=(dtexto.length-1),j=0; i>=0; i--,j++)
          {   
            invertido = invertido + dtexto.charAt(i);
          }
    
          if (jQuery.Rut.digitoCorrecto(texto))
          {   
            return true;
          }
          return false;
        }
};