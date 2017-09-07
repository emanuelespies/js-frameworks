/** @jsx React.DOM */

var app = app || {};

app.components = app.components || {};

(function() {
	'use strict';

	var CarolApp = app.components.CarolApp = React.createClass({
		render: function() { 
			return (
				<div className="outer-container">
					<NewQuote />
					<QuoteList />
					<ClearCompleted />
				</div>
			);
		}
	});

	var NewQuote = app.components.NewQuote = React.createClass({
		render: function() {
			return (
				<h1>New Quote</h1>
			);
		}
	});

	var QuoteList = app.components.QuoteList = React.createClass({
		render: function() {
			return (
				<h1>Quote List</h1>
			);
		}
	});

	var ClearCompleted = app.components.ClearCompleted = React.createClass({
		render: function() {
			return (
				<h1>Clear Completed</h1>
			);
		}
	});


})();