Template.login.events({
    'submit form': function(event) {
        event.preventDefault();
        var loginVar = $('[name=login]').val();
        var passwordVar = $('[name=password]').val();
        Meteor.loginWithPassword(loginlVar, passwordVar);
        console.log("Form submitted.");
    }
});

