(function init() {
    //Apply invocation
    var applyObj = {
        factor: 10
    };

    var complexAdd = function(x, y) {
        return (x + y) * this.factor;
    };
                
    var result = complexAdd(2,5);

    //var result = complexAdd.apply(applyObj, [2,5]);
    
    document.writeln('apply result: ' + result);

 

    document.writeln("<hr/>");
 
   //Closure over loops/block scope
    var messages = [];

    for (var i = 0; i < 5; i++){
        messages[i] = function() {
            return "Message #" + i;
        };
    };

    for (var j = 0; j < 5; j++){
        document.writeln(messages[j]());
        document.writeln("<br/>");
    };



    document.writeln('<hr/>');


    function buildFunction(idx){
        return function() {
            return 'Message #' + idx;
        };
    };

    for (var i = 0; i < 5; i++){
        messages[i] = buildFunction(i);
    };

    for (var i = 0; i < 5; i++){
        document.writeln(messages[i]());
        document.writeln("<br/>");
    }


})();