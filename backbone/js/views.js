window.QuoteView = Backbone.View.extend({
	template: _.template('<span class="input-group-addon"><input <%= completed ? "checked=checked" : "" %> type="checkbox"></span><input value="<%= val %>" class="form-control<%= completed ? " finished" : "" %>" type="text"><span class="input-group-btn"><button class="btn btn-danger" type="button"><i class="glyphicon glyphicon-remove"></i></button></span>'),
	events: {
		'change input[type=checkbox]' : 'toggle',
		'change .form-control' : 'update',
		'click .btn-danger' : 'remove'
	},
	initialize: function(){
		this.model.on('change', this.render, this);
	},
	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	className: 'input-group input-group-lg'
});

window.QuotesView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this);
		this.collection.on('destroy', this.render, this);
	},
	addOne: function(quoteItem) {
		var quoteView = new QuoteView({model: quoteItem});
		this.$el.append(quoteView.render().el);
	},
	addAll: function() {
		this.$el.empty();
		this.collection.forEach(this.addOne, this);
	},
	render: function() {
		this.addAll();
		return this;
	}
});