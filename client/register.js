Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var login = $('[name=login]').val();
		var password = $('[name=password]').val();
        Accounts.createUser({
			email: login,
			password: password
		}); 
    }
});