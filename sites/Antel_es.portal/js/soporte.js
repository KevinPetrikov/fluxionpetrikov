function inicializar_componente_fortaleza_password(idPasswordContainer, idPasswordField, idPasswordFeedbackContainer) {
	var options = {};
	
    options.ui = {
        container: '#' + idPasswordContainer,
        verdicts: [
            "<span class='fa fa-exclamation-triangle'></span> D&eacute;bil",
            "<span class='fa fa-exclamation-triangle'></span> Normal",
            "Intermedia",
            "<span class='fa fa-thumbs-up'></span> Fuerte",
            "<span class='fa fa-thumbs-up'></span> Muy fuerte"
        ],
        showVerdictsInsideProgressBar: true,
        viewports: {
            progress: ".pwstrength_viewport_progress"
        }
    };
    
    options.common = {
        debug: false
    };
    
    options.rules = {
        activated: {
            wordTwoCharacterClasses: true,
            wordRepetitions: true
        }
    };
    
    /*$('#' + idPasswordField).pwstrength(options);
    
    $('#' + idPasswordField).keyup(function() {
		var passwordText = $(this).val();
		if (passwordText == '') {
			$('#' + idPasswordFeedbackContainer).hide();
		} else {
			$('#' + idPasswordFeedbackContainer).show();
		}
	});*/

    $("#" + idPasswordField).keyup(function() {
        var valPassword = $(this).val();

        if (!valPassword) {
            $("#complexity").hide();
        } else {
            var resp = zxcvbn(valPassword);

            $("#id-fortaleza-password").empty();

            if (resp.score === 0) {
                $("#id-fortaleza-password").append('<div class="progress"><div class="progress-bar progress-bar-danger" style="width: 20%;"><span class="password-verdict"><span class="fa fa-exclamation-triangle"></span> D&eacute;bil</span></div></div>');
            } else if (resp.score === 1) {
                $("#id-fortaleza-password").append('<div class="progress"><div class="progress-bar progress-bar-danger" style="width: 40%;"><span class="password-verdict"><span class="fa fa-exclamation-triangle"></span> Normal</span></div></div>');
            } else if (resp.score === 2) {
                $("#id-fortaleza-password").append('<div class="progress"><div class="progress-bar progress-bar-warning" style="width: 60%;"><span class="password-verdict"> Intermedia</span></div></div>');
            } else if (resp.score === 3) {
                $("#id-fortaleza-password").append('<div class="progress"><div class="progress-bar progress-bar-success" style="width: 80%;"><span class="password-verdict"><span class="fa fa-thumbs-up"></span> Fuerte</span></div></div>');
            } else if (resp.score === 4) {
                $("#id-fortaleza-password").append('<div class="progress"><div class="progress-bar progress-bar-success" style="width: 100%;"><span class="password-verdict"><span class="fa fa-thumbs-up"></span> Muy fuerte</span></div></div>');
            }

            $("#complexity").show();
        }
    });

//
}