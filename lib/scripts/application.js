/*!
 * epiphyte-multisig-ewallet
 * A multi-signature e-wallet for Epiphyte
 * Version 0.1.0
 * Compiled Sunday, June 15th, 2014, 1:43:50 PM
 */

window.App = (function () {
    'use strict';

    return Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true,
        rootElement: '#ember-app',
        formatCurrency: function (value) {
            var isNegative = false;
         
            if (value < 0) {
                isNegative = true;
                value = Math.abs(value);
            }
            return (isNegative ? '-' : '') + parseFloat(value, 10).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').toString();
        }
    });
}());
(function () {
    'use strict';

    App.IndexRoute = Ember.Route.extend({
        beforeModel: function () {
            this.transitionTo('wallet');
        }
    });
}());
(function () {
    'use strict';

    App.Router.map(function () {
        this.resource('user', function () {
            this.route('create');
            this.route('login');
            this.route('logout');
            this.route('forgot');
        });
        this.resource('wallet', function () {
            this.route('buy');
            this.route('receive');
            this.route('send');
        });
    });
}());
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
(function () {
    'use strict';

    App.UserLogoutRoute = Ember.Route.extend({
        beforeModel: function () {
            this.controllerFor('application').set('auth', false);
            this.transitionTo('user.login');
        }
    });
}());
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
(function () {
    'use strict';

    App.FooterView = Ember.View.extend({
        templateName: 'footer'
    });
}());
(function () {
    'use strict';

    App.HeaderView = Ember.View.extend({
        templateName: 'header'
    });
}());
(function () {
    'use strict';

    App.WalletRevieceView = Ember.View.extend({
        classNames: ['funds wallet-receive']
    });
}());
(function () {
    'use strict';

    App.TransactionsSummeryComponent = Ember.Component.extend({
        classNames: ['panel'],
        classNameBindings: ['statusClassName'],
        status: null,
        statusClassName: function () {
            switch (this.get('status')) {
                default:
                    return 'panel-default';
            }
        }.property('status')
    });
}());