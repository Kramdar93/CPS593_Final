//load express and save app object
const express = require("express");
var app = express.Router();

//export the app object
module.exports = app
    //expose node_modules for static access. Todo: only expose what's necessary
    .use(express.static("node_modules"))
    //unused middleware loader
    .use(function(req, res, next){
        next();
    })
    //load in som instances of testContent
    .get("/testContent", function (req, res) {
        htmlstring = htmlHead;
        testOBJ = require("./testContent.json"); //load testContent JSON object
        htmlstring += populateContent(testOBJ);
        htmlstring += populateContent(testOBJ);
        htmlstring += populateContent(testOBJ);
        htmlstring += populateContent(testOBJ);
        htmlstring += populateContent(testOBJ);
        htmlstring += htmlTail;
        res.write(htmlstring);
        res.end();
    })

//Construct a card that is populated with a JSONObj of testContent structure, return html string
function populateContent(JSONObj){
    //initialize card string with headers.
    result = "<div class='card text-light bg-primary'>"
              +"<div class='card-body'>"
                +"<h5 class='card-title'>" + JSONObj.content.title + "</h5>"
                +"<h6 class='card-subtitle'>" + JSONObj.user + "</h6>"
                +"<p class='card-text'>" + JSONObj.content.text + "</p>"
                ;

    //append each image
    for (i = 0; i < JSONObj.content.images.length; ++i)
    {
        result += "<img src='" + JSONObj.images[i].src + "' alt='" + JSONObj.images[i].alt + "' />" ;
    }

    //close card div
    result += "</div></div>" ;

    //return the html string
    return result;
}

//html document header
htmlHead = "<!doctype html>"
                +"<html lang='en'>"
                +"<head>"
                    +"<!-- Required meta tags -->"
                    +"<meta charset='utf-8'>"
                    +"<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>"
                
                    +"<!-- Bootstrap CSS -->"
                    +"<link rel='stylesheet' type='text/css' href='/bootstrap/dist/css/bootstrap.css'>"
                
                    +"<title>Can I Get a Fitness</title>"
                    +"<meta name='author' content='Mark Elsinger' />"
                    +"<meta name='description' content='A fitness tracking/social media web app' />"
                +"</head>"
                +"<body>"
                +"<div class='card-columns'>";

//html document end                
htmlTail = "</div>"
            +"<script src='/jquery/dist/jquery.min.js'></script>"
            +"<script src='/popper.js/dist/popper.js'></script>"
            +"<script src='/bootstrap/dist/js/bootstrap.js'></script>"
        +"</body>"
        +"</html>" ;
