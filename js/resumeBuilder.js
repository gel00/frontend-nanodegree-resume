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

var prfojects = [{
    "title": "Relax Futár",
    "dates": 2015,
    "description": "I created a modern portfolio page for a massager.",
    "images": [
        "images/projects/relax/p_RF_1.jpg", "images/projects/relax/p_RF_2.jpg", "images/projects/relax/p_RF_3.jpg"
    ]
}];

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

$("#topContacts")
    .prepend(formattedMobile)
    .prepend(formattedEmail)
    .prepend(formattedGitHub)
    .prepend(formattedTwitter)
    .prepend(formattedLocation)
    .after(formattedBioPic)
    .after(formattedWelcomeMsg);

$("#workExperience")
    .append(formattedPosition);
