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
