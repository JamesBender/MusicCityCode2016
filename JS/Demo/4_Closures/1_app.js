var value = 101;

(function init() {
    //setup
    
    var myObject = {
        value: 0,
        increment: function(inc){
            this.value += inc; 
        }
    };


    //method invocation

     myObject.increment(0);
     document.writeln("First increment: " + myObject.value + '<br\>');
     myObject.increment(1);
     document.writeln("Second increment: " + myObject.value + '<br\>');
     myObject.increment(1);
     document.writeln("Third increment: " + myObject.value + '<br\>');
     myObject.increment(1);
     document.writeln("Fourth increment: " + myObject.value + '<br\>');

     document.writeln("<br/>");
    //function invocation
    myObject.double = function() {
        
        var that = this;

        var helper = function() {
            that.value =  that.value + that.value;
            return that.value;
        };

        document.writeln('Value of "this" from function: ' + helper() + '<br/>');
    };

    myObject.double();
    document.writeln("Doubling: " + myObject.value);
})();