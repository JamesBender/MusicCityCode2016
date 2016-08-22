(function init() {
	function Person (firstName, lastName) {
		var this.firstName = firstName;
		this.lastName = lastName;
		document.writeln('created ' + firstName + ' ' + lastName + '<br/>');
	};

	Person.prototype.fullName = function () {
		document.writeln(this.lastName + ', ' + this.firstName + '<br/>');
	};


	var fred = new Person('Fred', 'Flinstone');
	var barney = new Person('Barney', 'Rubble');

	fred.fullName();
	barney.fullName();

})();