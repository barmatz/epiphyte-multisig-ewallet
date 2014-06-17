window.Copay = (function () {
    'use strict';

    var WalletFactory = require('./js/models/core/WalletFactory'),
    args = {
        Passphrase: require('../js/models/core/Passphrase'),
        WalletFactory: WalletFactory
    };

    WalletFactory.Storage = require('./mocks/FakeStorage');
    WalletFactory.Network = require('../js/models/network/WebRTC');
    WalletFactory.Blockchain = require('../js/models/blockchain/Insight');

    return Ember.Namespace.create(args);
}());
