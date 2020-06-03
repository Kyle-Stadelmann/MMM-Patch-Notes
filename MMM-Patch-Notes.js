/* global Module */

/* Magic Mirror
 * Module: MMM-Patch-Notes
 *
 * By Kyle Stadelmann and Gary Chew
 */

Module.register('MMM-Patch-Notes',
{
	defaults:
	{
    },

	start: function()
	{
		Log.info('Starting module: ' + this.name);
		this.sendSocketNotification('START', this.config);
	},

	getStyles: function() {
		return ["MMM-Patch-Notes.css"]
	},

	getDom: function() {
		const wrapper = document.createElement("div");
		const hello = document.createElement("p");
		hello.innerHTML = "Hello World.";
		wrapper.appendChild(hello);
		return wrapper;
	},

	notificationReceived: function(notification, payload, sender) {
    },

    socketNotificationReceived: function(notification, payload) {

    }
});
