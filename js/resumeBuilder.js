var name = "Gabor Gellai",
    role = "Web Developer",
    formattedName = HTMLheaderName.replace("%data%", name),
    formattedRole = HTMLheaderRole.replace("%data%", role);

$("#main").prepend(formattedName + " " + formattedRole);
