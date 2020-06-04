'use strict';
const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
    start: function() {
        console.log("Starting node helper for: " + this.name);
        const scraper = require('./scrape.js');
        this.patch = scraper();
    },

    socketNotificationReceived: async function(notification, payload) {
        if (notification === "START") {
            const scraper = require('./scrape.js');
            const data = await scraper();
            this.sendSocketNotification("UPDATE_PATCH_NOTES", data);
        }
    },
});
