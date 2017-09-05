window.CarolApp = new (Backbone.Router.extend({
	routes: { '': 'index' }, 
	initialize: function() {
		this.quoteItems = new QuoteItems();
		this.quotesView = new QuotesView({collection: this.quoteItems});
		this.quotesView.render();
	},
	index: function() {
		var fixtures = [
			{ val: "What a strange girl you are", 						completed: true},
			{ val: "Flung out of space.", 								completed: true},
			{ val: "Carol. I miss you. I miss you",						completed: true},
			{ val: "Invite me 'round", 									completed: true},
			{ val: "Just when you think it can't get any worse", 		completed: false},
			{ val: "You run out of cigarettes", 						completed: false},
			{ val: "I should've have said: Therese.. wait", 			completed: true}
		];

		$('#app').html(this.quotesView.el);
		this.quoteItems.reset(fixtures);
	},
	start: function(){
		Backbone.history.start();
	}
}));