    function currentTime() {
        var date = new Date();
        var hr = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();
        var ampm;
        var utchr = date.getUTCHours();
        var timeDiff;
        var adjTimeDiff;
        var timeZone;

        // Add 0 to single digits for seconds
        if (sec < 10) {
            sec = "0" + sec;
        }
        // Add 0 to single digits for minutes
        if (min < 10) {
            min = "0" + min;
        }

        // Determine AM or PM string
        if (hr == 12) {
            ampm = "PM";
        } else if (hr > 12) {
            hr -= 12;
            ampm = "PM";
        } else {
            ampm = "AM"; // set to AM
        }

        // Calculate time difference between GMT hour and local hour
        timeDiff = hr - utchr;

        // Convert time difference to positive if negative (adjusted time difference)
        if (timeDiff < 0) {
            adjTimeDiff = timeDiff + 24;
        } else {
            adjTimeDiff = timeDiff;
        }

        // Determine the time zone based on the adjusted time difference
        if (adjTimeDiff >= 16 && adjTimeDiff <= 18) {
            adjTimeDiff -= 24;
        }
        
        if (adjTimeDiff == -8) {
            timeZone = "PT";
        } else if (adjTimeDiff == -7) {
            timeZone = "MT";
        } else if (adjTimeDiff == -6) {
            timeZone = "CT";
        } else if (adjTimeDiff == -5) {
            timeZone = "ET";
        } else {
            // If time difference does not match typical time zone offsets, fallback to a default time zone.
            timeZone = "ET";  // Default to ET for safety
        }

        // Assemble time format to display
        var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
        // Display current local time and time zone on HTML elements
        document.getElementById("clock").innerText = time; // adding time
    }

    setInterval(currentTime, 1000); 

    // Initial run of time data function
    currentTime();

    var fileNames = [
        "partner-bustour.png",
        "partner-cabinrental.png",
        "partner-campingadv.png",
        "partner-collegetours.png",
        "partner-rentalbike.png",
        "partner-tourgroup.png"
    ];

    var altTexts = [
        "Partner Bus Tours",
        "Partner Cabin Rental",
        "Partner Camping Adventure",
        "Partner College Tours",
        "Partner Bike Rentals",
        "Partner Tour Group"
    ];

    // Base path for images
    var basePath = "image/partners/"; 

    // HTML structure for list items
    var openList = "<li class='partner'>";
    var closeList = "</li>";

    // Array to store the full HTML for each image
    var imageList = [];

    // Loop to generate the HTML for each partner image
    for (var i = 0; i < fileNames.length; i++) {
        var image = "<img src='" + basePath + fileNames[i] + "' alt='" + altTexts[i] + "'>";
        var listItem = openList + image + closeList;
        imageList.push(listItem);
    }

    // Insert the generated HTML into the DOM
    var partnersList = document.getElementById("partners"); 
    partnersList.innerHTML = imageList.join("");
