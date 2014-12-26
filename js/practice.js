/* Using console.log to write on the console and learning replace*/
var awesomeThoughts = "I am Javi and I am AWESOME";

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

console.log(awesomeThoughts);

console.log(funThoughts);

/* Creating String variables, replacing on another variable 
and manipulating the DOM with append and prepend*/
var name = "Javier Mateos";

var formattedName = HTMLheaderName.replace("%data%",name);

var role = "Online Marketing Specialist"

var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);

$("#header").prepend(formattedName);

/* Using slice to cut a String*/
var string1 = "audacity";
var string2 = string1.slice(1);

$("#header").prepend(string2);

/* Arrays - Structure, length, select one item from an array...
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array*/
var myArray = ["Javi", "estudiar", "udacity", "front-end ND"];
$("#header").append(myArray.length);
$("#header").append(myArray);
var newArray = myArray.push("elemento1", "elemento2");
$("#header").append(newArray);

/* Objects */
var bio = {
	"nombre" : "Xavi",
	"age" : 27,
	"rol" : role,
	"contact" : "j.mateos@adlpartner.es",
	"welcomeMessage" : "I'm Javi and I'm gonna kill u",
	"skills" : ["Master of the Universe", "Online MKT", "Front-End Developer"]
};

bio.twitter = "@jmateosr";

$("#main").prepend(bio.name);
$("#main").append(bio.age);
$("#main").append(bio.role);
$("#main").append(bio.contact);
$("#main").append(bio.WelcomeMessage);
$("#main").append(bio.skills.join("/"));
//we can use ["parameter"] instead .parameter when or paremeter has any special character
$("#main").append(bio["twitter"]);

/* JSON */
var education = {
	"studies" : [
	  {
		"university" : "Universidad Complutense de Madrid",
		"degree" : "Licenciatura en Comunicación Audiovisual",
		"city" : "Madrid",
		"country" : "Spain",
		"years" : "2001-2007",
		"tags" : ["cinema", "photography", "television", "marketing"]
	  },
	  {
		"university" : "Université de Liège",
		"degree" : "Arts du spectacle",
		"city" : "Liège",
		"country" : "Belgium",
		"years" : "2006-2007",
		"tags" : ["cinema", "photography", "documentary"]
	  }
	]
	"online courses" : [  
	  {
		"university" : "Udacity",
		"degree" : "Front-End Developer Nanodegree",
		"city" : "Madrid",
		"country" : "Spain",
		"years" : "2014-2015",
		"tags" : ["programmation", "front-end", "html", "css", "JavaScript"]
	  }
	]
}pra