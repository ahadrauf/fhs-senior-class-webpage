//console.log("HI");

var forms = [
    {
        number: 1, name: "Personal Statement Workshop Form",
        description: "Print and fill out this form for the Personal Statement Workshop on 9/1.",
        link: "../downloads/Personal Statement Registration.pdf"
    },
    {
        number: 2, name: "Dance Behavior Agreement",
        description: "This document contains important information about the rules Foothill sets for its dances.",
        link: "../downloads/Dance Behavior Agreement.pdf"
    },
    {
        number: 3, name: "Dance Agreement Form EDIT",
        description: "Fill out this form online and then print it. It will need to be turned in when you go to purchase tickets.",
        link: "../downloads/Dance Agreement Form EDIT.pdf"
    },
    {
        number: 4, name: "Cal Grant Opt-Out Form English",
        description: "Download and submit this form to opt out of submitting your GPA to the state for Cal Grant consideration.",
        link: "../downloads/Cal Grant Opt-Out Form English.pdf"
    },
    {
        number: 5, name: "Cal Grant Opt-Out Form Spanish",
        description: "Download and submit this form to opt out of submitting your GPA to the state for Cal Grant consideration.",
        link: "../downloads/Cal Grant Opt-Out Form Spanish.pdf"
    },
    {
        number: 6, name: "Grad Nite Forms",
        description: "Download and submit these forms to register for the Senior Grad Night trip.",
        link: "../downloads/Grad Nite Forms.pdf"
    },
    {
        number: 7, name: "Medication Consent Form EDIT",
        description: "Fill out this form online and print it if you need medications, either prescription or over-the-counter, with you on the trip.",
        link: "../downloads/Medication Consent Form EDIT.pdf"
    },
    {
        number: 8, name: "Food Allergy Plan Form EDIT",
        description: "Fill out this form online and print it if you have a food allergy.",
        link: "../downloads/Food Allergy Plan Form EDIT.pdf"
    },
    {
        number: 9, name: "Chaperone Signature Form",
        description: "Download and submit this form if you want to chaperone the Grad Nite trip.",
        link: "../downloads/Chaperone Signature Form.pdf"
    },
    {
        number: 10, name: "Senior Ball Agreement Form",
        description: "Download and submit this form if you want to attend Senior Ball.",
        link: "../downloads/Senior Ball Agreement 2016.pdf" 
    }
    /*{
        number: 1, name: "Cal Grant GPA Info Release",
        description: "Required to apply for federal financial aid in California.",
        link: "../downloads/Cal Grant GPA Info Release.pdf" //the ../ moves the selection up one level, out of the forms folder and into the main collection of folders
    }
    */

];

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
        //console.log("form" + forms[counter].number);
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
