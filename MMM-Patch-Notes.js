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
		this.patch = {
			gameTitle: "",
			version: "",
			body: ""
		}
	},

	getStyles: function() {
		return ["MMM-Patch-Notes.css"]
	},

	getDom: function() {
		const wrapper = document.createElement("div");
		wrapper.id = "patchNotesContainer";

		const gameTitle = document.createElement("h1");
		gameTitle.id = "gameTitle";
		gameTitle.innerHTML = this.patch.gameTitle;
		wrapper.appendChild(gameTitle);

		const version = document.createElement("h2");
		version.id = "patchVersion";
		version.innerHTML = this.patch.version;
		wrapper.appendChild(version);

		const body = document.createElement("p");
		body.id = "patchBody";
		body.innerHTML = this.patch.body;
		wrapper.appendChild(body);

		return wrapper;
	},

    socketNotificationReceived: function(notification, payload) {
		if (notification === "UPDATE_PATCH_NOTES") {
			this.patch = payload;
			this.updateDom(1000);
		}
    }
});
