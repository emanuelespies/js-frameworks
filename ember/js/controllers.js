Carols.CarolController = Ember.ObjectController.extend({
	actions: {
		removeQuote: function() {
			var quote = this.get('model');
			quote.deleteRecord();
			quote.save();
		}
	}
});

Carols.CarolsController = Ember.ArrayController.extend({
	actions: {
		createNewQuote: function() {
			var newVal = this.get('newQuote');
			var quote = this.store.createRecord('carol', {
				val: newVal,
				completed: false
			});
			this.set('newQuote', '');
			quote.save();
		},

		clearCompleted: function() {
			var completed = this.filterBy('completed', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	}
});