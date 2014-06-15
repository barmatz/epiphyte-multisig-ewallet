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