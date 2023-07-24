let day = "tuesday";

switch (day){
    case "monday":
        console.log("week ahead!")
        break;
    case "tuesday":
    case "wednesday":
    case "thursday":
        console.log("it's a week day! work hard");
        break;
    case "friday":{
        console.log("it firday enjoy")
        break;
    }
    case "saturday":
    case "sunday":{
        console.log("rlx and enjoy")
        break;
    }

    default: {
        console.log("unrecognised day")
        break;
    }
}