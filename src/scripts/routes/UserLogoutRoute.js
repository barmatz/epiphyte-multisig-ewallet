(function () {
    'use strict';

    App.UserLogoutRoute = Ember.Route.extend({
        beforeModel: function () {
            this.controllerFor('application').set('auth', false);
            this.transitionTo('user.login');
        }
    });
}());