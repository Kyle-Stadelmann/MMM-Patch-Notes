'use strict';
const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node helper for: " + this.name);
    },

	notificationReceived: function(notification, payload, sender) {
	},

    socketNotificationReceived: function(notification, payload) {
    },
});
