import { GetJsonData } from "./model";
import * as $ from "jquery";

$(document).ready(function(){
    var data = GetJsonData();
    var cardTemplate;
    if (data.length > 0)
    {
        $("#postContainer").load("../templates/postCard.html", function(){
            $(this).find(".card-title").text(data[0].content.title);
            var next = $(this);
            for(var i = 1; i < data.length; ++i)
            {
                next = next.clone();
                $(this).parent().append(next);
                next.find(".card-title").text(data[i].content.title);
            }
        });
    }
});