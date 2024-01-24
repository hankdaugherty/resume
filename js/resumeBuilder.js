// Bio section content
const bio = {
    "name": "Hank Daugherty",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "302-584-6296",
        "email": "contact@hankdaugherty.com",
        "linkedin": "hankdaugherty",
        "github": "hankdaugherty",
        "location": "Washington, DC"
    },
    "welcome": "Innovative marketing professional with 5+ years of experience designing and leading successful campaigns in the non-profit/association sector. Specialties include front end development, digital and print design and inbound marketing.",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Wordpress", "Adobe Creative Cloud"],
    "bioPic": "images/hd.png"
};

// Work section content
const work = {
    "jobs": [{
        "title": "Manager, Digital Marketing",
        "employer": "Alliance for Telecommunications Industry Solutions",
        "dates": "Feb. 2016 - Present",
        "location": "Washington, DC",
        "url": "www.atis.org",
        "description": ["Built and launched association’s first blog, spotlighting our work on highly visible telecom issues for a non-technical audience", "Built subscriber base of 1,200 in nine months"]
	}, {
        "title": "Senior Manager, Marketing and Communications",
        "employer": "Visiting Nurse Associations of America",
        "dates": "May 2015 - Feb. 2016",
        "location": "Arlington, VA",
        "url": "vnaa.org",
        "description": ["Promoted to lead all marketing and public relations functions for the association", "Developed and executed on marketing plans", "Oversaw development and launch of association’s first learning management system"]
	}, {
        "title": "Manager, Web and Communications",
        "employer": "Visiting Nurse Associations of America",
        "dates": "Feb. 2013 - May 2015",
        "location": "Arlington, VA",
        "url": "vnaa.org",
        "description": ["Managed website, social media and email marketing for a national healthcare association", "Produced print and digital marketing collateral in support of association membership, events, webinars and publications"]
	}, {
        "title": "Associate",
        "employer": "JR Howell and Associates",
        "dates": "Dec. 2010 - May 2012",
        "location": "Washington, DC",
        "url": "",
        "description": ["Assisted in the representation of plaintiffs in consumer and civil rights litigation", "Recruited, trained and managed law student interns"]

	}, {
        "title": "Manager, Volunteer Operations (Americorps VISTA)",
        "employer": "Communities in Schools of the Nation's Capital",
        "dates": "Aug. 2009 - Aug. 2010",
        "location": "Washington, DC",
        "url": "cisnationscapital.org/",
        "description": ["Recruited, trained and managed volunteers for school-based tutoring and mentoring programs at public schools throughout the District"]
	}]
};

// Education section content
const education = {
    "schools": [{
        "name": "Washington and Lee University",
        "datesAttended": "2004 - 2007",
        "location": "Lexington, VA",
        "degree": "J.D.",
        "url": "https://law.wlu.edu"
	}, {
        "name": "University of Delaware",
        "datesAttended": "2000 - 2004",
        "location": "Newark, DE",
        "degree": "B.A.",
        "major": "English",
        "url": "https://www.udel.edu"
	}],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Object-Oriented Javascript",
        "completed": "March 2016",
        "url": "https://www.udacity.com/course/object-oriented-javascript--ud015"
	}, {
        "school": "Udacity",
        "title": "Intro to jQuery",
        "completed": "February 2016",
        "url": "https://www.udacity.com/course/intro-to-jquery--ud245"
	}, {
        "school": "Udacity",
        "title": "Javascript Basics",
        "completed": "February 2016",
        "url": "https://www.udacity.com/course/javascript-basics--ud804"
	}, {
        "school": "Udacity",
        "title": "Configuring Linux Web Servers",
        "completed": "February 2016",
        "url": "https://www.udacity.com/course/configuring-linux-web-servers--ud299"
	}]
};

// Function to display bio and skills section
const displayBio = () => {
    const formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    const formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
    $("#headline").prepend(`${HTMLheaderName.replace("%data%", bio.name)}${HTMLheaderRole.replace("%data%", bio.role)}`);
    
    // Contact Info
    $(HTMLemail.replace("%data%", bio.contacts.email)).appendTo("#topContacts, #footerContacts");
    $(HTMLlinkedin.replace("%data%", bio.contacts.linkedin)).appendTo("#topContacts, #footerContacts");
    $(HTMLgithub.replace("%data%", bio.contacts.github)).appendTo("#topContacts, #footerContacts");
    $(HTMLlocation.replace("%data%", bio.contacts.location)).appendTo("#topContacts, #footerContacts");

    $("#bio").append(formattedBioPic);
    $("#bio").append(HTMLbioText);
    $("#bio-text").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#bio-text").append(HTMLskillsList);
        bio.skills.forEach(skill => {
            $("#skills").append(HTMLskills.replace("%data%", skill));
        });
    }
};

// Function to display work section
const displayWork = () => {
    if (work.jobs.length > 0) {
        work.jobs.forEach(job => {
            $("#workExperience").append(HTMLworkStart);

            const formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer).replace("#", `http://${job.url}`);
            const formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
            const formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            const formattedDatesWorked = HTMLworkDates.replace("%data%", job.dates);

            $(".work-entry:last").append(`${formattedEmployer}${formattedWorkTitle}`);
            $(".work-entry:last").append(formattedDatesWorked);
            $(".work-entry:last").append(formattedWorkLocation);

            if (job.description.length > 0) {
                $(".work-entry:last").append(HTMLworkDescriptionList);
                job.description.forEach(description => {
                    $(".description:last").append(HTMLworkDescription.replace("%data%", description));
                });
            }
        });
    }
};

// Function to display education section
const displayEducation = () => {
    if (education.schools.length > 0) {
        education.schools.forEach(program => {
            $("#education").append(HTMLschoolStart);

            const formattedSchoolName = HTMLschoolName.replace("%data%", program.name).replace("#", `http://${program.url}`);
            const formattedSchoolDegree = HTMLschoolDegree.replace("%data%", program.degree);
            const formattedSchoolDates = HTMLschoolDates.replace("%data%", program.datesAttended);
            const formattedSchoolLocation = HTMLschoolLocation.replace("%data%", program.location);
            const formattedSchoolMajor = program.major ? HTMLschoolMajor.replace("%data%", program.major) : '';

            $(".education-entry:last").append(`${formattedSchoolName}${formattedSchoolDegree}`);
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            if (formattedSchoolMajor) {
                $(".education-entry:last").append(formattedSchoolMajor);
            }
        });
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
        education.onlineCourses.forEach(course => {
            $("#education").append(HTMLschoolStart);

            const formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            const formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
            const formattedOnlineDates = HTMLonlineDates.replace("%data%", course.completed);
            const formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);

            $(".education-entry:last").append(`${formattedOnlineTitle}${formattedOnlineSchool}`);
            $(".education-entry:last").append(formattedOnlineDates);
            // $(".education-entry:last").append(formattedOnlineURL); // Uncomment if needed
        });
    }
};

// Execute functions to add content to resume
displayBio();
displayWork();
displayEducation();

// Add map to resume
$("#mapDiv").append(googleMap);
