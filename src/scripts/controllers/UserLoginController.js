(function () {
    'use strict';

    function submit(id, password, success, fail) {
        try {
            if (id && password) {
                App.passphrase.getBase64Async(password, function (passphrase) {
                    var wallet = App.wallets.open();

                    if (wallet) {
                        App.walletFactory.open(id, {passphrase: passphrase});
                        success();
                    }
                });
            } else {
                fail('Missing id and/or password');
            }
        } catch (error) {
            console.error(error);
            fail(error.message);
        }
    }

    App.UserLoginController = Ember.ObjectController.extend({
        needs: ['application'],
        auth: Ember.computed.alias('controllers.application.auth'),
        balance: 10000,
        loading: false,
        error: null,
        totalWallets: Ember.computed.alias('controllers.application.totalWallets'),
        password: null,
        actions: {
            submit: function () {
                var self = this;

                this.setProperties({
                    loading: true,
                    error: null
                });

                submit(this.get('totalWallets'), this.get('password'), function () {
                    self.setProperties({
                        loading: false,
                        auth: true
                    });
                    self.transitionToRoute('index');
                }, function (error) {
                    self.setProperties({
                        loading: false,
                        error: error
                    });
                });
            }
        }
    });
}());