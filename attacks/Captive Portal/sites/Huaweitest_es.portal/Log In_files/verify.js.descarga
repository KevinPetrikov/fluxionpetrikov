//****************VARIABLE DESCRIPTION*******************//
// s=�ַ�
// label_name = ������ʶ
// allow_len = ���?��
// field_name = �ֶ���� (document.formname.field)

//*************************************FUNCTION INCLUDED***************************************//

//chkLen(field_name, allow_len, label_name)              	//У���ַ���,���ְ�3λ����    [����]
//chkLen(field_name, allow_len, label_name,defaultEmpty) 	//У���ַ���,���ֶ��Ƿ�Ϊ�� [����]
//chkEmail(field_name,label_name)	       		 	//У��E_mail       [����]
//chkNum(field_name,label_name)		       		 	//У�����ִ�(0-9)
//chkCharNum(field_name,label_name)	       		 	//У���ַ�(0-9a-zA-Z)
//chkPhone(field_name,label_name)              	  		//У��绰(0000-0000-0000)
//chkPostCode(field_name,label_name) 	       			//У���ʱ�
//chkInteger(field_name,label_name)	       			//У��������
//chkWhiteSpace(field_name,label_name)	       		 	//����ո�
//chkFloat(field_name,allow_len,dec,label_name,allow_zero)   	//У������
//chkFileChar(field_name,label_name,defaultEmpty)               //У���ַ�(0-9a-zA-Z,-,.)
//��dec��С�����λ�� allow_zero=�Ƿ�����Ϊ�㣩
//isFloatLength (s,label_name,allow_len, dec,floatErrMes)

//******************FUNCTION HEADER**********************//

// BOI, followed by one or more digits, followed by EOI.
var reInteger = /^\d+$/

// BOI, followed by one or more whitespace characters, followed by EOI.
var reWhitespace = /^\s+$/

// decimal point character differs by language and culture
var decimalPointDelimiter = "."

// field bgcolor
var fieldbg="#FFFFFF";

//*****************FUNCTION MAIN**************************//

function trim(s) {
	var tempStr;
	tempStr = s.replace(/\s+$/g,'');
	tempStr = tempStr.replace(/^\s+/g,'');
	return tempStr;
}

function isEmpty(s){ 
	return ((s == null) || (trim(s).length == 0))
}

function isNum(s) {
    var str = /^[0-9]*$/;
    return (str.test(s));
}



function isCharNum(s) {
    var str = /^[0-9a-zA-Z]*$/;	
	return (str.test(s));
}
//��ĸ���ֺ��»���xiongyong2005-03-21
function isUserId(s) {
    var str = /^[_0-9a-zA-Z]*$/;	
	return (str.test(s));
}

//is Integer? 
function isInteger (s)
{
	var reInteger = /^\d+$/
	if (!reInteger.test(s) || parseInt(s,10)==0)return false;
 	return true
}

function getTextLen(s) {
    var newlength=0;
    for(i=0;i<s.length;i++) {
       var chrInput;
       chrInput=escape(s.charAt(i));
       if(chrInput.length==6) newlength=newlength+3;
       else newlength=newlength+1;
    } //End for
    return newlength;
}


function chkSeleect(field_name,label_name) {
    for ( i = 0; i < field_name.options.length; i++ ) {
       if ( field_name.options[i].selected )  {	
	       if (i==0) {
			   field_name.focus();
		       //field_name.style.background=fieldbg;
		       alert ("\u8bf7\u9009\u62e9" + label_name+"\u3002");
			   return false;
		   }
	       else    
			   return true; 
	       break;
       }
    }
}

function chkLen(field_name, allow_len, label_name,defaultEmpty) {
        var s = field_name.value;
        if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
        if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
	}
	if (getTextLen(s) > allow_len) {
		field_name.focus();
		field_name.style.background=fieldbg;
		alert(ssoPro.message("js.pro.length.cannot.be.greater.than",label_name,allow_len));
		return false;
	}
	return true;
}

function chkEmail(field_name,label_name,defaultEmpty) {
        var s = field_name.value;
	var str = /^[_\-\.0-9a-zA-Z-]+@([_\-\.0-9a-zA-Z-]+\.)+[a-zA-Z]{2,4}$/;
	if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
	if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
	}
	if (!str.test(s))  {
    	        field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.please.enter.the.correct.email"));
	        return false;
        }
	return true;
}

