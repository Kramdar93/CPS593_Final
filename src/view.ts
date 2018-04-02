//load model's method for returning some data
import { GetJsonData } from "./model";

//load in jquery too
import * as $ from "jquery";

//once the document is ready 
/*$(document).ready(function(){
    //retrieve the data
    var data = GetJsonData();
    //only display if we got anything.
    if (data.length > 0)
    {
        //save reference to our container for posts
        var container = $("#postContainer");
        //load in template data
        $.get("../templates/postCard.html", function(template){
            //once it's loaded, duplicate and populate for each bit of data
            data.forEach(element => {
                //append the template, store what was appended by picking the last child.
                var current = container.append(template).children(":last");

                current.find(".card-title").text(element.content.title);
                current.find(".card-subtitle").text(element.user);
                current.find(".card-text").text(element.content.text);

                //append images
                element.content.images.forEach(image => {
                    current.append(`<a src='${image.src}' alt='${image.alt}' />`);
                });
            });
        });
    }
});*/