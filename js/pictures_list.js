var pictures = [
    {
        name: "Grad Nite 2015", folder: "grad nite 2015", id: "grad-nite-2015",
        pics: ["image1.jpeg", "image2.jpeg", "image7.jpeg", "image5.jpeg", "image3.jpeg",
            "image4.jpeg", "image6.jpeg"]
    },
    {
        name: "Miscellaneous", folder: "miscellaneous", id: "miscellaneous",
        pics: ["Group Picture 1.jpg"]
    }


    /*{
        name: "Grad Nite 2015", folder: "grad nite 2015", id: "grad-nite-2015",
        pics: ["image1.jpeg", "image2.jpeg", "image3.jpeg", "image4.jpeg", "image5.jpeg",
            "image6.jpeg", "image7.jpeg"]
    }
    //name = what's displayed
    //folder from the main images folder
    //id from the HTML file
    */

];

var picturesColumn = document.getElementById("pictures-column");

if (picturesColumn) //should always be true
{
    //console.log("1");
    if (pictures.length == 0)
    {
        var tempMessage = document.createElement("p");
        tempMessage.innerHTML = "No pictures yet!";
        tempMessage.style.fontSize = "1.25em";
        picturesColumn.innerHTML = "";
        picturesColumn.appendChild(tempMessage);
    }
    else
    {
        //Add quick links box
        picturesColumn.innerHTML = "";
        var quickLinksDiv = document.createElement("div");
        quickLinksDiv.setAttribute("class", "panel panel-primary");
        var quickLinksInnerDiv = document.createElement("div");
        quickLinksInnerDiv.setAttribute("class", "panel-body");
        var quickLinksTitle = document.createElement("h2");
        quickLinksTitle.setAttribute("class", "quick-links-title");
        quickLinksTitle.innerHTML = "Quick Links";
        var quickLinks = document.createElement("p");
        quickLinks.setAttribute("class", "quick-links");
        var categoryCounter = 0;
        while (categoryCounter < pictures.length)
        {
            var tempQuickLink = document.createElement("a");
            tempQuickLink.href = "#" + pictures[categoryCounter].id;
            tempQuickLink.innerHTML = pictures[categoryCounter].name;
            quickLinks.appendChild(tempQuickLink);
            if (categoryCounter != pictures.length - 1)
                quickLinks.innerHTML += " &#8212; ";
            categoryCounter++;
        }
        quickLinksInnerDiv.appendChild(quickLinksTitle);
        quickLinksInnerDiv.appendChild(quickLinks);
        quickLinksDiv.appendChild(quickLinksInnerDiv);
        picturesColumn.appendChild(quickLinksDiv);


        categoryCounter = 0;
        while (categoryCounter < pictures.length)
        {
            //add title of category
            var tempDiv = document.createElement("div");
            tempDiv.setAttribute("class", "panel panel-primary");
            tempDiv.setAttribute("id", pictures[categoryCounter].id);
            var tempHeadingDiv = document.createElement("div");
            tempHeadingDiv.setAttribute("class", "panel-heading");
            var tempHeading = document.createElement("h2");
            tempHeading.setAttribute("class", "panel-title");
            tempHeading.innerHTML = pictures[categoryCounter].name;
            tempHeadingDiv.appendChild(tempHeading);
            tempDiv.appendChild(tempHeadingDiv);

            //add pictures
            var tempPicturesDiv = document.createElement("div");
            tempPicturesDiv.setAttribute("class", "panel-body pictures");

            var pictureCounter = 0;
            while (pictureCounter < pictures[categoryCounter].pics.length)
            {
                //Each picture links to the real version of it (before the width modification)
                var tempA = document.createElement("a");
                tempA.href = "../images/" + pictures[categoryCounter].folder + "/" + pictures[categoryCounter].pics[pictureCounter];
                tempA.target = "_blank";

                var tempImg = document.createElement("img");
                tempImg.src = "../images/" + pictures[categoryCounter].folder + "/" + pictures[categoryCounter].pics[pictureCounter];
                tempImg.alt = pictures[categoryCounter].name + " " + "Image " + (pictureCounter + 1);
                tempImg.style.width = "23%";

                tempA.appendChild(tempImg);
                tempPicturesDiv.appendChild(tempA);
                //console.log(pictureCounter + 1);
                pictureCounter++;
            }

            tempDiv.appendChild(tempPicturesDiv);

            var pToTop = document.createElement("p");
            var pToTopLink = document.createElement("a");
            pToTop.setAttribute("class", "back-to-top-link");
            pToTopLink.href = "";
            pToTopLink.innerHTML = "Back to top &nbsp;&nbsp;&nbsp;";
            pToTop.appendChild(pToTopLink);
            tempDiv.appendChild(pToTop);

            picturesColumn.appendChild(tempDiv);
            categoryCounter++;
        }
    }

}



/*
var formsTable = document.getElementById("table-body");

if (formsTable) //Should always be true
{
    var counter = 0;
    if (forms.length == 0)
    {
        document.getElementById("forms-table").innerHTML = "";
        var tempMessage = document.createElement("p");
        tempMessage.innerHTML = "Forms will be uploaded soon!";
        tempMessage.style.fontSize = "1.25em";
        document.getElementById("forms-table").appendChild(tempMessage);
    }
    while (counter < forms.length)
    {
        var trTag = document.createElement("tr");
        var tdNum = document.createElement("td");
        var tdName = document.createElement("td");
        var tdDescription = document.createElement("td");
        var tdLink = document.createElement("td");
        var tdLinkAddress = document.createElement("a");
        trTag.setAttribute("id", "form" + forms[counter].number); //ID for each for = form# (e.g. form1 for form #1)
        console.log("form" + forms[counter].number);
        tdNum.innerHTML = forms[counter].number;
        tdName.innerHTML = forms[counter].name;
        tdDescription.innerHTML = forms[counter].description;
        tdDescription.setAttribute("class", "hidden-xs");
        tdLinkAddress.innerHTML = "Download";
        tdLinkAddress.href = forms[counter].link;
        tdLinkAddress.target = "_blank";
        tdLink.appendChild(tdLinkAddress);
        trTag.appendChild(tdNum);
        trTag.appendChild(tdName);
        trTag.appendChild(tdDescription);
        trTag.appendChild(tdLink);
        
        counter++;
        formsTable.appendChild(trTag);

    }
}

function highlightRows(rowNums)
{
    var counter = 0;
    while (counter < forms.length)
    {
        document.getElementById("form" + forms[counter].number).style.backgroundColor = "white";
        counter++;
    }
    counter = 0;
    while (counter < rowNums.length)
    {
        document.getElementById("form" + rowNums[counter]).style.backgroundColor = "yellow";
        counter++;
    }
}
*/