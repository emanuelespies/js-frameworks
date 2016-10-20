angular.module('CarolFilters', [])
	.filter('altCaps', function() {
		return function(input) {
			var charArray = input.split('');
			charArray = charArray.map(function(el, index) {
				return index !== 0 ? el.toLowerCase(el) : el.toUpperCase(el);
			});
			return charArray.join('');
		}
	});