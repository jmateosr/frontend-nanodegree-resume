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