'use strict';
const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node helper for: " + this.name);
    },

    socketNotificationReceived: function(notification, payload) {
        if (notification === "START") {
            this.sendSocketNotification("UPDATE_PATCH_NOTES", {
                gameTitle: "Overwatch",
                version: "1.4.5",
                body: "blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"
            });
        }
    },
});
