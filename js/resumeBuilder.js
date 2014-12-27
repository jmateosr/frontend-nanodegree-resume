var role = "Online Marketing Specialist";

var bio = {
	"aboutMe":
	  {
		"name" : "Javier Mateos",
		"age" : "27"
	  },
	"contacts" :
	  {
		"email" : "j.mateos@adlpartner.es",
		"linkedin" : "http://es.linkedin.com/in/jmateosr"
	  },
	"welcomeMessage" : "I'm Javi and I'm gonna kill u",
	"skills" : [
		"Master of the Universe", 
		"Online MKT", 
		"Front-End Developer"
	  ]
}

bio.aboutMe.rol = role;
bio.contacts.twitter = "@jmateosr";

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
	],
	"online courses" :  
	  {
		"university" : "Udacity",
		"degree" : "Front-End Developer Nanodegree",
		"city" : "Madrid",
		"country" : "Spain",
		"years" : "2014-2015",
		"tags" : ["programmation", "front-end", "html", "css", "JavaScript"]
	  }
}

var jobs = [
	  {
		"employer" : "Raúl Bielsa",
		"title" : "ADL Partner",
		"URL" : "http://www.adlpartner.es",
		"location" : "Madrid",
		"country" : "Spain",
		"start" : "2013",		
		"dates" : "May 2013 - actually",
		"description" : "Online Marketing Specialist / Project Manager"
	  },
	  {
		"employer" : "Javier Mateos",
		"title" : "Cactus Servicios Audiovisuales",
		"URL" : "mailto:javiertdr@gmail.com",
		"location" : "Madrid",
		"country" : "Spain",
		"start" : "2012",		
		"dates" : "April 2012 - April 2013",
		"description" : "Executive Producer"
	  },
	  {
		"employer" : "Tania Balastegui",
		"title" : "Tiempo de Rodar",
		"URL" : "http://www.tiempoderodar.com",
		"location" : "Madrid",
		"country" : "Spain",
		"start" : "2011",
		"dates" : "September 2010 - April 2013",
		"description" : "Production Coordinator"
	  }
]

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

    console.log("You're a skilled man, madafaka!")       
}

for(works in jobs){
	$("#workExperience").append(HTMLworkStart);

    var formattedJobEmployer = HTMLworkEmployer.replace("%data%",jobs[works].employer);
    var formattedJobEmployerURL = formattedJobEmployer.replace("#",jobs[works].URL);
    var formattedJobTitle = HTMLworkTitle.replace("%data%",jobs[works].title);
    var employerTitle = formattedJobEmployerURL + formattedJobTitle;

    var formattedJobStart = HTMLworkStart.replace("%data%",jobs[works].dates);
    
    var formattedJobDates = HTMLworkDates.replace("%data%",jobs[works].dates);

    var formattedJobLocation = HTMLworkLocation.replace("%data%",jobs[works].location + " - " + jobs[works].country);
    
    var formattedJobDescription = HTMLworkDescription.replace("%data%",jobs[works].description);

    $(".work-entry:last").append(employerTitle);
    $(".work-entry:last").append(formattedJobStart);
    $(".work-entry:last").append(formattedJobDates);
    $(".work-entry:last").append(formattedJobLocation);
    $(".work-entry:last").append(formattedJobDescription);

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';


    console.log("You have some works too!")
}