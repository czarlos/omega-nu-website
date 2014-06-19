$('#login').qtip({
    content: {
		text: 'Loading...',
		ajax: {
			url: 'login.html',
			type: 'GET',
			data: {}
		}
    },
    position: {
        my: 'center',
        at: 'center',
        target: $(document.body)
    },
	style: {
		classes: 'qtip-dark qtip-rounded qtip-shadow'
	},
    show: {
        modal: {
            on: true
        },
		event: 'click'
    }
});
