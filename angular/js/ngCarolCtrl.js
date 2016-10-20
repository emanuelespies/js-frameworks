ngCarol.controller('NgCarolCtrl', function NgCarolCtrl($scope) {
	$scope.quotes = [
		{ val: "What a strange girl you are", 						completed: true},
		{ val: "Flung out of space.", 								completed: true},
		{ val: "Carol. I miss you. I miss you",						completed: true},
		{ val: "Invite me 'round", 									completed: true},
		{ val: "Just when you think it can't get any worse", 		completed: false},
		{ val: "You run out of cigarettes", 						completed: false},
		{ val: "I should've have said: Therese.. wait", 			completed: true}
	];

	$scope.addNewQuote = function() {
		$scope.quotes.unshift({ completed: false, val: $scope.newQuote});
		$scope.newQuote = '';
	};

	$scope.clearCompleted = function() {
		$scope.quotes = $scope.quotes.filter(function(el, index) {
			return !el.completed;
		});
	};

	$scope.removeQuote = function(index) {
		//quotes.splice($index, 1)
		$scope.quotes.splice(index, 1);
	};
});