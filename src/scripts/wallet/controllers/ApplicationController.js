(function () {
    'use strict';

    App.ApplicationController = Ember.ObjectController.extend({
        auth: false,
        name: null,
        balanceValue: null,
        wallets: [],
        totalWallets: function () {
            return this.get('wallets.length');
        }.property('wallets.[]'),
        socket: io('http://test.insight.is:80', {
            reconnection: true,
            reconnectionDelay: 500
        }),
        formattedBalanceValue: function () {
            return App.formatCurrency(this.get('balanceValue'));
        }.property('balanceValue')
    });
}());