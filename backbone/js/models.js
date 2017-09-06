window.QuoteItem = Backbone.Model.extend({
	toggle: function() {
		this.set('completed', !this.get('completed'));
	},
	update: function(text) {
		this.set('val', text);
	}
});

window.QuoteItems = Backbone.Collection.extend({
	model: QuoteItem, 
	initialize: function() {
		this.on('destroy', this.removeElement, this);
	},
	removeElement: function(model) {
		this.remove(model);
	},
	filterCompleted: function() {
		this.remove(this.filter(function(quote) {
			return quote.get('completed');
		}));
	}
});