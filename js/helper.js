// Define HTML string variables using const
const HTMLheaderName = '<h1 id="name">%data%</h1>';
const HTMLheaderRole = '<span id="role" class="primary-text"> %data%</span><hr>';
const HTMLcontactGeneric = '<li class="flex-item"><span class="pale-text">%contact%</span><span class="primary-text">%data%</span></li>';
const HTMLmobile = '<li class="flex-item"><span class="pale-text">mobile</span><span class="primary-text"> %data%</span></li>';
const HTMLemail = '<li class="flex-item"><span class="pale-text">email</span><span class="primary-text"> %data%</span></li>';
const HTMLtwitter = '<li class="flex-item"><span class="pale-text">twitter</span><span class="primary-text"> %data%</span></li>';
const HTMLgithub = '<li class="flex-item"><span class="pale-text">github</span><span class="primary-text"> <a href="https://github.com/%data%" target="_blank">%data%</a></span></li>';
const HTMLlinkedin = '<li class="flex-item"><span class="pale-text">linkedin</span><span class="primary-text"><a href="https://www.linkedin.com/in/%data%" target="_blank">%data%</a></span></li>';
const HTMLblog = '<li class="flex-item"><span class="pale-text">blog </span><span class="primary-text">%data%</span></li>';
const HTMLlocation = '<li class="flex-item"><span class="pale-text">location </span><span class="primary-text">%data%</span></li>';

const HTMLbioPic = '<div class="col-sm-3 col-md-2"><img src="%data%" class="biopic invisible-sm visible-md"></div>';
const HTMLbioText = '<div id="bio-text" class="col-xs-12 col-sm-9 col-md-10"></div>';
const HTMLwelcomeMsg = '<div id="welcome-message">%data%</div>';

const HTMLskillsList = '<div id="skills"><span class="pale-text skill-label">Technical Skills: </span>';
const HTMLskills = '<span class="skill gray-bg">%data%</span></div>';

const HTMLworkStart = '<div class="work-entry"></div>';
const HTMLworkEmployer = '<div><a href="#" target="_blank">%data%</a>';
const HTMLworkTitle = '<span class="position">%data%</span></div>';
const HTMLworkDates = '<div class="gray-text">%data%</div>';
const HTMLworkLocation = '<span class="pull-right gray-text">%data%</span>';
const HTMLworkDescriptionList = '<ul class="description"></ul>';
const HTMLworkDescription = '<li>%data%</li>';

const HTMLprojectStart = '<div class="project-entry"></div>';
const HTMLprojectTitle = '<a href="#">%data%</a>';
const HTMLprojectDates = '<div class="date-text">%data%</div>';
const HTMLprojectDescription = '<p><br>%data%</p>';
const HTMLprojectImage = '<img src="%data%">';

const HTMLschoolStart = '<div class="education-entry"></div>';
const HTMLschoolName = '<div><a href="#" target="_blank">%data%</a>';
const HTMLschoolDegree = '<span class="position">%data%</span></div>';
const HTMLschoolDates = '<div class="gray-text">%data%</div>';
const HTMLschoolLocation = '<div class="pull-right gray-text">%data%</div></div>';
const HTMLschoolMajor = '%data%';

const HTMLonlineClasses = '<h3>Online Courses</h3>';
const HTMLonlineTitle = '<div><a href="#" target="_blank">%data%</a>';
const HTMLonlineSchool = '<div class="pull-right gray-text">%data%</div></div>';
const HTMLonlineDates = '<div class="gray-text">%data%</div>';
const HTMLonlineURL = '<br><a href="#">%data%</a>';

const internationalizeButton = '<button>Internationalize</button>';
const googleMap = '<div id="map"></div>';

// Ready function for internationalization button
$(document).ready(function () {
    $('button').click(function () {
        const iName = inName() || function () {};
        $('#name').html(iName);
    });
});

// Array for click locations
let clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({ x, y });
    console.log(`x location: ${x}; y location: ${y}`);
}

$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});

// Declare map variable
let map;

function initializeMap() {
    let locations;

    const mapOptions = {
        scrollwheel: false,
        disableDefaultUI: true
    };

    map = new google.maps.Map(document.querySelector('#map'), mapOptions);

    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(map, marker);
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0])
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {
            // New sections to check if locations[place] exists
            // This keeps google maps from breaking if a location field is empty.
            if (!locations[place])
                continue;

            // the search request object
            var request = {
                query: locations[place]
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        }
    }

    // Sets the boundaries of the map based on pin locations

    window.mapBounds = new google.maps.LatLngBounds();

    locations = locationFinder();
    pinPoster(locations);
}

window.addEventListener('load', initializeMap);
window.addEventListener('resize', function () {
    map.fitBounds(mapBounds);
});
