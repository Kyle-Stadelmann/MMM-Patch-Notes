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
		this.patch = null;
	},

	getStyles: function() {
		return ["MMM-Patch-Notes.css"]
	},

	getDom: function() {
		const wrapper = document.createElement("div");
		wrapper.id = "patchNotesContainer";

		if (this.patch) {
			const gameTitle = document.createElement("h2");
			gameTitle.id = "gameTitle";
			gameTitle.innerHTML = this.patch.gameTitle;
			wrapper.appendChild(gameTitle);

			const version = document.createElement("h2");
			version.id = "patchVersion";
			version.innerHTML = this.patch.date + ' - ' + this.patch.version;
			wrapper.appendChild(version);

			const img = document.createElement("IMG");
			img.id = "gameImage";
			img.setAttribute('src', this.patch.img);
			img.setAttribute("width", "150");
			img.setAttribute("height", "150");
			wrapper.appendChild(img);

			const description = document.createElement("h3");
			description.id = "moduleDescription";
			description.innerHTML = '(Latest patch)';
			wrapper.appendChild(description);

			const body = document.createElement("div");
			body.id = "patchBody";
			body.innerHTML = this.patch.body;
			wrapper.appendChild(body);
		}

		return wrapper;
	},

    socketNotificationReceived: function(notification, payload) {
		if (notification === "UPDATE_PATCH_NOTES") {
			this.patch = payload;
			this.updateDom(1000);
		}
    }
});
