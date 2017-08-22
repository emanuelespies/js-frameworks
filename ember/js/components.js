Carols.CarolEntryComponent = Ember.Component.extend({ // similar with angular directives
	actions: {
		click: function() {
			this.sendAction('remove');
		}	
	}
});