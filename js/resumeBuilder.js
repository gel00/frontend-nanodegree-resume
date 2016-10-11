var formattedName = "Gabor Gellai",
    formattedRole = "Web Developer";
HTMLheaderName = HTMLheaderName.replace("%data%", formattedName);
HTMLheaderRole = HTMLheaderRole.replace("%data%", formattedRole);
$("#main").prepend(HTMLheaderName + " " + HTMLheaderRole);
