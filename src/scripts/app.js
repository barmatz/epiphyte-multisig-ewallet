window.App = (function () {
    'use strict';

    return Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true,
        rootElement: '#ember-app',
        passphrase: new copay.Passphrase(),
        storage: new copay.LocalEncryptedStorage(),
        walletFactory: new copay.WalletFactory(),
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