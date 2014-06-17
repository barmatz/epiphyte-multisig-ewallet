(function () {
    'use strict';

    App.WalletController = Ember.ObjectController.extend({
        needs: ['application'],
        applicationPropertyChanges: function () {
            this.set('controllers.application.name', this.get('name'));
            this.set('controllers.application.balanceValue', this.get('balanceValue'));
        }.observes('name', 'balanceValue')
    });
}());