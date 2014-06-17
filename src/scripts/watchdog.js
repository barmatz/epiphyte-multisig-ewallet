window.App = (function () {
    'use strict';

    return Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_TRANSITIONS_INTERNAL: true,
        rootElement: '#ember-app'
    });
}());