"use strict";
exports.__esModule = true;
var model_1 = require("./model");
var $ = require("jquery");
$(document).ready(function () {
    var data = model_1.GetJsonData();
    var cardTemplate;
    if (data.length > 0) {
        $("#postContainer").load("../templates/postCard.html", function () {
            $(this).find(".card-title").text(data[0].content.title);
            var next = $(this);
            for (var i = 1; i < data.length; ++i) {
                next = next.clone();
                $(this).parent().append(next);
                next.find(".card-title").text(data[i].content.title);
            }
        });
    }
});
