/* jshint strict: false */
/* global enyo: false */
/* global ToDo: false */
/* global Backbone: false */
enyo.ready(function () {
	ToDo.TaskModel = Backbone.Model.extend({
		defaults: {
			title: '',
			completed: false
		}
	});
});