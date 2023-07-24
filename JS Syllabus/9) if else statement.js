function weather(weatherCondition){
    let weather = weatherCondition;

    if(weather === "sunny"){
        console.log("it's a beautiful day! Enjoy the shushine.");
    }
    else if(weather === "cloudy"){
        console.log("it's a bit overcast today. bring a jacket.");
    }
    else if(weather=== "rainy"){
        console.log("Don't forget your umbrella! It's raining.");
    }
    else{
        console.log("sorry i don't recognize that weatehr condition");
}
}

weather(sunny);