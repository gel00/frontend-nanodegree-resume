var bio = {
    "name": "Gabor Gellai",
    "role": "Web developer",
    "contacts": {
        "mobile": "+36 (70) 9429348",
        "email": "gellaigabor@gmail.com",
        "github": "gel00",
        "twitter": "@ssgel00",
        "location": "Szeghalom"
    },
    "bioPic": "images/me.jpg",
    "welcomeMessage": "Hello!",
    "skills": ["programing", "HTML", "CSS", "JS"]
};

var work = {
    "jobs": [{
        "employer": "Dravit Hungary",
        "title": "Marketing Assistant",
        "location": "Gyoma",
        "dates": "May 2007 - July 2007",
        "description": "Building basic portfolio site. Creating company logo, forms, business cards and managing their printing. System admininistrator tasks."
    }, {
        "employer": "Martin Kuijpers",
        "title": "Gardener",
        "location": "Elsendorp, Netherlands",
        "dates": "May 2008 - July 2008",
        "description": "mowing grass, weeding, laying paving, foliage pruning"
    }, {
        "employer": "Transaliance",
        "title": "Operator",
        "location": "Szeghalom",
        "dates": "Jan 2013 - July 2013",
        "description": "I coodinated a fleet, that contained 50 trucks. I had to calculate their routs depands on several variables, like working hours, ferry timetables or traffic jams."
    }]
};

var projects = {
    "jobs" : [{
        "title": "Relax Futár",
        "dates": 2015,
        "description": "I created a modern portfolio page for a masseur.",
        "images": [
            "images/projects/relax/p_RF_1.jpg", "images/projects/relax/p_RF_2.jpg", "images/projects/relax/p_RF_3.jpg"
    ]}]
};

var education = [{
    "schools": [{
        "name": "Univercity of Szeged",
        "location": "Szeged",
        "degree": "BA",
        "dates": "2009-2012",
        "majors": "Media Informatics",
        "url": "http://www.u-szeged.hu/"
    }]
}, {
    "onlineCourses": [{
        "title": "Front End Developer",
        "school": "Udacity",
        "dates": "Aug 2016 - Nov 2016",
        "url": "https://www.udacity.com/"
    }]
}];


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header")
    .prepend(formattedRole)
    .prepend(formattedName);
if(bio.skills.length) {
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(
        function(skill){
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        }
    );
}
if(work.jobs.length) {
    work.jobs.forEach(
        function(job){
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", job.description);

            $(".work-entry:last").append(
                formattedEmployer +
                formattedWorkTitle +
                formattedWorkLocation +
                formattedWorkDates +
                formattedWorkDescription);
        }
    );
}


$("#topContacts")
    .prepend(formattedMobile)
    .prepend(formattedEmail)
    .prepend(formattedGitHub)
    .prepend(formattedTwitter)
    .prepend(formattedLocation)
    .after(formattedBioPic)
    .after(formattedWelcomeMsg);

function inName(str) {
    var names = str.trim().split(" ");
    var formattedName = "";
    names.forEach(function(name, i){
        if (i) {
            formattedName += " " + name.toUpperCase();
        } else {
            formattedName += name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        }
    });
    return formattedName;
}

projects.display = function(){
    this.jobs.forEach(
        function(job){
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", job.title);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", job.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", job.description);
            var formattedProjectImages = "";
            job.images.forEach(function(image){
                formattedProjectImages += HTMLprojectImage.replace("%data%", image);
            });

            $(".project-entry:last").append(
                formattedProjectTitle +
                formattedProjectDates +
                formattedProjectDescription+
                formattedProjectImages);
        }
    );
}
projects.display();