function chkNum(field_name,label_name,defaultEmpty) {
	if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
        var s = field_name.value;
        if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
         }
         if (!isNum(s)) {
         	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.can.only.enter.numbers.and.letters",label_name));
	        return false;
         }
         return true;
}

function chkCharNum(field_name,label_name,defaultEmpty) {
    if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
    var s = field_name.value;
    if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
    if (!isCharNum(s)) {
	    field_name.focus();
	    field_name.style.background=fieldbg;
	    alert(ssoPro.message("js.pro.can.only.enter.numbers.and.letters",label_name));
	    return false;
    }	
    return true;
}

function chkPhone(field_name,label_name,defaultEmpty) {
    if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;	
    var s = field_name.value;
    var str=/^[0-9-;,]*$/;
    if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
    //if (s.length<8) {
	    //field_name.focus();
	    //field_name.style.background=fieldbg;
	    //alert(label_name+" \u683c\u5f0f\u4e0d\u6b63\u786e\uff0c\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801\u683c\u5f0f\u3002");
	    //return false;
    //}
    return true;
}

function chkPostCode(field_name,label_name,defaultEmpty) {
    if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
    var s = field_name.value;
    if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
    if(!isNum(s)||s.length!=6) {
      	    field_name.focus();
	    field_name.style.background=fieldbg;
	    alert(ssoPro.message("js.pro.input.is.not.valid",label_name));
	    return false; 
    }
    return true;    
}

function chkInteger(field_name,label_name,defaultEmpty) {
    if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;	
    var s = field_name.value;
    if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
    if (!reInteger.test(s) || parseInt(s,10)==0) {
    	        field_name.focus();
		    field_name.style.background=fieldbg;
		    alert(ssoPro.message("js.pro.enter.a.positive.integer",label_name));
	        return false; 
    }
    return true; 
}

function chkWhiteSpace(field_name,label_name) { 
    var s = field_name.value;
    if (isEmpty(s) || reWhitespace.test(s)) {
		field_name.focus();
		field_name.style.background=fieldbg;
		alert(ssoPro.message("js.pro.please.input",label_name));
    	return false;
	}
	return true;
}

function chkFloat(field_name,allow_len,dec,label_name,allow_zero,defaultEmpty) {
    if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;	
    if (typeof(allow_zero) == "undefined") allow_zero = true;
    
    var s = field_name.value;
    var i;
    var floatErrMes = "";
    
    if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
    
    for ( i=0; i<(allow_len-dec); i++) {
	     floatErrMes += "9";
	}
    floatErrMes +=".";
    for ( i=0; i<dec; i++) {
	     floatErrMes += "9";
    }    
	//check numeric
    if ( isFloatNaN(s,label_name)) {
	    field_name.focus();
	    field_name.style.background=fieldbg;
            return false;
    }
       
    s=s.toString();	
    //check positive value
    if (s.charAt(0) == '-' || (!allow_zero && parseFloat(s) == 0)) {
             field_name.focus();
	     field_name.style.background=fieldbg;
	     alert(ssoPro.message("js.pro.enter.a.positive.number",label_name));
	     return false;
    }    
    
    //check if the length of the number is correct
    if (!isFloatLength(s,label_name,allow_len,dec,floatErrMes)) {
		 field_name.focus();
		 field_name.style.background=fieldbg;
    	         return false;
    }
    // All characters are numbers.
    return true;
}

 function isFloatLength (s,label_name,allow_len, dec,floatErrMes) {
     var seenDecimalPoint = false;
     var posDecimalPoint;
     for (i = 0; i < s.length; i++) {   
        // Check that current character is number.
        var c = s.charAt(i); 
        if ((c == decimalPointDelimiter) && !seenDecimalPoint) {
        	seenDecimalPoint = true;
        	posDecimalPoint = i;
        }
     } //End For
    
     if (seenDecimalPoint == true) {
    	if ((s.length - posDecimalPoint - 1) > dec || posDecimalPoint==(s.length-1)) { //right too long
	    	if (!isEmpty(label_name)) 
	    		alert(ssoPro.message("js.pro.value.cannot.be.greater.than",label_name,dec));
    		return false;
    	}
    	else if (posDecimalPoint > (allow_len - dec)	) { // left too long
    		if (!isEmpty(label_name)) 
    			    alert(ssoPro.message("js.pro.value.cannot.be.greater.than",label_name,floatErrMes));
    		return false;
    		
		} //else
    } else if (s.length > allow_len - dec) { // left too long
    		if (!isEmpty(label_name)) 
    			alert(ssoPro.message("js.pro.value.cannot.be.greater.than",label_name,floatErrMes));
    		return false;
    
    } //else
    return true;  				   	
 }    

