(function () {
    'use strict';

    App.WalletRoute = Ember.Route.extend({
        beforeModel: function () {
            if (!this.controllerFor('application').get('auth')) {
                this.transitionTo('user.login');
            }
        },
        model: function () {
            var balanceValue = this.controllerFor('application').get('balanceValue') || 0;

            return new Ember.RSVP.Promise(function (resolve) {
                resolve({
                    name: 'Yaron',
                    balanceValue: 1000 + (balanceValue + parseFloat((Math.random() * 10000).toFixed(2))),
                    transactions: [
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'},
                        {id: 1, date: new Date(), amount: App.formatCurrency(1000), sender: 'Yaron', recipient: 'Or'}
                    ]
                });
            });
        },
        actions: {
            refresh: function () {
                this.refresh();
            }
        }
    });
}());