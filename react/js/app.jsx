/** @jsx React.DOM */

var app = app || {};

(function() {
	'use strict';

	app.init = function() {
		var CarolApp = app.components.CarolApp;
		React.renderComponent(
			<CarolApp />,
			document.getElementById('app')
		)
	};

	app.init();

})();