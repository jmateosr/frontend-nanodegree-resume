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
var myArray = ["Javi", "front-end ND", "udacity", "estudiar"];
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
}

/* Replacing Elements */
//MY CODE:
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    
    var quitMinus = /</gi;
    var quitMore = />/gi;
    var quittedMinus = _html.replace(quitMinus, "&lt;");   
    newHTML = quittedMinus.replace(quitMore, "&gt;");
    // Don't delete this line!
    return newHTML;
};

console.log(charEscape(html));

// The Udacity Solution
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};

/* WHILE, FOR, FOR IN LOOPS*/
if(bio.aboutMe.name.length !== 0) {
	var formattedName = HTMLheaderName.replace("%data%",bio.aboutMe.name);
    $("#header").append(formattedName);
}

if(role.length !== 0) {
	var formattedRole = HTMLheaderRole.replace("%data%",role);
    $("#header").append(formattedRole);
}

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills").append(formattedSkill);
    console.log("You're an skilled man, madafaka!")       
}

/* RETURN STATEMENTS QUIZ */
/*Write a function called locationizer(work_obj). It must take in the work object.
locationizer(work_obj) must return an array of the locations in work. You might 
find you need to use the array method .push() toadd values to the array.*/

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

// Your code goes here! Let me help you get started

function locationizer(work_obj) {
    var business = work_obj;
    var locationsArray = [];
    
    for (var i = 0; i <= business.jobs.length-1; i++){
        locationsArray.push(business.jobs[i].location);
    }
    
    return locationsArray;
}
// Did locationizer() work? This line will tell you!
console.log(locationizer(work));

//The Udacity Solution
function locationizer(work_obj) {
    var locationsArray = [];
    
    for (job in work_obj.jobs){
        var newLocation = work_obj.jobs[job].location;
        locationsArray.push(newLocation);
    }
    
    return locationsArray;
}


// PROBLEM SET 2 : GET RELATIONSHIPS
function getRelationShip(x,y){
	var variableX = x;
	var variableY = y;

	if(isNaN(variableX) && isNaN(variableY)){
		return("Can't compare relationships because " + variableX + " and " + variableY + " are not numbers");
	}else if(isNaN(variableX)){
		return("Can't compare relationships because " + variableX + " is not a number");
	}else if(isNaN(variableY)){
		return("Can't compare relationships because " + variableY + " is not a number");
	}else if(variableX < variableY){
		return("<");
	}else if(variableX === variableY){
		return("=");
	}else if(variableX > variableY){
		return(">");
	}
};

var rel = getRelationShip(3,"Hola");
console.log(rel);

// PROBLEM SET 2 : ASTRONAUTS DIRECTIONS
/*You'll notice that these names are listed in the order that they first stepped on the Moon, not alphabetical order. To alphabetize them, it would make sense to write their names as lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, which takes in a names array (of length N) containing strings of names and returns an alphabetized array of names in lastname, firstname format.*/

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
/*    for(var i=0; i<names.length; i++){
    	names[i].slice(names[i].indexOf(" "));
    }*/

    names = names.toString(", ");
    names = names.tosplit(" ");
    return names;
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));

// PROBLEM SET 2 : Pagespeed Insights DIRECTIONSGoogle's PageSpeed Insights (PSI) scores websites on their speed. A perfect score is 100 and the worst score is 0. Alongside the score, PSI provides relevant advice for improvements.

/*By integrating an automated PSI score into a suite of front-end unit tests, you can periodically check a website's overall speed.

Let's assume you're building the front-end testing framework and you make a call to the PSI API. You receive the JSON below as a response.

Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults object and returns the total number of bytes to load the website.

Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames in ruleResults and returns an array of their strings.*/

var psiResults;

psiResults = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
   "AvoidBadRequests": {
    "localizedRuleName": "Avoid bad requests",
    "ruleImpact": 0.0
   },
   ...
   "MinifyJavaScript": {
    "localizedRuleName": "Minify JavaScript",
    "ruleImpact": 0.1417,
    "urlBlocks": [
     {
      "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
      },
      "urls": [
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       ...
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   ...
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}