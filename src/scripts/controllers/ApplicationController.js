(function () {
    'use strict';

    App.ApplicationController = Ember.ObjectController.extend({
        auth: false,
        name: null,
        balanceValue: null,
        formattedBalanceValue: function () {
            return App.formatCurrency(this.get('balanceValue'));
        }.property('balanceValue')
    });
}());