(function () {
    'use strict';

    App.UserLoginRoute = Ember.Route.extend({
        beforeModel: function () {
            if (this.controllerFor('application').get('auth')) {
                this.transitionTo('index');
            }
        }
    });
}());