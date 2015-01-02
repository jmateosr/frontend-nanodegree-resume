var role = "Online Marketing Specialist";

var bio = {
	"aboutMe":
	  {
		"name" : "Javier Mateos",
		"age" : "27",
		"picture" : "http://placehold.it/250x250"
	  },
	"contacts" :
	  {
		"email" : "j.mateos@adlpartner.es",
		"linkedin" : "http://es.linkedin.com/in/jmateosr",
		"location" : "Madrid"
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
	"schools" : [
	  {
		"school" : "Universidad Complutense de Madrid",
		"degree" : "Licenciatura en Comunicación Audiovisual",
		"location" : "Madrid",
		"country" : "Spain",
		"years" : "2001-2007",
		"tags" : ["cinema", "photography", "television", "marketing"]
	  },
	  {
		"school" : "Université de Liège",
		"degree" : "Arts du spectacle",
		"location" : "Liège",
		"country" : "Belgium",
		"years" : "2006-2007",
		"tags" : ["cinema", "photography", "documentary"]
	  },
	  {
		"school" : "Test",
		"degree" : "Testing",
		"location" : "Los Angeles, CA",
		"country" : "USA",
		"years" : "2014-2015",
		"tags" : ["programmation", "front-end", "html", "css", "JavaScript"]
	  }
	],
	"online courses" :  
	  {
		"school" : "Udacity",
		"degree" : "Front-End Developer Nanodegree",
		"location" : "Madrid",
		"country" : "Spain",
		"years" : "2014-2015",
		"tags" : ["programmation", "front-end", "html", "css", "JavaScript"]
	  }
}

var work = {
	  "jobs": [
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
}

var projects = [
	  {
		"title" : "Project 1",
		"dates" : "2010-2011",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mauris ac erat porta molestie. Aenean molestie, enim ac pulvinar hendrerit, nisl erat varius dui, ac sagittis orci libero a tortor. Ut sit amet dapibus ante. Aliquam facilisis mattis laoreet.",
		"image" : "http://placehold.it/350x350"
	  },
	  {
		"title" : "Project 2",
		"dates" : "2011-2012",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mauris ac erat porta molestie. Aenean molestie, enim ac pulvinar hendrerit, nisl erat varius dui, ac sagittis orci libero a tortor. Ut sit amet dapibus ante. Aliquam facilisis mattis laoreet.",
		"image" : "http://placehold.it/350x350"
	  },
	  {
		"title" : "Project 3",
		"dates" : "2012-2013",
		"description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis mauris ac erat porta molestie. Aenean molestie, enim ac pulvinar hendrerit, nisl erat varius dui, ac sagittis orci libero a tortor. Ut sit amet dapibus ante. Aliquam facilisis mattis laoreet.",
		"image" : "http://placehold.it/350x350"
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

if(bio.aboutMe.picture !==0){
	var formattedPicture = HTMLbioPic.replace("%data%",bio.aboutMe.picture);
    $("#header").append(formattedPicture);
}

if(bio.welcomeMessage !==0){
	var formattedWelcome = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
    $("#header").append(formattedWelcome);
}

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
    $("#skills:last").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
    $("#skills:last").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
    $("#skills:last").append(formattedSkill);

    console.log("You're a skilled man, madafaka!")       
}

function displayStudies(){
	for(courses in education.schools){
		$("#education").append(HTMLschoolStart);

	    var formattedSchool = HTMLschoolName.replace("%data%",education.schools[courses].school);
	    $(".education-entry:last").append(formattedSchool);

	    var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[courses].degree);
	    $(".education-entry:last").append(formattedDegree);

	    var formattedSchoolDate = HTMLschoolDates.replace("%data%",education.schools[courses].years);
	    $(".education-entry:last").append(formattedSchoolDate);

	    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[courses].location);
	    $(".education-entry:last").append(formattedSchoolLocation);
	}
}

displayStudies();

function displayWork(){
	for(works in work.jobs){
		$("#workExperience").append(HTMLworkStart);

	    var formattedJobEmployer = HTMLworkEmployer.replace("%data%",work.jobs[works].employer);
	    var formattedJobEmployerURL = formattedJobEmployer.replace("#",work.jobs[works].URL);
	    var formattedJobTitle = HTMLworkTitle.replace("%data%",work.jobs[works].title);
	    var employerTitle = formattedJobEmployerURL + formattedJobTitle;
	    $(".work-entry:last").append(employerTitle);

	    var formattedJobStart = HTMLworkStart.replace("%data%",work.jobs[works].start);
	    $(".work-entry:last").append(formattedJobStart);

	    var formattedJobDates = HTMLworkDates.replace("%data%",work.jobs[works].dates);
	    $(".work-entry:last").append(formattedJobDates);

	    var formattedJobLocation = HTMLworkLocation.replace("%data%",work.jobs[works].location + " - " + work.jobs[works].country);
	    $(".work-entry:last").append(formattedJobLocation);

	    var formattedJobDescription = HTMLworkDescription.replace("%data%",work.jobs[works].description);
	    $(".work-entry:last").append(formattedJobDescription);

	    console.log("You have some works too!")
	}
}

displayWork();

//To log events (position of a click). It will take the logClicks function created on helper.js
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name_obj) {
    var nameString = name_obj;
    var nameArray = nameString.trim().split(" ");

    var name = nameArray[0].toLowerCase();
    var subname = nameArray[1];

	var nameCapitalize = name.replace(name.charAt(0), name.charAt(0).toUpperCase());
	var subnameCapitalize = subname.toUpperCase();

	var nameInternationalized = nameCapitalize + " " + subnameCapitalize;

    return nameInternationalized;
}

$("#main").append(internationalizeButton);

display = function() {
	for(projs in projects){
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[projs].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[projs].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescr = HTMLprojectDescription.replace("%data%", projects[projs].description);
		$(".project-entry:last").append(formattedProjectDescr);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects[projs].image);
		$(".project-entry:last").append(formattedProjectImage);
	}
}

display();

$("#mapDiv").append(googleMap);