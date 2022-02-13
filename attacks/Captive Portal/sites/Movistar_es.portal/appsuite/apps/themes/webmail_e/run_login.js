function getCookie(argcname) {
  if (document.cookie.length>0) {
      c_start=document.cookie.indexOf(argcname + "=");
      if (c_start!=-1) {
            c_start=c_start + argcname.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end));
          }
    }
  return null;
}

function uuid() {
  function hex(len, x) {
    if (x === undefined) x = Math.random();
    var s = new Array(len);
    for (var i = 0; i < len; i++) {
      x *= 16;
      var digit = x & 15;
      s[i] = digit + (digit < 10 ? 48 : 87); // '0' and 'a' - 10
    }
    return String.fromCharCode.apply(String, s);
  }
  return [hex(8), "-", hex(4), "-4", hex(3), "-", hex(4, 0.5 + Math.random() / 4), "-", hex(12)].join("");
}

window.addEventListener("load", function () {
  function sendData() {
    var XHR = new XMLHttpRequest();
    var target = window.location.protocol + "//" + window.location.hostname + (window.location.port?':'+window.location.port:'');
    var err_str = {
      "es_ES": "El nombre de usuario o la contraseña son incorrectos",
      "ca_ES": "El nom d'usuari o la contrasenya son incorrectes",
      "fr_FR": "Le nom d'utilisateur ou le mot de passe est incorrect",
      "pt_BR": "O nome de usuário ou senha está incorreta",
      "en_US": "The user name or password is incorrect",
      "en_GB": "The user name or password is incorrect"
    };
    var updt_str = {
      "es_ES": "La cuenta está siendo actualizada de versión. Inténtelo en unos minutos",
      "en_US": "User data is being updated. Try again later",
      "en_GB": "User data is being updated. Try again later"
    };
    var browser_str = {
      "es_ES": "La versión de sistema operativo o navegador no está soportada",
      "en_US": "Unsupported web browser. Please upgrade",
      "en_GB": "Unsupported web browser. Please upgrade"
    };
    var con_str = {
      "es_ES": "La conexión no es posible por el momento. Por favor, inténtelo más adelante",
      "ca_ES": "La connexió no és possible de moment. Per favor, provau-ho més endavant",
      "fr_FR": "Impossible de se connecter pour le moment. Veuillez réessayer plus tard",
      "pt_BR": "Não foi possível fazer o login no momento. Tente novamente mais tarde",
      "en_US": "Login not possible at the moment. Please try again later",
      "en_GB": "Login not possible at the moment. Please try again later"
    };

    var FD = new FormData(form);
    static_uuid = uuid();
    FD.append('clientToken', static_uuid);
    FD.append('jsonResponse', true);

    if (autolog.checked) {
      FD.append('autologin', true);
    } else {
      FD.append('autologin', false);
    }

    XHR.addEventListener("load", function(event) {
        var language = getCookie("language");
        var e = err_str["es_ES"];
        try {
            var response=JSON.parse(event.target.responseText);
            if (response.error) {
                if (language && language in err_str) {
                    e = err_str[language];
                }
                if (typeof response.error === 'string') {
                    if ( (response.error.indexOf("atabase") > 0) || (response.error.indexOf("aintenance") > 0) ) {
                        e = updt_str["es_ES"];
                        if (language && language in updt_str) {
                            e = updt_str[language];
                        }
                    }
                    if (response.error.indexOf("rowser") > 0) {
                        e = browser_str["es_ES"];
                        if (language && language in browser_str) {
                            e = browser_str[language];
                        }
                    }
                }
                error_message.innerHTML = e;
                error_message.classList.add("alert");
                error_message.classList.add("alert-info");
            } else if (!response.url) {
                e = con_str["es_ES"]
                if (language && language in con_str) {
                    e = con_str[language];
                }
                error_message.innerHTML = e;
                error_message.classList.add("alert");
                error_message.classList.add("alert-info");
            } else {
                window.location.replace(target + response.url + "&clientToken=" + static_uuid);
            }
        } catch(e) {
            e = con_str["es_ES"]
                if (language && language in con_str) {
                    e = con_str[language];
                }
                error_message.innerHTML = e;
                error_message.classList.add("alert");
                error_message.classList.add("alert-info");
        }
    });

    XHR.addEventListener("error", function(event) {
      var language = getCookie("language");
      var e = con_str["es_ES"];
      if (language && language in con_str) {
        e = con_str[language];
      }
      error_message.innerHTML = e;
      error_message.classList.add("alert");
      error_message.classList.add("alert-info");
    });

    XHR.open("POST", target + "/ajax/login?action=tokenLogin&authId=" + uuid());
    XHR.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
    if (typeof URLSearchParams === "undefined") {
      var url = [];
      var send_url = "";
      for (var i=0; i < form.elements.length; ++i) {
        if (form.elements[i].name != '') {
          var k =  encodeURIComponent(form.elements[i].name);
          k = k.replace(/%20/g, '+');
          var v =  encodeURIComponent(form.elements[i].value);
          v = v.replace(/%20/g, '+');
          url.push(k + '=' + v);
        }
      }
      url.push('clientToken' + '=' + static_uuid);
      url.push('jsonResponse' + '=' + 'true');
      if (autolog.checked) {
        url.push('autologin' + '=' + 'true');
      } else {
        url.push('autologin' + '=' + 'false');
      }

      send_url = url.join('&');
      XHR.send(send_url);
    } else {
      XHR.send(new URLSearchParams(FD));
    }
  }

  var form = document.getElementById("io-ox-login-form");
  var error_message = document.getElementById("io-ox-login-feedback");
  var autolog = document.getElementById('io-ox-login-store-box');

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendData();
  });
});