//is numeric?
function isFloatNaN (s,label_name) {
	if (isNaN(s)) {
  		if (!isEmpty(label_name)) {
        		alert(ssoPro.message("js.pro.enter.number",label_name,floatErrMes));
                }
    	        return true;
        } 
        return false;
} 

function isFileCharNum(s) {
    var str = /^[0-9a-zA-Z-;.; ;_]*$/;	
	return (str.test(s));
}

function chkFileChar(field_name,label_name,defaultEmpty){
   if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
    var s = field_name.value;
    if(isEmpty(s)) {
		if (!defaultEmpty) {	              
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
    }
  var str = s.substring(s.lastIndexOf("\\")+1);
   if (!isFileCharNum(str)) {
	    alert(ssoPro.message("js.pro.can.only.enter.numbers.and.letters",label_name));
	    return false;
    } 
    return true;
}

function chkAlias(field_name,label_name,defaultEmpty) {
	if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
        var s = field_name.value;
        if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
         }
         if (s.length<=5) {
          	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.length.must.be.greater.than.6",label_name));
	        return false;
         }
         if (isNum(s)) {
          	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.is.not.allowed.to.be.the.full.number",label_name));
	        return false;
         }
         if (isOneCharAndNum(s)){
           	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.dont.one.letters.numbers",label_name));
	        return false;
         }
         if (isTwoCharAndNum(s)){
           	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.dont.two.letters.numbers",label_name));
	        return false;
         }
         if (isThreeCharAndNum(s)){
           	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(ssoPro.message("js.pro.dont.three.letters.numbers",label_name));
	        return false;
         }
         if (!isUserId(s)) {
		    field_name.focus();
		    field_name.style.background=fieldbg;
		    alert(ssoPro.message("js.pro.can.only.enter.numbers.and.letters",label_name));
		    return false;
    	 }	
     return true;
}
function isOneCharAndNum(s){
		var a=s.substring(0,1);
		var b=s.substring(1);
		if(isChar(a)&&isNum(b))	return true;
		return false;
}
function isTwoCharAndNum(s){
		var a=s.substring(0,2);
		var b=s.substring(2);
		if(isChar(a)&&isNum(b))	return true;
		return false;
}
function isThreeCharAndNum(s){
		var a=s.substring(0,3);
		var b=s.substring(3);
		if(isChar(a)&&isNum(b))	return true;
		return false;
}
function isValid(s){
	if(s.length<=3) return false;
	if(s.length>1){
		var a=s.substring(0,1);
		var b=s.substring(1);
		if(isChar(a)&&isNum(b))	return false;
	}
	if(s.length>2){
		var a=s.substring(0,2);
		var b=s.substring(2);
		if(isChar(a)&&isNum(b)) return false;
	}
	if(s.length>3){
		var a=s.substring(0,3);
		var b=s.substring(3);
		if(isChar(a)&&isNum(b)) return false;
	}
	if(isNum(s)) return false;
	return true;
}
function isChar(s) {
    var str = /^[a-zA-Z]*$/;	
	return (str.test(s));
}
function chkBirthday(field_name,label_name,defaultEmpty) {
	if (typeof(defaultEmpty) == "undefined") defaultEmpty = true;
        var s = field_name.value;
        if(isEmpty(s)) {
		if (!defaultEmpty) {
	               field_name.focus();
	               field_name.style.background=fieldbg;
	               alert(ssoPro.message("js.pro.please.input",label_name));
	               return false;
	        } else return true;
         }
         if (!isValidBirthday(s)) {
         	field_name.focus();
	        field_name.style.background=fieldbg;
	        alert(label_name+"\u8f93\u5165\u4e0d\u5408\u6cd5\uff0c\u8bf7\u8f93\u5165 yyyymmdd\u3002");
		    alert(ssoPro.message("js.pro.please.enter.yyyymmdd",label_name));

	        return false;
         }   
         return true;
}
function isValidBirthday(s){
	if(s.length!=8) return false;
	if(!isNum(s)) return false;
	var a=s.substring(4,6);
	if(a>"12" || a<"01") return false;
	var b=s.substring(6);
	if(b>"31" || a<"01") return false;
	return true;
}