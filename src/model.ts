export function GetJsonData(){
    //broken with ts types
    //return require("../server/testContent");

    //just use hardcoded content for now.
    return [{
        "user":"admin",
        "rating":0,
        "content":{
            "title":"Test Content 1",
            "text":"A social fitness tracker web app that allows the user to track their exercises and progress, share updates and milestones, and comment/rate other users posts. User will be able to create and log in to their account, and maintain a friends list of other users for easier lookup and a more relevant feed.",
            "images":[]
        },
        "comments":[]
    },
    {
        "user":"admin",
        "rating":0,
        "content":{
            "title":"Test Content 2",
            "text":"A social fitness tracker web app that allows the user to track their exercises and progress, share updates and milestones, and comment/rate other users posts. User will be able to create and log in to their account, and maintain a friends list of other users for easier lookup and a more relevant feed.",
            "images":[]
        },
        "comments":[]
    },
    {
        "user":"admin",
        "rating":0,
        "content":{
            "title":"Test Content 3",
            "text":"A social fitness tracker web app that allows the user to track their exercises and progress, share updates and milestones, and comment/rate other users posts. User will be able to create and log in to their account, and maintain a friends list of other users for easier lookup and a more relevant feed.",
            "images":[]
        },
        "comments":[]
    }];
};