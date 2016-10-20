angular.module('CarolDirectives', [])
	.directive('completeColor', function() {
		return {
			restrict: 'A',
			link: function(scope, element, attrs) {
				scope.$watch(attrs.completeColor, function(value) {
					element.css('border-color', (value ? '#ddd' : '#ccc'));
				});
			}
		}
});