var checkForTruthy = function(a) {
if(a) {
return true;
};
return false;
};

var checkForSuperTruthy = function(a, b) {
if(a == b) {
return true;
};
return false;
};

var checkForSuperDuperTruthy = function(a, b) {
if(a === b) {
return true;
};
return false;
};

var  tooFew = function(a, b, c, d) {
        console.log("a: " + a);
        console.log("b: " + b);
        console.log("c: " + c);
        console.log("d: " + d);        
    }



var  tooMany = function(a) {
        console.log("a from argument: " + a);
        console.log("argument[0]: " + arguments[0]);
        console.log("argument[1]: " + arguments[1]);        
    }


    var englishGreeting = function(name) {
        return "Hi " + name + "!";
    };

    var frenchGreeting = function(name) {
        return "Bonjour " + name + "!";
    };

    var spanishGreeting = function(name){
        return "Hola " + name + "!";
    }

    function sayHello(name, typeOfGreeting){
        var greeting = typeOfGreeting(name);
        console.log(greeting);
    };

    sayHello('James', englishGreeting);
    sayHello('James', frenchGreeting);
    sayHello('James', spanishGreeting);
