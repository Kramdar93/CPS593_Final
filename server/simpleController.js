const express = require("express");
var app = express.Router();

module.exports = app
    .use(function(req, res, next){
        //middleware loader
        next();
    })
    .get("/testContent", function (req, res) {
        htmlstring = htmlHead();
        testOBJ = require("./testContent.json");
        htmlstring += populateContent(testOBJ);
        htmlstring += htmlTail();
        res.write(htmlstring);
        res.end();
    }); //note: no ; for some reason...

function populateContent(JSONObj){
    result = "<div class='card text-light bg-primary' style='width: 18rem;'>"
              +"<div class='card-body'>"
                +"<h5 class='card-title'>" + JSONObj.content.title + "</h5>"
                +"<h6 class='card-subtitle text-muted'>" + JSONObj.user + "</h6>"
                +"<p class='card-text'>" + JSONObj.content.text + "</p>"
                ;

    for (i = 0; i < JSONObj.content.images.length; ++i)
    {
        result += "<img src='" + JSONObj.images[i].src + "' alt='" + JSONObj.images[i].alt + "' />" ;
    }

    result += "</div></div>" ;

    return result;
}

function htmlHead(){
    return "<!doctype html>"
                +"<html lang='en'>"
                +"<head>"
                    +"<!-- Required meta tags -->"
                    +"<meta charset='utf-8'>"
                    +"<meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'>"
                
                    +"<!-- Bootstrap CSS -->"
                    +"<link rel='stylesheet' href='/node_modules/bootstrap/css/bootstrap.css' crossorigin='anonymous'>"
                
                    +"<title>Can I Get a Fitness</title>"
                    +"<meta name='author' content='Mark Elsinger' />"
                    +"<meta name='description' content='A fitness tracking/social media web app' />"
                +"</head>"
                +"<body>";
}

function htmlTail(){
    return "<script src='/node_modules/jquery/dist/jquery.min.js'></script>"
            +"<script src='/node_modules/popper.js/dist/popper.js'></script>"
            +"<script src='/node_modules/bootstrap/dist/js/bootstrap.js'></script>"
        +"</body>"
        +"</html>" ;
}