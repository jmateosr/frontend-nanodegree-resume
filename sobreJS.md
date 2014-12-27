## Adding Elements to an HTML
Para añadir elementos mediante JS a un html, en el JS habría que usar el comando .append()

$(“#header”).append(“Hello world!”)

También puedes poner .prepend para ponerlo justo antes. Si por ejemplo tenemos un div llamado A con varios elementos divs interiores llamados B y C, si ponemos append, este nuevo campo se pondrá bajo C, si ponemos prepend se pondrá justo encima de B, es decir, al inicio de div A.


## Calculando con JS
Como otros lenguajes de programación, JavaScript incluye operadores aritméticos.
+ suma
- substracción
* multiplicación
/ división
( y ) control de precedencia de operaciones
En la introducción a las ciencias de la computación, Dave Evans te reto a usar Python para convertir la velocidad de la luz de metros/segundo a centímetro/segundo. Veamos si puedes realizar el mismo calculo usando JavaScript en la consola del navegador. Aquí hay unos cuantos numeros que necesitaras:
velocidad de la luz = 299792458 metros/segundo
1 metro = 100 centímetros
1 nanosegundo = 1.0/1000000000 segundos
Que tan rápido es la luz en centímetro/nanosegundo? Click "Continue to quiz" cuando tengas la respuesta.


## VARIABLES
Para almacenar variables hay que añadir var delante del nombre de la variable:
var nombre = “Javi”;
var edad = 27;
var array = [ ];
var function(){};
var object {};


## PARA CORTAR/HACER MAYÚSCULAS
The way I solved it is with a mix of using indicies, the string.toUpperCase() method and thestring.slice() method.
Here's my code:
var s = "audacity";
s = s[1].toUpperCase() + s.slice(2);
Let's break it down.
s[1]
First, I want the "U" to be uppercase, so I use the index of the "U", which is 1, to grab it with brackets. JavaScript lets us use brackets to select one character of a string (and later, you'll see that you can do the same with an array).
s[1].toUpperCase()
.toUpperCase() is a string method, meaning it acts on the string it's attached to, which in this case is the "U" from s[1].
At this point, s[1].toUpperCase() is equal to "U".
+
The + concatenates, or adds together, strings. For instance "Hello " + "JS students!" will result in"Hello JS students!".
s.slice(2)
.slice() is another string method, which acts on the string s in this case. .slice(start, [end])will grab the part of the string from the index of start to the index of end. The fact that [end]shows up in brackets means that it's optional. If it isn't there, then .slice() will select all of the string from start to the very end of the string. s.slice(2) gives us "dacity".
Concatenated together, we get "Udacity"!


## TRUTHY AND FALSY
There are only six falsy values in JavaScript so it is easiest to memorize those:
	•	false
	•	0 (zero)
	•	"" (empty string)
	•	null
	•	undefined
	•	NaN
You can learn more about some of the quirks of truthy and falsy here.

What is NaN? NaN, or Not a Number, is a value that turns up when we ask Javascript to do certain impossible things in arithmetic -- like divide zero by zero.
Try it in the console -- and see if you can find the other two special numeric values, Infinity and -Infinity.
One last note: at 1:25, Cameron mentions that undefined means "that a variable doesn't exist and the interpreter doesn't know what you're referring to." This isn't quite true. If you try to use a var that hasn't been defined, you get a ReferenceError. You will see undefined if you declare a variable but don't assign it any values. Like so:
var a;
a;
will result in undefined. But
b;
will result in a ReferenceError because b hasn't been declared yet.


## OBJECTS
There are no classes on JS, there are only objects!
var myObj = {};


## JSON
JavaScript Object Notation. JSON is a popular and simple format for storing and transferring nested or hierarchal data. It's so popular that most other programming languages have libraries capable of parsing and writing JSON (like Python's JSON library). Internet GET and POST requests frequently pass data in JSON format. JSON allows for objects (or data of other types) to be easily encapsulated within other objects. See the MDN or JSON.org for more details.

This is a fantastic deep dive from Jason Lengstorf about JSON and its ubiquitous use in the form of AJAX requests.

Why should I lint my JSON?

With a mix of nested curly braces, square brackets and commas, it's easy to make mistakes with JSON. And mistakes mean bugs. Seriously, I mess up JSONs all the time. You might even be able to spot a bug in one of my JSONs in a video in this course...

If you're generating JSON by hand, you should copy and paste your code into a JSON linter like jsonlint.com to quickly and easily find syntax errors. A linter is a piece of software that analyzes code for syntax errors. Some text editors, like Sublime Text, will automatically lint (or highlight) most syntax errors. But a JSON linter won't miss any syntax errors and you can rest assured that your JSONs will be properly formatted.

## DOM
This course isn't about HTML and CSS but they keep showing up. Why is that? HTML, CSS and JavaScript are the three components that make almost every website. As part of the process of building websites, browsers convert all of the HTML they receive into a JavaScript object called the Document Object Model (DOM).

In fact, from the console, you can examine the DOM for any website (including this one!). By examining the DOM, you can learn pretty much everything about a website.

We can find an element of the DOM by searching its class typing 

document.getElementsByClassName("%%name_of_the_class")[0]

This will show up that element and, for example, we can find out the height of that element if we create a var of that element:

var element = document.getElementsByClassName("%%name_of_the_class")[0];

and then asking for its Height/Width:

console.log(element.clientHeight);
console.log(element.clientWeight);

If the resume you're building doesn't have data in a certain section, like Education, the empty section is automatically hidden. At the bottom of index.html, you'll find a few lines of JavaScript that follow this pattern:

if (document.getElementsByClassName("education-entry").length === 0) {
    document.getElementById("education").style.display = "none";
}
After we break down the way this code works, I'm going to challenge you to modify these scripts to turn empty resume sections black instead of making them disappear.

PROJECT: Hidding sections with JS

While we're adding sections to the resume using jQuery, these scripts are using regular JavaScript to hide them.

First off, there's an if statement. You'll be learning about if statement syntax in the next lesson. Suffice it so say, we'll be executing the code that comes between the curly braces if a resume section is empty. In this example, the education section is empty so we execute document.getElementById("education").style.display = "none";

  document

document refers to the web page in its current state. You may have heard of the DOM, which contains all of the information about a website's visible elements. document is the DOM. We need to change the DOM if we want to add or remove page elements.

  getElementById("education")

getElementById(id) is a DOM manipulation method that will grab a single page element object with the id given. Notice how the word Element is singular in the method name. That means it returns a single page element. Other DOM methods containing Elements, like getElementsByClassName(), will return an array of page elements.

In this example, we've grabbed the entire education section of the resume. In the HTML, this is everything inside <div id="education">

  .style

.style is a DOM property. It is used to change a CSS style of the selected page element. The property that follows .style is the CSS style that will be modified by this piece of code. Here's a list of all the possible CSS properties you can change.

  .display = "none"

Every page element has a display CSS property, which normally controls how that page element interacts with others. If display is set to "none", however, then the element is removed entirely from the page.


## CSS Properties
Since we can modify the DOM of a website using JS, we can assume that we can also set some styles to the HTML. We can use then the CSS Properties, using its DOM notation, needed to be accessed from JS.

i.e. we can modify the background color by using the css property: background-color: #000; Using it with JS, the property will be backgroundColor = '#000';

Here are some CSS Properties References with its equivalents of the DOM notation.
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference


## Dot vs Bracket Notation
Bracket notation always works. Dot notation requires properties that begin with a letter and do not include special characters.

Let's go through these one-by-one:

	property

dot notation: true
bracket notation: true

This one is normal. Either syntax is fine.

	"property1"

dot notation: true
bracket notation: true

A number attached to the end of a property is acceptable for dot and bracket notation.

	"property-2"

dot notation: false
bracket notation: true

Some special characters like the - are not acceptable with dot notation but will still work with bracket notation.

	"property 3"

dot notation: false
bracket notation: true

Spaces are generally bad form in programming. Don't use them except within strings. But you can still access a property name with a space using bracket notation.

	"property$"

dot notation: true
bracket notation: true

Surprisingly, you actually can use $ within property names and still access them with dot notation.

	" property"

dot notation: false
bracket notation: true

In dot notation, the space actually gets ignored, so you are accessing "property" instead. But bracket notation still works.

	"property()"

dot notation: false
bracket notation: true

Without quotes, property() is a function call. This is just plain bad. While you can access a property like this one with bracket notation, there's no reason you should ever include () within an object property.

	"property[]"

dot notation: false
bracket notation: true

Like the last one, this is bad form too. [] already have a specific purpose in JavaScript and should never be used within a property.

	"8property"

dot notation: false
bracket notation: true

Dot notation fails to work if the property starts with a number. This is also bad form. Properties should never start with numbers.


## IF conditions
Sometimes we need to meet some conditions to get some actions at our DOM. That's why if conditions exists:

	if(bio.skills.length > 0) {
	    $("#header").append(HTMLskillsStart);

	    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	    $("#skills").append(formattedSkill);
	    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	    $("#skills").append(formattedSkill);       
	} else {
		$("#header").append("There are no Skills!!");
	}

## LOOPS
This is a JS tools to execute multiple times one action without having to repeat typing the code itself. That's why Loops exists.

WHILE LOOP:
It lets us repeat a piece of code so long as some conditions evaluates to true.

	while(condition){
		doSomething();
	}

We can limit this loop, for example on 10 times	

	var limit = 0;
	var condition = "Condition 1";

	while(condition === "Condition 1"){
		doSomething();
		limit = limit + 1;
		if(limit === 10) {
			condition = "Condition 2";
		}
	}

FOR LOOP:

	for(initialization;condition;mutator){
		doSomething();
	}

	i.e.
	for(var i=0; i<9; i++){
		console.log(i);
	}

FOR IN LOOP
It easily iterate through arrays or objects
	
	for(item in object/array){
		doSomething();
	}

	i.e.

	var countries = ["Germany", "Argentina", "Brazil", "Netherlands"];
	for(country in countries){
		console.log(countries[country]);
	}

	i.e.

	for(works in jobs){
		$("#workExperience").append(HTMLworkStart);

	    var formattedJobEmployer = HTMLworkEmployer.replace("%data%",jobs[works].employer);
	    var formattedJobEmployerURL = formattedJobEmployer.replace("#",jobs[works].URL);
	    var formattedJobTitle = HTMLworkTitle.replace("%data%",jobs[works].title);
	    var employerTitle = [formattedJobEmployerURL, formattedJobTitle];
	    $("#workExperience").append(employerTitle.join(""));

	    console.log("You have some works too!")
	}