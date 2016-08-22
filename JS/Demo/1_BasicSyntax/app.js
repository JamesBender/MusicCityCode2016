(function init() {

    //hoisting
    x = 'Hello';
///    document.writeln(x + '<br/>');

    var x;

    //this wont work
    var a = "peas";
    var b = 'carrots';

   // document.writeln(a + ' and ' + b + '<hr/>');


    //dates are weird
    myDate = new Date(2016, 11, 25);

    //document.writeln('My date - ' + myDate);





    //var
    function varUsage () {
        document.writeln('<h2>Using var</h2>')
        var value = 5;

        if (true) {
            var value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside look, value is " + value + "<br/>");
    };

    varUsage();

    document.writeln('<br/>');
    //let
    function letUsage () {
        document.writeln('<h2>Using let</h2>')
        let value = 5;

        if (true) {
            let value = 10;
            document.writeln("inside block, value is " + value + "<br/>");
        }

        document.writeln("outside look, value is " + value + "<br/>");
    };

   letUsage();
  
})();