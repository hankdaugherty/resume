// Bio section content
const bio = {
    "name": "Hank Daugherty",
    "role": "Front-end Developer",
    "contacts": {
        "mobile": "302-584-6296",
        "email": "hello@hankdaugherty.com",
        "linkedin": "hankdaugherty",
        "github": "hankdaugherty",
        "location": "Washington, DC"
    },
    "welcome": "Senior Manager with over 10 years of experience in web development, IT operations, and digital marketing. Specialized in using WordPress, Amazon Web Services (AWS), and front-end technologies to develop and optimize web infrastructure, ensuring user-friendly and efficient web solutions. Proficient in collaborating with diverse teams to manage large-scale web projects, with a keen focus on streamlining processes, reducing costs, and enhancing efficiency. Demonstrated expertise in digital marketing and SEO, coupled with a strong ability in multimedia design using Adobe Creative Suite. Proficient in HTML, CSS, JavaScript, jQuery, PHP, and MySQL, committed to delivering high-quality work and driving continuous improvement in dynamic web environments.",
    "skills": ["HTML", "CSS", "Javascript", "jQuery", "Bootstrap", "Wordpress", "Adobe Creative Cloud"],
    "bioPic": "images/hank.jpg"
};

// Work section content
const work = {
    "jobs": [{
        "title": "Senior Manager, Web and IT",
        "employer": "Alliance for Telecommunications Industry Solutions",
        "dates": "March 2018 - Present",
        "location": "Washington, DC",
        "url": "www.atis.org",
        "description": ["Modernized the company's web infrastructure by implementing Amazon Web Services (AWS) to host company websites on EC2 instances, maintain DNS through Route 53, and store files on S3, ensuring maximum performance and security while reducing annual hosting expenses by 90%.", "Led the transition of our company's website from an ASP Classic platform to a WordPress environment, involving decision-making on site structure, theme selection, and custom plugin integration. Worked closely with external vendors to ensure seamless data migration and retention of crucial site features. The upgraded site delivered enhanced user experience, streamlined content management, and incorporated responsive design principles for optimal viewing across devices. This project not only improved the company's online presence but also reduced overall site maintenance time and costs.", "Developed and managed the complete project life cycle for the implementation of new database and filing systems on part68.org and imsiadmin.com, resources of significance in the telecommunications industry. Built on an AWS EC2 hosted WordPress platform, each project featured a custom-designed theme and specially developed PHP plugins. These systems facilitated secure and efficient submission, payment (integrated via Stripe), and public searching of entries. To enhance user experience, branching forms were implemented to guide users through the complex filing process. The new systems not only heighten system performance and improved user experience, but also cut operational costs significantly.", "Continuously sought opportunities to improve the company's web infrastructure and digital processes, leading to significant enhancements like the implementation of Microsoft Teams for remote collaboration, and the migration of the company's file system to Microsoft SharePoint.", "Concurrently managed multiple tech-related projects, including the upgrade of the company's phone system from landline to VOIP."]
	}, {
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

            // Append employer and title with a "|" symbol between them
            $(".work-entry:last").append(`${formattedEmployer} | ${formattedWorkTitle}`);
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
