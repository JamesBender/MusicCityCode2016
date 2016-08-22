# MusicCityCode2016
Slides/demos from all of my Music City Code 2016 talks

Don't forget to checkout [IgniteUI](http://www.igniteUI.com) and [follow me on Twitter](www.twitter.com/JamesBender)



## JavaScript is Not a Dirty Word
In the folder 4_Closures you should find 2_app.js and 2.html. In the js file there are two more examples of closers and how JavaScript treats the value of "this" based on the context of where it's called from (i.e. this is whoever my "caller" is).

The first example (lines 2 thru 15 of the 2_app.js file) demonstrates a situation where there is no caller. In this case the complexAdd method is attempting to access this.factor. Remember, then a method has no caller (not part of an object) then it is is assigned to the global scope. Since there is no value "factor" in the global scope the call on line 11 returns NaN (not a number).

By contrast, lets look at the call on line 13. In this example we are using the "apply" method of complexAdd (remember, in JavaScript EVERYTHING is an object, even functions). The apply method takes two parameters; the first one is the value that we want to be bound to "this" for that call of the method. In this case, I'm binding the value of "this" for the call in line 13 to an object called applyObj that I define on line three. When the call to complexAdd.apply on line 13 is called, the applyObj is bound to "this" and the method returns 70.

The code from line 21 through 53 show an example of some issues you might run into with JavaScript closures when used in loops. Looking at the for loop (lines 24-28) the expectation is that you will populate an array with a series of strings that have the current index as part of the string (i.e. Message # 1, Message # 2, etc.). When you uncomment lines 31 & 32 and run the code you'll see that JavaScript appears to do what we expect it to do. But does it really?

Let's test this. Notice that the for loops on lines 24 and 30. Notice that each are declaring the variable "i" to use as an index value. Let's change the variable name for the loop on line 30 with "j" (remember to also change the array accessor value on line 31). Now load the page again. You'll see that our JavaScript isn't really doing what we think it is.

Look closely at what's happening in the loop on line 24. We're not setting a specific string value, we're setting a function call where we are passing in "i" as the parameter. The functions are not executed at this time. When JavaScript stores calls to functions like this it does not store the value of the parameter at the time and as the value is still bound to the value in the loop, when the function finally does get executed, the value at the time of execution is five. Obviously, this is not the way .NET and Java work, and can be a bit confusing to new JavaScript developers.

We need to create a new closure or scope for our function to execute in.

Uncomment the code on lines from 40 through 53. 

On line 40 I've created a function called buildFunction that takes a parameter, and constructs a string using the value of the parameter passed in. The loop on line 46 is very similar to the loop in the previous example, but in this case I' using the buildFunction function to create my array element; NOT a nested anonymous function. The fact that buildFunction is created external to our loop means that it has it's own closure, and so it creates the expected result (Message # 1, Message #2, etc.)

The last example covers how JavaScript implements inheritance and objects.

In the 5_ObjectsAndInheritance folder you should find the files app.js and index.html. 

The first thing I want to draw your attention to is line two of the app.js file. You'll see a declaration of a function called Person. This is very similar to the functions we looked at in the session, but this is actually what's called a constructor method and has a few differences. The first is the name. You'll notice that it starts with a capital "P" and not a lower case letter like the other methods we worked with. This is a recognized convention among JavaScript developers as there is no other way to identify constructor methods from conventional methods. To designate something as being a constructor method, we start it with a capital letter. This is not enforced by the language, it is just a practice that has been adopted by JavaScript developers.

The other thing you might notice is that on lines three and four I'm using the "this" accessor. I can do this because (as I've pointed out) everything in JavaScript, is an object. This includes functions. Skipping ahead a moment to lines 13 & 14 and you can see that we can use this Person constructor method to create new objects. Constructor methods provide a way to create objects with starting data in JavaScript similar to the way you would in .NET or Java. One distinction between JavaScript and those platforms however is that that values I'm assigning to "this" in Person are NOT considered private. In JavaScript these is no private object scope. Having said that, you can use JavaScripts closure rules to create a similar effect. This technique is explained in the Douglas Crockford book "JavaScript: The Good Parts"

