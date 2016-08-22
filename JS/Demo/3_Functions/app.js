(function init() {
    //functionDeclarations();
    //parameterLists();
    functionsAsValues();    
})();

function functionDeclarations() {

    foo("Foo called");
    //bar("Bar called");

    function foo(message){
        document.getElementById('foo').innerHTML = message;
    };

    var bar = function(message){
        document.getElementById('bar').innerHTML = message;
    };

   //bar("bar");
}




function parameterLists() {

    function tooFew(a, b, c, d) {
        document.getElementById('tooFewA').innerHTML = a;
        document.getElementById('tooFewB').innerHTML = b;
        document.getElementById('tooFewC').innerHTML = c;
        document.getElementById('tooFewD').innerHTML = d;
    }

    function tooMany(a) {
        document.getElementById('tooManyA').innerHTML = a;
        document.getElementById('tooMany0').innerHTML = arguments[0];
        document.getElementById('tooMany1').innerHTML = arguments[1];
    }

    tooFew(1, "a parameter!");
    tooMany(1, "a parameter!");

}

function functionsAsValues() {

    var englishGreeting = function(name) {
        return "Hi " + name + "!";
    };

    var frenchGreeting = function(name) {
        return "Bonjour " + name + "!";
    };

    var spanishGreeting = function(name){
        return "Hola " + name + "!";
    }

    function sayHello(name, typeOfGreeting, element) {
        var greeting = typeOfGreeting(name);
        element.innerHTML = greeting;
    };

    sayHello('James', englishGreeting, document.getElementById('english'));
    sayHello('James', frenchGreeting, document.getElementById('french'));
    sayHello('James', spanishGreeting, document.getElementById('spanish'));
}

