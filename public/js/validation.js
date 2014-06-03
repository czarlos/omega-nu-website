$('form').validate({
	rules: {
		first_name: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		last_name: {
			minlength: 3,
			maxlength: 15,
			required: true
		},
		github_handle: {
			minlength: 2,
			maxlength: 15,
			required: true
		},
		email: {
			minlength: 3,
			maxlength: 15,
			email: true,
			required: true
		},
		website: {
			minlength: 6,
			maxlength: 15,
			url: true
		},
		linkedin: {
			minlength: 6,
			maxlength: 15,
			url: true 
		}
	},
	highlight: function(element) {
		$(element).closest('.form-group').addClass('has-error');
	},
	unhighlight: function(element) {
		$(element).closest('.form-group').removeClass('has-error');
	},
	errorElement: 'span',
	errorClass: 'has-error',
	errorPlacement: function(error, element) {
		if(element.parent('.input-group').length) {
			error.insertAfter(element.parent());
		} else {
			error.insertAfter(element);
		}
	}
});
