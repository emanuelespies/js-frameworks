Carols.Router.map(function() {
	this.resource('carols', {path: '/'});
});

Carols.CarolsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('carol');
	}
});