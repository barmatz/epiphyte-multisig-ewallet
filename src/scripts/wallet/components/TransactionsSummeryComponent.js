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