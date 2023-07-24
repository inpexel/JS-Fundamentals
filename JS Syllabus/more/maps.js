const userPreferences = new Map();

//Setting user preferences
userPreferences.set("theme", "dark");
userPreferences.set("language", "english");
userPreferences.set("notifications", true);

//getting user preferences
console.log(userPreferences.get("theme"));
console.log(userPreferences.get("language"));
console.log(userPreferences.get("notifications"));

// checking if a preference exists
console.log(userPreferences.has("language"));

// deleting a preference
userPreferences.delete('notifications');
console.log(userPreferences.has('notifications'));