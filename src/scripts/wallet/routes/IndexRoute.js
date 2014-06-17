(function () {
    'use strict';

    App.IndexRoute = Ember.Route.extend({
        beforeModel: function () {
            this.transitionTo('wallet');
        }
    });
}());