JavaScript uses Prototypical Inheritance. This is different from Classical Inheritance, which is used in .NET and Java. A full explanation of Prototypical Inheritance is explained in the Douglas Crockford book mentioned above. In JavaScript, each object has a prototype, which is shared among all objects of that type. On line eight you can see that to add a value or function to the object by adding it to their prototype. This makes the function of value available to all object based on that prototype.

## Build Better ASP.NET Applications with AngualrJS

I'm not sure why my local web server died in the middle of the demo, but I rebooted the VM and all seems to be fine now. If you run into problems, please drop me an email at James@JamesCBender.com and let me know.

We left off with a demo about using HTML forms in Angular. You can find the controller in Scripts\3FormController.js and the view in Views\Home\SimpleForm.cshtml. In the view, you can see on line 9 an HTML form. My declaration is a little different than what you might be used to seeing. Normally an HTML form has an "href" and "action" with the href containing the "destination" of the form (usually a web address) and the REST action for the form (either GET or POST). My Angular form does not have either.

In the HTML form declaration, I am binding the form to "FormController" using the "ng-controller" directive. This works exactly the same way that our previous controllers work. I also have used the "ng-sumit" directive and assigned it to a method called Save. Looking at the controller, you can see that I have a method called Save bound to $scope. In Angular, you (generally speaking) don't want HTML forms execute GET or POST traditional, as it generally results in a new page load and defeats the purpose of using a SPA (Single Page Application). When a submit action is called on the form, the method bound to ng-submit (in this case Save) is executed and no page redirect occurs. The idea is that the JavaScript in your method will use elements of the Angular framework (usually $http or NG-Resource) to execute whatever is need on their server side and the client side will handle redirecting the user to a new state (view). 

In this example I've also added the "ng-change" directive to an input field (line 15). This is bound to a method on the controller and demonstrates how to capture data change events in input fields. There are many other Angular directives like this, check out the Angular docs. for a list of all of them.

The next example shows an easy way to access web services with Angular. You can find the controller in Scripts\4SerivceController.js and the view in Views\Home\WithServices.cshtml. You will also want to check out the HomeController as well.

The view shows a simple HTML form that is bound to a controller called SerivcesController that has two buttons. One button is bound to the "retrieve" method and the other to the "save" method on the ServicesController.

Let's take a look at the controller. On line one you can see that we are using the same $scope service that we've been using all along, but this time we are also using a service called $http. $http is the basic Angular HTTP services framework. There are others that are available (I used NG Resource in the last example I showed at Music City Code) but these are all add-ins to Angular. Most of these provide better or easier to use functionality than $http, but you will always have access to $http as it's part of Angular.

In the controller we can see the save method which starts on line 11. On line 12 I am calling the "post" method on the $http service. POST is HTTP verb that specifies that the caller is sending a resource to be saved on the server. The first parameter is the URI of the REST endpoint we want to send the data to. In this case, I have a method called "SavePerson" on the Home controller that is setup to accepts posts and take JSON data. The second argument is the data I want to send to be saved, in this case the user field on $scope. 

When working with web services, JavaScript does so asynchronously. This means that JavaScript sends the request and then continues on with execution until the response is received. This is a feature of the language and not of Angular. There are a few different ways that JavaScript can handle asynchronous calls, and a full discussion is beyond the scope of this presentation, so I'm going to stick to the way they are handled in Angular.

The call to post (and get on line 22) return whats called a promise. A promise is essentially a token that we can use determine how to proceed with execution when our service returns a response. In this case, I am using the promises "success" method (line 13) to provide a call back function to handle the response it it includes an HTTP status message in the 200 family (meaning success). For the save method, I'm popping up a JavaScript alert box to notify the user that the save succeeded. In the success handler for the get method (line 23) I am using the data field from the response to populate my form via the use field on the $scope service. In addition to the success method, promises also expose an error handler, which I am using on line 16.

## Level-Up Your Test-Fu with BDD and SpecFlow

Thanks to everyone who came to this talk. I know last minute fill-in talks can be tough, and I appreciate you taking your time to come see me show you BDD and SpecFlow. Please feel free to reach out if you have any questions/comments concerns.
