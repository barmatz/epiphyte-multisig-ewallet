(function () {
    'use strict';

    App.UserLoginController = Ember.ObjectController.extend({
        needs: ['application'],
        auth: Ember.computed.alias('controllers.application.auth'),
        balance: 10000,
        actions: {
            submit: function () {
                this.set('auth', true);
                this.transitionToRoute('index');
            }
        }
    });
}());